import React, { useState, useEffect } from "react";
import "./navbar.css";

const Home = () => {
  const roles = ["Full Stack Developer", "Java Developer", "Backend Developer", "Java Full Stack Developer", "Freelancer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
    const interval = setInterval(() => {
      setIsFading(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsFading(true);
      }, 500); // Duration of fadeOut animation
    }, 3000); // Total duration for each role
    return () => clearInterval(interval);
  }, [roles.length]);

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
          <h2 className={`subtitle ${isFading ? 'fade-in' : ''}`}>
            {roles[currentRoleIndex]}
          </h2>
          <p className="slogan-description">
          Passionate about creating efficient and scalable web applications using Java, Spring Boot, and React. 
          Dedicated to delivering exceptional user experiences through clean code and innovative solutions.
          </p>
          <div className="cta-buttons">
            <a href="/AlokKumarSaw_Resume.pdf" className="primary-btn" download>
              Download CV
            </a>
            <button className="secondary-btn" onClick={handleContact}>
              Hire Me
            </button>
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
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/alok-kumar-saw/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:aloksaw512@gmail.com"
                className="social-link email"
              >
                <i className="fas fa-envelope"></i>
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
