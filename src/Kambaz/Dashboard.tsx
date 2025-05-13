import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <Link 
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link" 
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>


        <div className="wd-dashboard-course"> 
          <Link 
            to="/Kambaz/Courses/5678/Home" 
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} /> 
            <div>
              <h5> CS5678 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Web Technologies
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>


        <div className="wd-dashboard-course">
          <Link 
            to="/Kambaz/Courses/9012/Home" 
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} /> 
            <div>
              <h5> CS9012 Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        

        <div className="wd-dashboard-course">
          <Link 
            to="/Kambaz/Courses/2001/Home" 
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} /> 
            <div>
              <h5> CS2001 Intro to Programming </h5>
              <p className="wd-dashboard-course-title">
                Basic programming concepts
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link 
            to="/Kambaz/Courses/2002/Home" 
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} /> 
            <div>
              <h5> CS2002 Data Structures </h5>
              <p className="wd-dashboard-course-title">
                Essential data organization
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link 
            to="/Kambaz/Courses/2003/Home" 
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} /> 
            <div>
              <h5> CS2003 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Problem solving techniques
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link 
            to="/Kambaz/Courses/3001/Home" 
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} /> 
            <div>
              <h5> CS3001 Software Engineering </h5>
              <p className="wd-dashboard-course-title">
                Building robust software
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link 
            to="/Kambaz/Courses/3002/Home" 
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} /> 
            <div>
              <h5> CS3002 Operating Systems </h5>
              <p className="wd-dashboard-course-title">
                Core concepts of OS
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
              </div>
    </div>
  );
}