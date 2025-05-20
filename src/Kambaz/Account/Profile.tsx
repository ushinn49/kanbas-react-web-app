import { useNavigate } from "react-router-dom"; 
import { Form, Button, Container, Col, Row } from "react-bootstrap";

export default function Profile() {
  const navigate = useNavigate(); 

  const handleSignOut = () => {

    navigate("/Kambaz/Account/Signin"); 
  };

  return (
    <Container id="wd-profile-screen" style={{ maxWidth: "600px" }} className="mt-5">
      <h1 className="text-center mb-4">Profile</h1>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="wd-username-profile">
          <Form.Label column sm={3}>Username</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" defaultValue="alice" className="wd-username"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-password-profile">
          <Form.Label column sm={3}>Password</Form.Label>
          <Col sm={9}>
            <Form.Control type="password" defaultValue="123" className="wd-password"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-firstname">
          <Form.Label column sm={3}>First Name</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" defaultValue="Alice" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-lastname">
          <Form.Label column sm={3}>Last Name</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" defaultValue="Wonderland" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-dob">
          <Form.Label column sm={3}>Date of Birth</Form.Label>
          <Col sm={9}>
            <Form.Control type="date" defaultValue="2000-01-01" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-email-profile">
          <Form.Label column sm={3}>Email</Form.Label>
          <Col sm={9}>
            <Form.Control type="email" defaultValue="alice@wonderland.com" id="wd-email"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-role">
          <Form.Label column sm={3}>Role</Form.Label>
          <Col sm={9}>
            <Form.Select defaultValue="FACULTY">
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </Form.Select>
          </Col>
        </Form.Group>
        
        <div className="d-grid gap-2 mt-4">
            <Button variant="primary">Update</Button>
            <Button variant="danger" onClick={handleSignOut}>
             Sign Out
            </Button>
        </div>
      </Form>
    </Container>
  );
}