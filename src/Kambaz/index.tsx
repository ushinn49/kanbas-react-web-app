import { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";       
import ProtectedCourseRoute from "./Account/ProtectedRoute";
import Session from './Account/Session';
import * as userClient from './Account/client';
import { setCourses } from './Courses/reducer';
import type { RootState, AppDispatch } from './store';



export default function Kambaz() {
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const dispatch: AppDispatch = useDispatch();

    const fetchCourses = async () => {
        try {
            if (currentUser) {
                const courses = await userClient.findMyCourses();
                dispatch(setCourses(courses));
            } else {
                dispatch(setCourses([]));
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, [currentUser]);

    return (
        <Session>
            <div id="wd-kambaz">
                <div className="d-flex">
                    <div style={{ width: "110px", /* ... */ }}>
                        <KambazNavigation />
                    </div>
                    <div style={{ marginLeft: "110px", width: "100%" }} className="p-3">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Account/*" element={<Account />} />

                            <Route
                                path="Dashboard"
                                element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="Courses/:cid/*"
                                element={
                                    <ProtectedCourseRoute>
                                        <Courses />
                                    </ProtectedCourseRoute>
                                }
                            />

                            <Route path="Calendar" element={
                                <ProtectedRoute>
                                    <div className="p-3"><h1>Calendar</h1></div>
                                </ProtectedRoute>
                            } />
                            <Route path="Inbox" element={
                                <ProtectedRoute>
                                    <div className="p-3"><h1>Inbox</h1></div>
                                </ProtectedRoute>
                            } />
                        </Routes>
                    </div>
                </div>
            </div>
        </Session>
    );
}