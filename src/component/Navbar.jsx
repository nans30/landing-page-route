import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav-logo">
        <NavLink to="/">DIGITAL PROJECT</NavLink>
      </div>

      {/* Menu Icon */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-link ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          MAIN
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          GALLERY
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/certifications"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          MEMBER
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          CONTACTS
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
