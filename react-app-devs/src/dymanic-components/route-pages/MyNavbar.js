import React from "react";
import { NavLink } from "react-router-dom";

export default function MyNavbar() {
    
  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="navbar">
      <span className="brand">Your Name</span>
      <div className="nav-links">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>
    </nav>
  );
}