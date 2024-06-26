export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" alt="React JS Course Thumbnail" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" alt="Web Development Course Thumbnail" width={200} />
          <div>
           <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5678/Home">
              CS5678 Web Development
           </a>
           <p className="wd-dashboard-course-title">
              Building interactive websites
           </p>
           <a href="#/Kanbas/Courses/5678/Home"> Go </a>
          </div>
      </div>
      <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" alt="Data Structures Course Thumbnail" width={200} />
          <div>
           <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5678/Home">
              CS4321 Data Structures
           </a>
           <p className="wd-dashboard-course-title">
           Understanding complex data organization
           </p>
           <a href="#/Kanbas/Courses/4321/Home"> Go </a>
          </div>
      </div>
      </div>
    </div>
  );
}
