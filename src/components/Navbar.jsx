import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbar-brand">TMDB</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="nav-link">Login</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <div className="nav-link">Sign in</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
