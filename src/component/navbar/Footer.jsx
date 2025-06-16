import React from "react";
import "./navbar.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; {currentYear} Alok Kumar Saw. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/ALOKKUMARSAW"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alok-kumar-saw/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:aloksaw512@gmail.com"
            className="footer-link"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 