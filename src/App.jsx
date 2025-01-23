import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import WaitinglistPage from "./pages/WaitinglistPage";
import { WaitlistProvider } from "./context/WaitListContext";
import LyftLogo from "./assets/lyftlogo.jpg";
import "./styles/header.css";

function App() {
  return (
    <WaitlistProvider>
      <Router>
        <header className="navbar navbar-expand-lg navbar-light bg-light py-3">
          <div className="container">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img
                src={LyftLogo}
                alt="Lyft Logo"
                className="rounded me-2"
                style={{ height: "50px", width: "auto" }}
              />
              <span className="fw-bold">Lyft Waitlist</span>
            </Link>
            <nav className="navbar-nav ms-auto fw-bold text-dark">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/waitlist" className="nav-link">
                Waitlist
              </Link>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/waitlist" element={<WaitinglistPage />} />
        </Routes>
      </Router>
    </WaitlistProvider>
  );
}

export default App;
