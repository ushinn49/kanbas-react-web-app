import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCourse, addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { toggleShowAllCourses, enrollInCourse, unenrollFromCourse } from "./enrollmentsReducer";

export default function Dashboard() {
  const { courses, course } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments, showAllCourses } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (e: any) => e.user === currentUser?._id && e.course === courseId
    );
  };

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course: any) => isEnrolled(course._id));

  return (
    <div className="p-4" id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(toggleShowAllCourses())}
        >
          {showAllCourses ? "Enrolled Courses" : "All Courses"}
        </button>
      </div>
      <hr />
      {currentUser && currentUser.role === "FACULTY" && !showAllCourses && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addCourse())}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse())}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) =>
              dispatch(setCourse({ ...course, name: e.target.value }))
            }
          />
          <textarea
            value={course.description}
            className="form-control"
            rows={3}
            onChange={(e) =>
              dispatch(setCourse({ ...course, description: e.target.value }))
            }
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All" : "Published"} Courses ({displayedCourses.length})
      </h2>
      <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course: any) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <img
                  src={course.image || "/images/reactjs.jpg"}
                  className="card-img-top"
                  style={{ height: "160px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.description}</p>
                  <div className="d-flex justify-content-between">
                    {isEnrolled(course._id) ? (
                      <>
                        <Link
                          to={`/Kambaz/Courses/${course._id}/Home`}
                          className="btn btn-primary"
                        >
                          Go
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            dispatch(
                              unenrollFromCourse({
                                userId: currentUser._id,
                                courseId: course._id
                              })
                            )
                          }
                        >
                          Unenroll
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-success w-100"
                        onClick={() =>
                          dispatch(
                            enrollInCourse({
                              userId: currentUser._id,
                              courseId: course._id
                            })
                          )
                        }
                      >
                        Enroll
                      </button>
                    )}
                  </div>
                  {currentUser &&
                    currentUser.role === "FACULTY" &&
                    isEnrolled(course._id) &&
                    !showAllCourses && (
                      <div className="mt-2">
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(deleteCourse(course._id));
                          }}
                          className="btn btn-danger btn-sm me-2"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(setCourse(course));
                          }}
                          className="btn btn-warning btn-sm"
                        >
                          Edit
                        </button>
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}