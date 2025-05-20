import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

const coursesData = [
  { _id: "1234", name: "CS1234 React JS", description: "Full Stack software developer", image: "/images/reactjs.jpg" },
  { _id: "5678", name: "CS5678 Web Development", description: "Introduction to Web Technologies", image: "/images/reactjs.jpg" },
  { _id: "9012", name: "CS9012 Machine Learning", description: "Fundamentals of Machine Learning", image: "/images/reactjs.jpg" },
  { _id: "2001", name: "CS2001 Intro to Programming", description: "Basic programming concepts", image: "/images/reactjs.jpg" },
  { _id: "2002", name: "CS2002 Data Structures", description: "Essential data organization", image: "/images/reactjs.jpg" },
  { _id: "2003", name: "CS2003 Algorithms", description: "Problem solving techniques", image: "/images/reactjs.jpg" },
  { _id: "3001", name: "CS3001 Software Engineering", description: "Building robust software", image: "/images/reactjs.jpg" },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({coursesData.length})</h2> <hr />
      
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4" id="wd-dashboard-courses">
        {coursesData.map((course) => (
          <Col key={course._id} style={{ width: "270px" }}>
            <Card className="h-100">
              <Link
                to={`/Kambaz/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark d-block h-100"
              >
                <Card.Img 
                  variant="top" 
                  src={course.image || "/images/default-course.png"}
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title 
                    className="wd-dashboard-course-title text-nowrap overflow-hidden"
                    style={{ textOverflow: 'ellipsis' }}
                  >
                    {course.name}
                  </Card.Title>
                  <Card.Text 
                    className="wd-dashboard-course-description overflow-hidden flex-grow-1"
                    style={{ height: "70px" }}
                  >
                    {course.description}
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}