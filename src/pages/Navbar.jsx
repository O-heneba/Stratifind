import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.2rem 2.5rem",
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <NavLink
        to="/"
        end
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "1.7rem",
          fontWeight: "700",
          letterSpacing: "-0.01em",
          textDecoration: "none",
          color: "#0f172a",
        }}
      >
        <span style={{ fontSize: "2.1rem" }}>🔍</span>
        <span>stratifind</span>
      </NavLink>
      
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {/* Job Seeker Routes */}
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            color: isActive ? "#2563eb" : "#1e293b",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: isActive ? "600" : "500",
            cursor: "pointer",
            borderBottom: isActive ? "2px solid #2563eb" : "none",
            paddingBottom: "4px",
          })}
        >
          Dashboard
        </NavLink>
        
        <NavLink
          to="/job-details"
          style={({ isActive }) => ({
            color: isActive ? "#2563eb" : "#1e293b",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: isActive ? "600" : "500",
            cursor: "pointer",
            borderBottom: isActive ? "2px solid #2563eb" : "none",
            paddingBottom: "4px",
          })}
        >
          Job Details
        </NavLink>
        
        <NavLink
          to="/application"
          style={({ isActive }) => ({
            color: isActive ? "#2563eb" : "#1e293b",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: isActive ? "600" : "500",
            cursor: "pointer",
            borderBottom: isActive ? "2px solid #2563eb" : "none",
            paddingBottom: "4px",
          })}
        >
          Applications
        </NavLink>
        
        {/* Auth Routes */}
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            color: isActive ? "#2563eb" : "#1e293b",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: isActive ? "600" : "500",
            cursor: "pointer",
            borderBottom: isActive ? "2px solid #2563eb" : "none",
            paddingBottom: "4px",
          })}
        >
          Login
        </NavLink>
        
        <NavLink
          to="/signup"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#1e40af" : "#2563eb",
            color: "white",
            padding: "0.6rem 1.4rem",
            borderRadius: "40px",
            border: "none",
            fontSize: "0.95rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(37, 99, 235, 0.2)",
            textDecoration: "none",
            display: "inline-block",
          })}
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;