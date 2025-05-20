// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <NavLink to="/">DIGITAL PROJECT</NavLink>
      </div>
      <div className="nav-link">
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
