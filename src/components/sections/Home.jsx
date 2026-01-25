import React, { useState, useEffect } from "react";
import "@styles/navbar.css";
import "@styles/hero.css";

const PROFILE_IMAGE = "/AlokSaw.png"; 
const RESUME_LINK = "https://drive.google.com/uc?export=download&id=1SnVGW5qfsaTPkWyqRbAm3is5SfErBbt1"; 

const Home = () => {
  const roles = ["Java Developer", "Backend Developer", "Full Stack Developer", "Integration Engineer", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
    const interval = setInterval(() => {
      setIsFading(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsFading(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              Alok Kumar <span>Saw</span>
            </h1>
            <div className="hero-role">
              <span className="role-prefix">I'm a </span>
              <span className={`role-text ${isFading ? 'fade-in' : ''}`}>
                {roles[currentRoleIndex]}
              </span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              Passionate backend-focused full-stack developer with hands-on experience in Java, Spring Boot, React, and secure API development. I build scalable, production-ready applications with strong authentication, seamless integrations, and Generative AI capabilities to deliver smart, efficient, and user-centric solutions.
            </p>
            <div className="hero-actions">
              <a 
                href={RESUME_LINK} 
                className="btn btn-primary"
                download="AlokKumarSaw_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download"></i>
                Download CV
              </a>
              <button className="btn btn-secondary" onClick={handleContact}>
                <i className="fas fa-envelope"></i>
                Get In Touch
              </button>
            </div>
            <div className="hero-social">
              <span>Connect with me:</span>
              <div className="social-links">
                <a
                  href="https://github.com/ALOKKUMARSAW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/alok-kumar-saw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="mailto:aloksaw512@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src={PROFILE_IMAGE} alt="Alok Kumar Saw" className="profile-photo" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
