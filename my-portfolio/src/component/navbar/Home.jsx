import React from "react";
import "./navbar.css";

const Home = () => {
  const handleContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="animated-text">
            Hi, I'm <span>Alok Kumar Saw</span>
          </h1>
          <h2 className="subtitle">Full Stack Developer</h2>
          <p className="fade-in description">
            Passionate about creating efficient and scalable web applications using Java, Spring Boot, and React. 
            Dedicated to delivering exceptional user experiences through clean code and innovative solutions.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={handleContact}>
              Contact Me
            </button>
            <a href="#projects" className="secondary-btn">
              View Projects
            </a>
          </div>
          <div className="social-links">
            <h3 className="section-subtitle">Connect With Me</h3>
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
                href="https://www.linkedin.com/in/alok-kumar-saw/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="mailto:aloksaw512@gmail.com"
                className="social-link email"
              >
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <img src="/AlokKrSaw.jpg" alt="Alok Kumar Saw" className="profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
