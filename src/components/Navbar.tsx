import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-section">
        <span className="navbar-icon">⚡</span>
        <h1 className="navbar-logo">BlitzSMS</h1>
      </div>

      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>
        </li>
        <li>
          <a href="#resources" onClick={closeMenu}>
            Resources
          </a>
        </li>
      </ul>

      <div className={`navbar-buttons ${isMenuOpen ? "active" : ""}`}>
        <button className="nav-btn nav-signin" onClick={closeMenu}>
          Sign in
        </button>
        <button className="nav-btn nav-login" onClick={closeMenu}>
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
