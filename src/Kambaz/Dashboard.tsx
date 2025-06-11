import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import * as coursesClient from "./Courses/client"; // For generic course actions
import * as userClient from "./Account/client";     // For user-specific actions like create
import { addCourse, deleteCourse, updateCourse, setCourse } from "./Courses/reducer";
import { Button, Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import type { Course } from './Database';


export default function Dashboard() {
  const { courses, course } = useSelector((state: RootState) => state.coursesReducer);
  const dispatch: AppDispatch = useDispatch();

  // Handles changes in the form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setCourse({ ...course, [e.target.name]: e.target.value }));
  };

  // Handles adding a new course (Fixed)
  const handleAddNewCourse = async () => {
    try {
      const newCourseFromServer = await userClient.createCourse(course);
      dispatch(addCourse(newCourseFromServer));
    } catch (err) {
      console.error("Failed to add course", err);
    }
  };

  // Handles updating an existing course (Fixed)
  const handleUpdateCourse = async () => {
    try {
      await coursesClient.updateCourse(course);
      dispatch(updateCourse(course));
    } catch (err) {
      console.error("Failed to update course", err);
    }
  };

  // Handles deleting a course
  const handleDeleteCourse = async (courseId: string) => {
    try {
      await coursesClient.deleteCourse(courseId);
      dispatch(deleteCourse(courseId));
    } catch (err) {
      console.error("Failed to delete course", err);
    }
  };

  // Loads a course's data into the form for editing
  const handleEditCourse = (courseToEdit: Course) => {
    dispatch(setCourse(courseToEdit));
  };

  return (
    <Container fluid className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <div className="mb-4 p-3 border rounded">
        <h5>{course._id && course._id !== "0" ? "Edit Course" : "Add New Course"}</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-2">
              <FormControl name="name" placeholder="Course Name" value={course.name} onChange={handleInputChange} />
            </Col>
            <Col md={6} className="mb-2">
              <FormControl name="number" placeholder="Course Number" value={course.number} onChange={handleInputChange} />
            </Col>
          </Row>
          {/* ... Other form fields would go here ... */}
          {course._id && course._id !== "0" ? (
            <Button variant="warning" onClick={handleUpdateCourse}>Update Course</Button>
          ) : (
            <Button variant="primary" onClick={handleAddNewCourse}><FaPlusCircle /> Add Course</Button>
          )}
        </Form>
      </div>
      
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <Row xs={1} md={2} lg={3} xl={4} className="g-4" id="wd-dashboard-courses">
        {courses.map((c: Course) => (
          <Col key={c._id}>
            <Card className="h-100">
              {/* ... Card content ... */}
              <Card.Footer>
                  <Button variant="outline-warning" size="sm" className="me-2" onClick={() => handleEditCourse(c)}>
                    <FaEdit /> Edit
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDeleteCourse(c._id)}>
                    <FaTrashAlt /> Delete
                  </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
