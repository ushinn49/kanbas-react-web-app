import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import * as userClient from "./Account/client";
import type { Course } from "./Database";

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [newCourse, setNewCourse] = useState({
    name: "",
    number: "",
    startDate: "2023-09-01",
    endDate: "2023-12-31",
    description: ""
  });

  const handleCreateCourse = async () => {
    try {
      const created = await userClient.createCourse(newCourse);
      setCourses([created, ...courses]);
      setNewCourse({
        name: "",
        number: "",
        startDate: "2023-09-01",
        endDate: "2023-12-31",
        description: ""
      });
    } catch (err) {
      console.error(err);
      alert("Failed to create course. Please try again later.");
    }
  };

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${userClient.REMOTE_SERVER}/api/users/current/courses`, {
        withCredentials: true
      });
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setError("Failed to load courses. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />


      <div className="border p-3 mb-3">
        <h4>Create New Course</h4>
        <div className="row g-2">
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Course Name"
              value={newCourse.name}
              onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <input
              className="form-control"
              placeholder="Course Number"
              value={newCourse.number}
              onChange={(e) => setNewCourse({ ...newCourse, number: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <input
              className="form-control"
              placeholder="Start Date"
              type="date"
              value={newCourse.startDate}
              onChange={(e) => setNewCourse({ ...newCourse, startDate: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <input
              className="form-control"
              placeholder="End Date"
              type="date"
              value={newCourse.endDate}
              onChange={(e) => setNewCourse({ ...newCourse, endDate: e.target.value })}
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Description"
              value={newCourse.description}
              onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
            />
          </div>
          <div className="col-12 text-end">
            <button className="btn btn-success" onClick={handleCreateCourse}>
              Add Course
            </button>
          </div>
        </div>
      </div>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        {courses.length === 0 ? (
          <div>No courses found. Please contact your administrator.</div>
        ) : (
          courses.map((course) => (
            <div className="wd-dashboard-course" key={course._id}>
              <Link 
                to={`/Kambaz/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link"
              >
                <img src="/src/images/reactjs.jpg" width={200} />
                <div>
                  <h5>
                    {course.number} {course.name}
                  </h5>
                  <p className="wd-dashboard-course-title">
                    {course.description}
                  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
