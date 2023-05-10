import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";

export default function LoginForm() {
  const userNameInput = useInput();
  const passwordInput = useInput();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="container" style={{ margin: "5%" }}>
      <h2 style={{ marginBottom: "50px" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            {...userNameInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...passwordInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
