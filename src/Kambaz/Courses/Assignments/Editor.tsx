export default function AssignmentEditor() {
  const assignmentName = "A1 - ENV + HTML";
  const assignmentDescription = "The assignment is available online. Submit a link to the landing page of your Environment Setup and a link to the GitHub repository for your HTML exercises.";
  const points = 100;
  const assignmentGroup = "ASSIGNMENTS";
  const displayGradeAs = "Percentage";


  return (
    <div id="wd-assignments-editor" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="wd-name" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Assignment Name
        </label>
        <input 
          id="wd-name" 
          defaultValue={assignmentName}
          style={{ width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }} 
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <textarea 
          id="wd-description" 
          rows={4}
          defaultValue={assignmentDescription} 
          style={{ width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>

          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", padding: "8px", width: "20%" }}>
              <label htmlFor="wd-points" style={{ fontWeight: "bold" }}>Points</label>
            </td>
            <td style={{ padding: "8px" }}>
              <input 
                id="wd-points" 
                type="number" 
                defaultValue={points}
                style={{ width: "150px", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }} 
              />
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", padding: "8px" }}>
              <label htmlFor="wd-group" style={{ fontWeight: "bold" }}>Assignment Group</label>
            </td>
            <td style={{ padding: "8px" }}>
              <select 
                id="wd-group" 
                defaultValue={assignmentGroup}
                style={{ width: "250px", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }}
              >
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", padding: "8px" }}>
              <label htmlFor="wd-display-grade-as" style={{ fontWeight: "bold" }}>Display Grade as</label>
            </td>
            <td style={{ padding: "8px" }}>
              <select 
                id="wd-display-grade-as" 
                defaultValue={displayGradeAs}
                style={{ width: "250px", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }}
              >
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Letter Grade">Letter Grade</option>
              </select>
            </td>
          </tr>
          
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", padding: "8px" }}>
              <label htmlFor="wd-submission-type" style={{ fontWeight: "bold" }}>Submission Type</label>
            </td>
            <td style={{ padding: "8px" }}>
              <select 
                id="wd-submission-type" 
                defaultValue="Online"
                style={{ width: "250px", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "10px" }}
              >
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
                <option value="No Submission">No Submission</option>
              </select>
              

              <div style={{ border: "1px solid #eee", padding: "10px", borderRadius: "4px" }}>
                <strong>Online Entry Options</strong>
                <div>
                  <input type="checkbox" id="wd-text-entry" defaultChecked /> 
                  <label htmlFor="wd-text-entry" style={{ marginLeft: "5px" }}>Text Entry</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-website-url" />
                  <label htmlFor="wd-website-url" style={{ marginLeft: "5px" }}>Website URL</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-media-recordings" defaultChecked/>
                  <label htmlFor="wd-media-recordings" style={{ marginLeft: "5px" }}>Media Recordings</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-student-annotation" />
                  <label htmlFor="wd-student-annotation" style={{ marginLeft: "5px" }}>Student Annotation</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-file-upload" />
                  <label htmlFor="wd-file-upload" style={{ marginLeft: "5px" }}>File Uploads</label>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", padding: "8px" }}>
              <label htmlFor="wd-assign-to" style={{ fontWeight: "bold" }}>Assign to</label>
            </td>
            <td style={{ padding: "8px" }}>
              <input 
                id="wd-assign-to" 
                defaultValue="Everyone"
                style={{ width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }} 
              />
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", padding: "8px" }}>
              <label htmlFor="wd-due-date" style={{ fontWeight: "bold" }}>Due</label>
            </td>
            <td style={{ padding: "8px" }}>
              <input 
                type="date" 
                id="wd-due-date" 
                defaultValue="2024-05-12"
                style={{ width: "250px", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }} 
              />
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", padding: "8px" }}>
              <label htmlFor="wd-available-from" style={{ fontWeight: "bold" }}>Available from</label>
            </td>
            <td style={{ padding: "8px" }}>
              <input 
                type="date" 
                id="wd-available-from" 
                defaultValue="2024-05-06"
                style={{ width: "250px", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }} 
              />
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", padding: "8px" }}>
              <label htmlFor="wd-available-until" style={{ fontWeight: "bold" }}>Until</label>
            </td>
            <td style={{ padding: "8px" }}>
              <input 
                type="date" 
                id="wd-available-until" 
                defaultValue="2024-05-26"
                style={{ width: "250px", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }} 
              />
            </td>
          </tr>
        </tbody>
      </table>


      <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid #ccc", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <button 
          style={{ padding: "10px 15px", backgroundColor: "#f0f0f0", border: "1px solid #ccc", borderRadius: "4px", cursor: "pointer" }}

        >
          Cancel
        </button>
        <button 
          style={{ padding: "10px 15px", backgroundColor: "green", color: "white", border: "1px solid green", borderRadius: "4px", cursor: "pointer" }}

        >
          Save
        </button>
      </div>
    </div>
  );
}
