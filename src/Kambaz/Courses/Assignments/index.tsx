export default function Assignments() {
  return (
    <div id="wd-assignments" style={{ padding: "15px" }}>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px", gap: "5px" }}>
        <input 
          placeholder="Search for Assignments"
          id="wd-search-assignment" 
          style={{ flexGrow: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button 
          id="wd-add-assignment-group"
          style={{ padding: "8px 12px", backgroundColor: "#f0f0f0", border: "1px solid #ccc", borderRadius: "4px", cursor: "pointer" }}
        >
          + Group
        </button>
        <button 
          id="wd-add-assignment"
          style={{ padding: "8px 12px", backgroundColor: "#dc3545", color: "white", border: "1px solid #dc3545", borderRadius: "4px", cursor: "pointer" }}
        >
          + Assignment
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ccc", paddingBottom: "10px", marginBottom: "10px" }}>
        <h3 id="wd-assignments-title" style={{ margin: 0, fontSize: "1.2em" }}>
          ASSIGNMENTS <span style={{ fontWeight: "normal", color: "#666" }}>40% of Total</span>
        </h3>
        <button 
          style={{ 
            padding: "5px 8px", 
            backgroundColor: "#f0f0f0", 
            border: "1px solid #ccc", 
            borderRadius: "20px",
            cursor: "pointer",
            minWidth: "30px" 
          }}
          title="Add assignment to this group"
        >
          +
        </button>
      </div>
      

      <ul id="wd-assignment-list" style={{ listStyleType: "none", padding: 0 }}>

        <li 
          className="wd-assignment-list-item" 
          style={{ 
            padding: "10px", 
            border: "1px solid #ccc", 
            borderLeft: "4px solid green", 
            marginBottom: "8px", 
            borderRadius: "4px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <a 
            href="#/Kambaz/Courses/1234/Assignments/123" 
            className="wd-assignment-link"
            style={{ textDecoration: "none", color: "green", fontWeight: "bold" }}
          >
            A1 - ENV + HTML
            <div style={{ fontSize: '0.8em', color: '#555', fontWeight: 'normal' }}>
              Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | 
              <strong>Due</strong> May 12 at 11:59pm | 100 pts
            </div>
          </a>
          <span style={{ marginLeft: "10px", color: "#888" }}>⋮</span>
        </li>
        

        <li 
          className="wd-assignment-list-item"
          style={{ 
            padding: "10px", 
            border: "1px solid #ccc", 
            borderLeft: "4px solid green",
            marginBottom: "8px", 
            borderRadius: "4px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <a 
            href="#/Kambaz/Courses/1234/Assignments/124"
            className="wd-assignment-link"
            style={{ textDecoration: "none", color: "green", fontWeight: "bold" }}
          >
            A2 - CSS + BOOTSTRAP
            <div style={{ fontSize: '0.8em', color: '#555', fontWeight: 'normal' }}>
              Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | 
              <strong>Due</strong> May 19 at 11:59pm | 100 pts
            </div>
          </a>
          <span style={{ marginLeft: "10px", color: "#888" }}>⋮</span>
        </li>

        <li 
          className="wd-assignment-list-item"
          style={{ 
            padding: "10px", 
            border: "1px solid #ccc", 
            borderLeft: "4px solid green",
            marginBottom: "8px", 
            borderRadius: "4px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <a 
            href="#/Kambaz/Courses/1234/Assignments/125" 
            className="wd-assignment-link"
            style={{ textDecoration: "none", color: "green", fontWeight: "bold" }}
          >
            A3 - JAVASCRIPT + REACT
            <div style={{ fontSize: '0.8em', color: '#555', fontWeight: 'normal' }}>
              Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | 
              <strong>Due</strong> May 26 at 11:59pm | 100 pts
            </div>
          </a>
          <span style={{ marginLeft: "10px", color: "#888" }}>⋮</span>
        </li>
      </ul>
    </div>
  );
}