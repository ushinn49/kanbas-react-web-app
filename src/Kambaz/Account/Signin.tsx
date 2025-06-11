import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { FormControl, Button, Form, Alert } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const signin = async () => {
    setError(null);
    try {
      const user = await client.signin(credentials);
      if (user) {
        dispatch(setCurrentUser(user));
        navigate("/Kambaz/Dashboard");
      }
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("An unknown error occurred during sign-in.");
      }
    }
  };

  return (
    <div id="wd-signin-screen" className="container mt-5" style={{ maxWidth: "400px" }}>
      <h1>Sign in</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <FormControl
          name="username"
          placeholder="username"
          className="form-control mb-2"
          id="wd-username"
          value={credentials.username}
          onChange={handleInputChange}
        />
        <FormControl
          name="password"
          placeholder="password"
          type="password"
          className="form-control mb-2"
          id="wd-password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <Button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100">
          Sign in
        </Button>
        <div className="text-center mt-2">
            <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
                Sign up
            </Link>
        </div>
      </Form>
    </div>
  );
}