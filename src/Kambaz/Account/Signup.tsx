import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { FormControl, Button, Form, Alert } from "react-bootstrap";

export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "", verifyPassword: "" });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    setError(null);
    if (user.password !== user.verifyPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    // 确认输入不为空
    if (!user.username || !user.password) {
      setError("Username and password are required.");
      return;
    }
    
    try {
      console.log("Attempting to sign up with:", { username: user.username });
      
      // 添加默认值，确保注册数据完整
      const userData = {
        username: user.username,
        password: user.password,
        firstName: "",
        lastName: "",
        email: `${user.username}@example.com`, // 提供默认邮箱
        role: "STUDENT" // 默认角色
      };
      
      // 发送到服务器
      const newUser = await client.signup(userData);
      console.log("Signup successful:", newUser);
      
      if (newUser) {
        dispatch(setCurrentUser(newUser));
        navigate("/Kambaz/Account/Profile");
      }
    } catch (err: any) {
      console.error("Signup error:", err);
      
      // 显示详细错误信息
      if (err.response && err.response.data) {
        setError(`Server error: ${err.response.data.message || "Unknown server error"}`);
      } else if (err.message) {
        setError(`Error: ${err.message}`);
      } else {
        setError("An unknown error occurred during signup. Please try again.");
      }
    }
  };

  return (
    <div id="wd-signup-screen" className="container mt-5" style={{ maxWidth: "400px" }}>
      <h1>Sign up</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <FormControl
          name="username"
          placeholder="username"
          className="form-control mb-2"
          id="wd-username"
          value={user.username}
          onChange={handleInputChange}
        />
        <FormControl
          name="password"
          placeholder="password"
          type="password"
          className="form-control mb-2"
          id="wd-password"
          value={user.password}
          onChange={handleInputChange}
        />
        <FormControl
          name="verifyPassword"
          placeholder="verify password"
          type="password"
          className="form-control mb-2"
          id="wd-password-verify"
          value={user.verifyPassword}
          onChange={handleInputChange}
        />
        <Button onClick={signup} id="wd-signup-btn" className="btn btn-primary w-100 mb-2">
          Sign up
        </Button>
        <div className="text-center">
          <Link id="wd-signin-link" to="/Kambaz/Account/Signin">
            Sign in
          </Link>
        </div>
      </Form>
    </div>
  );
}
