import { Link, useParams, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <ListGroup id="wd-courses-navigation" className="wd-courses-navigation me-3" style={{width: 150}}>
      {links.map((link) => (
        <ListGroup.Item key={link} as={Link} to={`/Kambaz/Courses/${cid}/${link}`}
          className={pathname.includes(link) ? "active" : ""}>
          {link}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}