import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";

export default function SignInForm() {
  const userNameInput = useInput();
  const passwordInput = useInput();
  const emailInput = useInput();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");

    axios
      .post("http://localhost:3001/users", {
        username: e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value,
      })
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="container" style={{ margin: "5%" }}>
      <h2 style={{ marginBottom: "50px" }}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={userNameInput.value}
            onChange={userNameInput.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={passwordInput.value}
            onChange={passwordInput.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={emailInput.value}
            onChange={emailInput.onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
