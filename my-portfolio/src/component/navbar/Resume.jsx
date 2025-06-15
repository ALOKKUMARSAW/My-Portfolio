import React from "react";
import "./navbar.css";

const Resume = () => (
  <section id="resume" className="resume-section">
    <div className="resume-content">
      <h2 className="section-title">Resume</h2>
      
      {/* Education Section */}
      <div className="resume-block">
        <h3 className="section-subtitle">Education</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h4>Bachelor of Technology in Computer Science</h4>
              <p className="institution">Ramgarh Engineering College</p>
              <p className="duration">2021 - 2025</p>
              <p className="description">
              Final-year Computer Science and Engineering student with practical experience in Java, Spring Boot, and full-stack
development. Skilled in building RESTful APIs and secure web applications. Seeking to apply and enhance my
skills as a backend or full-stack developer in a growth-oriented environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="resume-block">
        <h3 className="section-subtitle">Work Experience</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h4>Java Developer Intern</h4>
              <p className="institution">HulkHire Tech</p>
              <p className="duration">April2025 - May2025</p>
              <ul className="achievements">
                <li>Finalized integration plan after exploring PayPal Standard Checkout documentation and collaborating with the team.</li>
                <li>Developed paypal-provider-service integrating with PayPal REST APIs: Create Order, Capture Order, Show Order.</li>
                <li>Secured API communication using OAuth 2.0 (Client Credentials grant).</li>
                <li>Implemented Redis cache to optimize access token management for outbound API calls.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="resume-block">
        <h3 className="section-subtitle">Key Projects</h3>
        <div className="projects-grid">
          <div className="project-card">
            <h4>Movie Watchlist Application</h4>
            <p className="tech-stack">Java • Spring Boot • OMDB API • Thymeleaf • MySQL</p>
            <p className="description">
            A full-stack web application built with Java, Spring Boot, and Thymeleaf that integrates the OMDB API to manage and display movie data. It features RESTful APIs, fast in-memory 
            storage using H2 Database, and a responsive UI to enhance user interaction and performance.
            </p>
          </div>
          <div className="project-card">
            <h4>EduTrack-pro</h4>
            <p className="tech-stack">Java • Spring Boot • Hibernate • React • MySQL</p>
            <p className="description">
            A full-stack course management application developed using Java, Spring Boot, React.js, and MySQL. Implemented RESTful APIs with 
            MVC architecture, efficient data handling, and robust exception management to enhance performance and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="resume-download">
        <a href="/AlokKumarSaw_Resume.pdf" className="download-btn" download>
          <i className="fas fa-download"></i> Download Resume
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
