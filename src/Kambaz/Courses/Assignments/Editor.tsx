import { useParams, Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((assignment: any) => assignment._id === aid);
  
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" value={assignment?.title} />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={assignment?.description} />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" value={assignment?.points} />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Assign</Form.Label>
          <Form.Label>Due</Form.Label>
          <Form.Control type="datetime-local" value={assignment?.dueDate} />
          <Form.Label>Available from</Form.Label>
          <Form.Control type="datetime-local" value={assignment?.availableDate} />
          <Form.Label>Until</Form.Label>
          <Form.Control type="datetime-local" value={assignment?.untilDate} />
        </Form.Group>
        
        <div className="d-flex justify-content-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">
            Save
          </Link>
        </div>
      </Form>
    </div>
  );
}