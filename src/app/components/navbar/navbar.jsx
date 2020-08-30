import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>AllAboutVR</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
