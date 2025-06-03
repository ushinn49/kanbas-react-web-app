import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <input
        placeholder="username"
        className="form-control mb-2"
        id="wd-username"
      />
      <input
        placeholder="password"
        type="password"
        className="form-control mb-2"
        id="wd-password"
      />
      <input
        placeholder="verify password"
        type="password"
        className="form-control mb-2"
        id="wd-password-verify"
      />
      <button id="wd-signup-btn" className="btn btn-primary w-100 mb-2">
        Sign up
      </button>
      <Link id="wd-signin-link" to="/Kambaz/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}