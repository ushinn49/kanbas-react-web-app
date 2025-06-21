import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (courseId: string) => void;
    updateCourse: () => void; enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard
                {currentUser &&
                    <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary">
                        {enrolling ? "My Courses" : "All Courses"}
                    </button>
                }
            </h1>
            <hr />
            {currentUser && currentUser.role === "FACULTY" &&
                <div>
                    <h2>New Course</h2>
                    <input value={course.name} className="form-control"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <input value={course.number} className="form-control"
                        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                    <input value={course.startDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                    <input value={course.endDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                    <button onClick={addNewCourse} >Add</button>
                    <button onClick={updateCourse} >Update</button>
                </div>
            }
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        {currentUser && enrolling && (
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                updateEnrollment(course._id, !course.enrolled);
                                            }} className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
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
                                            }}>Edit</button>
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}>Delete</button>
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