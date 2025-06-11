import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import { setCurrentUser } from "./reducer";
import type { RootState } from "../store";
import { Button, FormControl, Form, Container, Row, Col, Alert } from "react-bootstrap";
import { type User } from "../Database";

export default function Profile() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [profile, setProfile] = useState<Partial<User>>(currentUser || {});
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProfile = () => {
    if (!currentUser) {
      navigate("/Kambaz/Account/Signin");
      return;
    }
    setProfile(currentUser);
  };

  useEffect(() => {
    fetchProfile();
  }, [currentUser]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setMessage(null);
    try {
      const updatedUser = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedUser));
      setMessage("Profile saved successfully!");
    } catch (err) {
      setMessage("Failed to save profile.");
    }
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };

  if (!currentUser) {
    return <p>Loading profile...</p>;
  }

  return (
    <Container className="wd-profile-screen mt-4">
      <h3>Profile</h3>
      {message && <Alert variant={message.includes("successfully") ? "success" : "danger"}>{message}</Alert>}
      {profile && (
        <Form>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="wd-username">
              <Form.Label>Username</Form.Label>
              <FormControl name="username" value={profile.username || ""} onChange={handleInputChange} />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="wd-password">
              <Form.Label>Password (leave blank if no change)</Form.Label>
              <FormControl name="password" type="password" onChange={handleInputChange} placeholder="New Password" />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} md="6" controlId="wd-firstname">
              <Form.Label>First Name</Form.Label>
              <FormControl name="firstName" value={profile.firstName || ""} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="wd-lastname">
              <Form.Label>Last Name</Form.Label>
              <FormControl name="lastName" value={profile.lastName || ""} onChange={handleInputChange} />
            </Form.Group>
          </Row>
          <Row className="mb-2">
             <Form.Group as={Col} md="6" controlId="wd-dob">
                <Form.Label>Date of Birth</Form.Label>
                <FormControl name="dob" type="date" value={profile.dob ? profile.dob.toString().split('T')[0] : ""} onChange={handleInputChange} />
             </Form.Group>
             <Form.Group as={Col} md="6" controlId="wd-email">
                <Form.Label>Email</Form.Label>
                <FormControl name="email" type="email" value={profile.email || ""} onChange={handleInputChange} />
             </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="wd-role">
              <Form.Label>Role</Form.Label>
              <Form.Select name="role" value={profile.role || "USER"} onChange={handleInputChange}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="STUDENT">Student</option>
                <option value="FACULTY">Faculty</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Button variant="primary" onClick={handleSave} className="me-2">
            Save
          </Button>
          <Button variant="danger" onClick={signout} id="wd-signout-btn">
            Sign out
          </Button>
        </Form>
      )}
    </Container>
  );
}
