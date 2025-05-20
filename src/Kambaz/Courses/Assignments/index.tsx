import { Link } from "react-router-dom";
import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { FaPlus, FaSearch, FaEllipsisV } from "react-icons/fa";
import { BsGripVertical } from 'react-icons/bs';

export default function Assignments() {
  const assignments = [
    { _id: "A101", title: "A1 - ENV + HTML", course: "RS101", points: 100, due: "May 13 at 11:59pm", available: "May 6 at 12:00am", multipleModules: true },
    { _id: "A102", title: "A2 - CSS + BOOTSTRAP", course: "RS101", points: 100, due: "May 20 at 11:59pm", available: "May 13 at 12:00am", multipleModules: true },
    { _id: "A103", title: "A3 - JAVASCRIPT + REACT", course: "RS101", points: 100, due: "May 27 at 11:59pm", available: "May 20 at 12:00am", multipleModules: true },
  ];

  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="w-25">
          <InputGroup>
            <InputGroup.Text><FaSearch /></InputGroup.Text>
            <FormControl
              placeholder="Search for Assignments"
              id="wd-search-assignment"
            />
          </InputGroup>
        </div>
        <div>
          <Button variant="light" className="me-1 border" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup variant="flush" id="wd-assignments-list-group" className="border border-gray rounded-2">
        <ListGroup.Item className="p-3 bg-light fw-bold d-flex justify-content-between align-items-center">
          <div>
            <BsGripVertical className="me-2" />
            ASSIGNMENTS
            <span className="badge bg-secondary ms-2 rounded-pill">40% of Total</span>
          </div>
          <div>
            <Button variant="light" size="sm" className="border me-1"><FaPlus /></Button>
            <Button variant="light" size="sm" className="border"><FaEllipsisV /></Button>
          </div>
        </ListGroup.Item>
        <div id="wd-assignment-list">
          {assignments.map((assignment) => (
            <ListGroup.Item key={assignment._id} className="wd-assignment-list-item p-3 d-flex align-items-center">
              <BsGripVertical className="me-3 text-secondary" />
              <div className="flex-grow-1">
                <Link
                  to={`/Kambaz/Courses/1234/Assignments/${assignment._id}`}
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  {assignment.title}
                </Link>
                <div className="text-muted small">
                  {assignment.multipleModules ? "Multiple Modules | " : ""}
                  <strong>Not available until</strong> {assignment.available} |
                  <strong> Due</strong> {assignment.due} | {assignment.points} pts
                </div>
              </div>
              <Button variant="light" size="sm" className="border ms-2"><FaEllipsisV /></Button>
            </ListGroup.Item>
          ))}
        </div>
      </ListGroup>
    </div>
  );
}