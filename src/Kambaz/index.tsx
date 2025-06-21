import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "./Account/Signin";
import Account from "./Account";
import Courses from "./Courses";
import { setCurrentUser } from "./Account/reducer";
import ProtectedRoute from "./Account/ProtectedRoute";
import Navigation from "./Navigation";
import "./styles.css";

export default function Kambaz() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const [enrolling, setEnrolling] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const fetchProfile = async () => {
        try {
            const user = await userClient.profile();
            dispatch(setCurrentUser(user));
        } catch (err: any) {
            dispatch(setCurrentUser(null));
        } finally {
            setLoading(false);
        }
    };

    const findCoursesForUser = async () => {
        try {
            if (currentUser) {
                const courses = await userClient.findCoursesForUser(currentUser._id);
                setCourses(courses);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const fetchAllCourses = async () => {
        try {
            const allCourses = await courseClient.fetchAllCourses();
            if (currentUser) {
                const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
                const courses = allCourses.map((course: any) => {
                    if (enrolledCourses.find((c: any) => c._id === course._id)) {
                        return { ...course, enrolled: true };
                    } else {
                        return { ...course, enrolled: false };
                    }
                });
                setCourses(courses);
            } else {
                setCourses(allCourses);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    useEffect(() => {
        if (currentUser) {
            if (enrolling) {
                fetchAllCourses();
            } else {
                findCoursesForUser();
            }
        } else {
            fetchAllCourses();
        }
    }, [currentUser, enrolling]);

    const addNewCourse = async () => {
        try {
            const newCourse = await courseClient.createCourse(course);
            if (currentUser && currentUser.role === "FACULTY") {
                try {
                    await userClient.enrollIntoCourse(currentUser._id, newCourse._id);
                    newCourse.enrolled = true;
                } catch (err) {
                    console.error(err);
                }
            }
            setCourses([...courses, newCourse]);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteCourse = async (courseId: string) => {
        try {
            await courseClient.deleteCourse(courseId);
            setCourses(courses.filter((course) => course._id !== courseId));
        } catch (err) {
            console.log(err);
        }
    };

    const updateCourse = async () => {
        try {
            await courseClient.updateCourse(course);
            setCourses(
                courses.map((c) => {
                    if (c._id === course._id) {
                        return course;
                    }
                    return c;
                })
            );
        } catch (err) {
            console.log(err);
        }
    };

    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (currentUser) {
            if (enrolled) {
                await userClient.enrollIntoCourse(currentUser._id, courseId);
            } else {
                await userClient.unenrollFromCourse(currentUser._id, courseId);
            }
            setCourses(
                courses.map((course) => {
                    if (course._id === courseId) {
                        return { ...course, enrolled: enrolled };
                    } else {
                        return course;
                    }
                })
            );
        }
    };

    const renderRoutes = () => {
        if (loading) {
            return <h1>Loading...</h1>;
        }
        
        return (
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Account/*" element={
                    <ProtectedRoute>
                        <Account />
                    </ProtectedRoute>
                } />
                <Route path="Dashboard" element={
                    <ProtectedRoute>
                        <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}
                            enrolling={enrolling}
                            setEnrolling={setEnrolling}
                            updateEnrollment={updateEnrollment}
                        />
                    </ProtectedRoute>
                } />
                <Route path="Courses/:cid/*" element={
                    <ProtectedRoute>
                        <Courses />
                    </ProtectedRoute>
                } />
            </Routes>
        );
    };

    return (
        <div className="d-flex">
            {!loading && currentUser && <Navigation />}
            <div className={currentUser ? "wd-main-content-offset" : ""}>
                {renderRoutes()}
            </div>
        </div>
    );
}