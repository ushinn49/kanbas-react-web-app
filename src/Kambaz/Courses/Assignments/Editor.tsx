import { useParams, Link } from "react-router-dom";
import { Form, Row, Col, Button, FloatingLabel } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid } = useParams();
  const assignmentName = "A1 - ENV + HTML";
  const assignmentDescription = "The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.";

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control id="wd-name" defaultValue={assignmentName} />
      </Form.Group>

      <Form.Group className="mb-3">
        <FloatingLabel controlId="wd-description" label="Description">
          <Form.Control
            as="textarea"
            defaultValue={assignmentDescription}
            style={{ height: '150px' }}
          />
        </FloatingLabel>
      </Form.Group>

      <Row className="mb-3 align-items-center">
        <Col md={3} className="text-md-end">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
        </Col>
        <Col md={9}>
          <Form.Control id="wd-points" type="number" defaultValue={100} />
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col md={3} className="text-md-end">
          <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
        </Col>
        <Col md={9}>
          <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col md={3} className="text-md-end">
          <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
        </Col>
        <Col md={9}>
          <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col md={3} className="text-md-end">
          <Form.Label>Submission Type</Form.Label>
        </Col>
        <Col md={9}>
          <Form.Select id="wd-submission-type" defaultValue="Online">
            <option value="Online">Online</option>
            <option value="On Paper">On Paper</option>
            <option value="No Submission">No Submission</option>
          </Form.Select>
        </Col>
      </Row>

      {true && (
        <Row className="mb-3">
          <Col md={3}></Col>
          <Col md={9} className="border p-3 rounded">
            <Form.Label className="fw-bold">Online Entry Options</Form.Label>
            <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
            <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
            <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
            <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
          </Col>
        </Row>
      )}

      <Row className="mb-3 align-items-center">
        <Col md={3} className="text-md-end">
          <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
        </Col>
        <Col md={9}>
          <Form.Control id="wd-assign-to" defaultValue="Everyone" />
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col md={3} className="text-md-end">
          <Form.Label htmlFor="wd-due-date">Due</Form.Label>
        </Col>
        <Col md={9}>
          <Form.Control id="wd-due-date" type="date" defaultValue="2024-05-13" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
          <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
        </Col>
        <Col md={4}>
          <Form.Control id="wd-available-from" type="date" defaultValue="2024-05-06" />
        </Col>
        <Col md={1} className="text-md-end ps-0">
            <Form.Label htmlFor="wd-available-until">Until</Form.Label>
        </Col>
        <Col md={4}>
          <Form.Control id="wd-available-until" type="date" defaultValue="2024-05-20" />
        </Col>
      </Row>

      <hr />
      <div className="d-flex justify-content-end">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-light me-2 border">
          Cancel
        </Link>
        <Button variant="danger">
          Save
        </Button>
      </div>
    </div>
  );
}