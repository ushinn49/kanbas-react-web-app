import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { ListGroup } from "react-bootstrap";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment: any) => assignment.course === cid);
  
  return (
    <div id="wd-assignments">
      <ListGroup className="rounded-0">
        <ListGroup.Item className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            </div>
            <div>
              40% of Total <FaEllipsisV />
            </div>
          </div>
          <ListGroup className="rounded-0">
            {assignments.map((assignment: any) => (
              <ListGroup.Item key={assignment._id} className="wd-assignment p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <FaCheckCircle className="me-2 text-success" />
                <div className="flex-fill">
                  <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link text-decoration-none text-dark">
                    <div className="fw-bold">{assignment.title}</div>
                  </Link>
                  <div>
                    <span className="text-danger">Multiple Modules</span> | 
                    <strong> Not available until</strong> {assignment.availableDate} |
                    <strong> Due</strong> {assignment.dueDate} | {assignment.points} pts
                  </div>
                </div>
                <FaEllipsisV />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}