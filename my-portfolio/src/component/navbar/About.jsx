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
          Hello! I'm Alok Kumar Saw, a passionate Full Stack Developer with a strong foundation in Java, Spring Boot, and React. I thrive on creating efficient and scalable web applications that deliver exceptional user experiences. With a keen eye for detail and a commitment to continuous learning, I am always eager to take on new challenges and expand my skill set.
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
