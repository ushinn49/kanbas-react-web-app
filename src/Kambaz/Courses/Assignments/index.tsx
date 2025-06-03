import { useParams, useNavigate, Link } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer"; 
import { FaPlus, FaSearch, FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import {  FaPencil, FaTrashCan } from "react-icons/fa6"; 



export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const handleDeleteAssignment = (assignmentId: string, assignmentTitle: string) => {
    if (window.confirm(`Are you sure you want to delete the assignment "${assignmentTitle}"?`)) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments" className="mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        {currentUser && currentUser.role === "FACULTY" && (
          <div>
            <button className="btn btn-secondary me-1">
              <FaPlus className="me-1" />
              Group
            </button>
            <button
              className="btn btn-danger"
              onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}
              id="wd-add-assignment-btn"
            >
              <FaPlus className="me-1" />
              Assignment
            </button>
          </div>
        )}
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <IoEllipsisVertical className="float-end" />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-lesson list-group-item p-3 ps-1"
                >
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <FaPencil
                      className="me-3 text-success" 
                      style={{ cursor: currentUser && currentUser.role === "FACULTY" ? "pointer" : "default" }}
                      onClick={() => {
                        if (currentUser && currentUser.role === "FACULTY") {
                          navigate(`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`);
                        }
                      }}
                      id={`wd-edit-assignment-icon-${assignment._id}`}
                    />
                    <div className="flex-grow-1">
                      <Link
                        className="wd-assignment-link text-decoration-none text-dark"
                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        onClick={(e) => {
                            if (!(currentUser && currentUser.role === "FACULTY")) {
                                e.preventDefault();
                            }
                        }}
                        id={`wd-assignment-link-${assignment._id}`}
                      >
                        <strong>{assignment.title}</strong>
                      </Link>
                      <div className="text-muted small">
                        Multiple Modules | Due{" "}
                        {new Date(assignment.dueDate).toLocaleDateString()} at
                        11:59pm | {assignment.points} pts
                      </div>
                    </div>
                    {currentUser && currentUser.role === "FACULTY" && (
                      <div className="d-flex align-items-center">
                        <FaTrashCan
                          className="text-danger me-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDeleteAssignment(assignment._id, assignment.title) }
                          id={`wd-delete-assignment-btn-${assignment._id}`}
                        />
                        <FaCheckCircle className="text-success me-2" />
                        <IoEllipsisVertical />
                      </div>
                    )}
                     {! (currentUser && currentUser.role === "FACULTY") && (
                        <IoEllipsisVertical />
                     )}
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}