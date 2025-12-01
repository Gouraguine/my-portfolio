import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="site-nav">
      <div className="logo">
        <i color="blue" className="fas fa-code"></i>
        <span className="logo-text">Porfolio</span>
      </div>

      <button
        className={`menu-toggle${isOpen ? " open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span className="hamburger" />
      </button>

      <div className={`nav-links${isOpen ? " open" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
