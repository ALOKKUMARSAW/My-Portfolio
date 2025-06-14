import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const handleHamburgerClick = () => {
    setNavActive(!navActive);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">AKS</h1>
      <button
        className="hamburger"
        onClick={handleHamburgerClick}
        aria-label="Toggle Navigation"
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>
      <ul className={`navbar-links ${navActive ? "active" : ""}`}>
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            onClick={() => setNavActive(false)} // Close menu on link click
            spy={true}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setNavActive(false)} // Close menu on link click
            spy={true}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setNavActive(false)} // Close menu on link click
            spy={true}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setNavActive(false)} // Close menu on link click
            spy={true}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="statistics"
            smooth={true}
            duration={500}
            onClick={() => setNavActive(false)} // Close menu on link click
            spy={true}
          >
            Statistics
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setNavActive(false)} // Close menu on link click
            spy={true}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            onClick={() => setNavActive(false)} // Close menu on link click
            spy={true}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
