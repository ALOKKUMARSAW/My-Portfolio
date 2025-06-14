import React from "react";
import './navbar.css';

const About = () => (
  <section id="about" className="about-section">
    <div className="about-content">
      <div className="profile-container">
        <img src="/AlokKrSaw.jpg" alt="Profile" className="profile-photo"/>
      </div>
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Hi, I'm Alok Kumar Saw, a passionate and adaptable Full Stack Developer with a strong foundation in web development and a flair for creating dynamic, user-friendly applications. Final Year B.Tech in Computer Science and Engineering from Ramgarh Engineering College (2021-2025).
        </p>
        
        <h3 className="skills-title">Technical Skills</h3>
        <div className="skills-container">
          <div className="skill-box">Java</div>
          <div className="skill-box">SpringBoot</div>
          <div className="skill-box">Hibernate</div>
          <div className="skill-box">React</div>
          <div className="skill-box">Postman</div>
          <div className="skill-box">MySQL</div>
          <div className="skill-box">MongoDB</div>
          <div className="skill-box">HTML5</div>
          <div className="skill-box">CSS3</div>
          <div className="skill-box">UI</div>
        </div>

        {/* Social Links Section */}
        <div className="social-links">
          <h3>Connect With Me</h3>
          <div className="link-icons">
            <a
              href="https://github.com/ALOKKUMARSAW"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://www.instagram.com/aloksaw512/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/alok-kumar-saw/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="aloksaw512@gmail.com" className="social-link email">
              <i className="fas fa-envelope"></i> Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
