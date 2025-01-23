import React from "react";
import { Link } from "react-router-dom";
import LyftLogo from "../assets/lyftlogo.jpg";
import "./header.css"; // Add any custom styles if necessary

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={LyftLogo} alt="Lyft Logo" className="header-logo me-2" />
          <span className="fw-bold">Lyft Waitlist</span>
        </Link>
        <nav className="navbar-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/waitlist" className="nav-link">
            Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
