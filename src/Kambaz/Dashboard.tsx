import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (courseId: string) => void;
    updateCourse: () => void; enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [showForm, setShowForm] = useState(false);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard
                {currentUser &&
                    <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary ms-2">
                        {enrolling ? "My Courses" : "All Courses"}
                    </button>
                }
                {currentUser && currentUser.role === "FACULTY" &&
                    <button onClick={() => setShowForm(!showForm)} className="float-end btn btn-success">
                        {showForm ? "Cancel" : "Add Course"}
                    </button>
                }
            </h1>
            <hr />
            {currentUser && currentUser.role === "FACULTY" && showForm &&
                <div className="card p-3 mb-4 shadow-sm">
                    <h4 className="mb-3">New Course</h4>
                    <div className="row g-2">
                        <div className="col-md-6">
                            <input value={course.name} placeholder="Course Name" className="form-control"
                                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <input value={course.number} placeholder="Course Number" className="form-control"
                                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label small mb-0">Start Date</label>
                            <input value={course.startDate} className="form-control" type="date"
                                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label small mb-0">End Date</label>
                            <input value={course.endDate} className="form-control" type="date"
                                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                        </div>
                    </div>
                    <div className="mt-3">
                        <button onClick={() => { addNewCourse(); setShowForm(false); }} className="btn btn-primary me-2">Save</button>
                        <button onClick={() => { updateCourse(); setShowForm(false); }} className="btn btn-secondary">Update</button>
                    </div>
                </div>
            }
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col">
                            <div className="card h-100">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="wd-dashboard-course-title card-title flex-grow-1">
                                        {currentUser && enrolling && (
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                updateEnrollment(course._id, !course.enrolled);
                                            }} className={`btn btn-sm ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                {course.enrolled ? "Unenroll" : "Enroll"}
                                            </button>
                                        )}
                                        <Link to={`/Kambaz/Courses/${course._id}/Modules`} className="text-decoration-none">
                                            {course.name}
                                        </Link>
                                    </h5>
                                    {currentUser && currentUser.role === "FACULTY" &&
                                        <div>
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                                setShowForm(true);
                                            }} className="btn btn-outline-secondary btn-sm me-2">Edit</button>
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }} className="btn btn-outline-danger btn-sm">Delete</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
