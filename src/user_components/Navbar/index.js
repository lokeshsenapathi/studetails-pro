// Import React and Link from 'react-router-dom' for navigation
import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Import the CSS file for styling

// Define the NavBar component
const NavBar = () => {
  return (
    // Create a navigation bar
    <nav className="navbar">
      {/* Create a link to the "Post" route */}
      <Link to="/post" className="nav-option">
        Post
      </Link>
      {/* Create a link to the "Get" route */}
      <Link to="/get" className="nav-option">
        Get
      </Link>
    </nav>
  );
};

export default NavBar; // Export the NavBar component
