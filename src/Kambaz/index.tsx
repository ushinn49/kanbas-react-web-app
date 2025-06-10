import { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from './Account/Session';
import * as userClient from './Account/client';
import { setCourses } from './Courses/reducer';
import type { RootState, AppDispatch } from './store';

export default function Kambaz() {
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const dispatch: AppDispatch = useDispatch();

    // Fetches the courses for the current user and populates the Redux store.
    // This effect runs whenever the currentUser logs in or out.
    const fetchCourses = async () => {
        try {
            if (currentUser) {
                const courses = await userClient.findMyCourses();
                dispatch(setCourses(courses));
            } else {
                // If user logs out, clear the courses from the store.
                dispatch(setCourses([]));
            }
        } catch (error) {
            console.error("Failed to fetch courses:", error);
            // Optionally dispatch an error state to the store here.
        }
    };

    // The dependency array [currentUser] ensures this runs only when the user's login state changes.
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);

    return (
        // Session wrapper handles checking for an active server session on initial load.
        <Session>
            <div id="wd-kambaz">
                <div className="d-flex">
                    {/* This is the main side navigation bar */}
                    <div style={{ width: "110px", position: "fixed", height: "100vh", zIndex: 1000 }}>
                        <KambazNavigation />
                    </div>
                    {/* This is the main content area with a left margin to avoid overlap */}
                    <div style={{ marginLeft: "110px", width: "100%" }} className="p-3">
                        <Routes>
                            {/* The default route redirects to the Dashboard, which is protected. */}
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            
                            {/* The Account route is where login/signup/profile pages live. */}
                            <Route path="Account/*" element={<Account />} />

                            {/* All primary feature routes are wrapped in ProtectedRoute */}
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
                                    <ProtectedRoute>
                                        <Courses />
                                    </ProtectedRoute>
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