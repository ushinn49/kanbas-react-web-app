import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const assignment = assignments.find((a: any) => a._id === aid);

  const [assignmentData, setAssignmentData] = useState({
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    dueDate: new Date().toISOString().split("T")[0],
    availableFrom: new Date().toISOString().split("T")[0],
    availableUntil: new Date().toISOString().split("T")[0]
  });

  useEffect(() => {
    if (assignment && aid !== "new") {
      setAssignmentData({
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableFrom: assignment.availableFrom,
        availableUntil: assignment.availableUntil
      });
    }
  }, [assignment, aid]);

  const handleSave = () => {
    if (aid === "new") {
      dispatch(addAssignment({ ...assignmentData, course: cid }));
    } else {
      dispatch(updateAssignment({ ...assignmentData, _id: aid }));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignmentData.title}
          className="form-control"
          onChange={(e) =>
            setAssignmentData({ ...assignmentData, title: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea
          id="wd-description"
          value={assignmentData.description}
          className="form-control"
          rows={5}
          onChange={(e) =>
            setAssignmentData({
              ...assignmentData,
              description: e.target.value
            })
          }
        />
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
          <input
            id="wd-points"
            type="number"
            value={assignmentData.points}
            className="form-control"
            onChange={(e) =>
              setAssignmentData({
                ...assignmentData,
                points: parseInt(e.target.value)
              })
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-due-date" className="form-label">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            value={assignmentData.dueDate}
            className="form-control"
            onChange={(e) =>
              setAssignmentData({
                ...assignmentData,
                dueDate: e.target.value
              })
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-available-from" className="form-label">
            Available from
          </label>
          <input
            type="date"
            id="wd-available-from"
            value={assignmentData.availableFrom}
            className="form-control"
            onChange={(e) =>
              setAssignmentData({
                ...assignmentData,
                availableFrom: e.target.value
              })
            }
          />
        </div>
        <div className="col">
          <label htmlFor="wd-available-until" className="form-label">
            Until
          </label>
          <input
            type="date"
            id="wd-available-until"
            value={assignmentData.availableUntil}
            className="form-control"
            onChange={(e) =>
              setAssignmentData({
                ...assignmentData,
                availableUntil: e.target.value
              })
            }
          />
        </div>
      </div>

      <hr />
      <div className="float-end">
        <button
          className="btn btn-secondary me-2"
          onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}
        >
          Cancel
        </button>
        <button className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}