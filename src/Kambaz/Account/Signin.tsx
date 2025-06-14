import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignin = async () => {
    try {
      setError(null);
      const currentUser = await client.signin({ username, password });
      dispatch(setCurrentUser(currentUser));
      navigate("/Kambaz/Dashboard");
    } catch (e: any) {
      const msg = e?.response?.data?.message || "登录失败，请稍后再试";
      setError(msg);
    }
  };

  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        placeholder="Username"
        className="wd-username"
      />
      <br />
      <input
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        className="wd-password"
      />
      <br />
      <button id="wd-signin-btn" onClick={handleSignin} className="btn btn-primary">
        Sign in
      </button>
      {error && <div className="text-danger mt-2">{error}</div>}
      <br />
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        No account? Sign up
      </Link>
    </div>
  );
}
