import React from "react";
import './navbar.css';

const About = () => (
  <section id="about" className="about-section">
    <div className="about-content">
      <div className="about-text">
        <h2 className="section-title">About Me</h2>
        <div className="about-description">
          <p>
            I am a dedicated Full Stack Developer with a strong foundation in Java, Spring Boot, and React. 
            My journey in software development is driven by a passion for creating efficient, scalable, and 
            user-friendly applications that solve real-world problems.
          </p>
          <p>
            With a focus on clean code and best practices, I strive to deliver high-quality solutions that 
            not only meet but exceed client expectations. My experience spans across both frontend and 
            backend development, allowing me to create seamless, end-to-end solutions.
          </p>
        </div>
        
        <div className="skills-section">
          <h3 className="section-subtitle">Technical Expertise</h3>
          <div className="skills-container">
            <div className="skill-category">
              <h4>Backend Development</h4>
              <div className="skill-box">Java</div>
              <div className="skill-box">Spring Boot</div>
              <div className="skill-box">Hibernate</div>
              <div className="skill-box">MySQL</div>
              <div className="skill-box">MongoDB</div>
            </div>
            <div className="skill-category">
              <h4>Frontend Development</h4>
              <div className="skill-box">React</div>
              <div className="skill-box">HTML5</div>
              <div className="skill-box">CSS3</div>
              <div className="skill-box">JavaScript</div>
            </div>
            <div className="skill-category">
              <h4>Tools & Others</h4>
              <div className="skill-box">Git</div>
              <div className="skill-box">Postman</div>
              <div className="skill-box">REST APIs</div>
              <div className="skill-box">Agile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
