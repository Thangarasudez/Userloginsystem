import React, { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import "../Navbar.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <Link to="/login" className="login">
            <li>Login</li>
          </Link>
          <Link to="/signup" className="signUp">
            <li>Sign Up</li>
          </Link>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Header;
