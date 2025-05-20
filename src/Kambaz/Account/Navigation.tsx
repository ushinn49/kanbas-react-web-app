import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

export default function AccountNavigation() {
  const location = useLocation();
  const links = [
    { name: "Signin", path: "/Kambaz/Account/Signin" },
    { name: "Signup", path: "/Kambaz/Account/Signup" },
    { name: "Profile", path: "/Kambaz/Account/Profile" },
  ];

  return (
    <ListGroup id="wd-account-navigation" className="wd-kanbas-navigation list-group fs-5 rounded-0" style={{minWidth: "200px"}}>
      {links.map((link) => (
        <ListGroup.Item
          key={link.path}
          as={Link}
          to={link.path}
          active={location.pathname.includes(link.path)}
          className={`list-group-item ${location.pathname.includes(link.path) ? "active" : "text-danger border-0"}`}
        >
          {link.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}