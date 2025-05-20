import { Link, useNavigate } from "react-router-dom"; 
import { Form, Button, Container, Card } from "react-bootstrap";

export default function Signup() {
  const navigate = useNavigate(); 

  const handleSignUp = () => {

    navigate("/Kambaz/Account/Profile"); 
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "400px" }}>
        <Card.Body className="p-4">
          <div className="text-center mb-4">
            <h4>Northeastern University</h4>
          </div>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group className="mb-3" controlId="wd-username-signup">
              <Form.Control type="text" placeholder="Username" className="wd-username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-password-signup">
              <Form.Control type="password" placeholder="Password" className="wd-password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-verify-password-signup">
              <Form.Control type="password" placeholder="Verify Password" className="wd-password-verify" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-firstname-signup">
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-lastname-signup">
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-email-signup">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>


            <Button variant="danger" className="w-100 mb-3" onClick={handleSignUp}>
              Sign Up
            </Button>
            <div className="text-center">
              <Link to="/Kambaz/Account/Signin">
                Sign In
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}