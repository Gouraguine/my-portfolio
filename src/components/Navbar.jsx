import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="site-nav">
      <h2 className="logo">Portfolio</h2>

      <button
        className={`menu-toggle${isOpen ? " open" : ""}`}
        onClick={() => setIsOpen((s) => !s)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span className="hamburger" />
      </button>

      <div className={`nav-links${isOpen ? " open" : ""}`}>
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
