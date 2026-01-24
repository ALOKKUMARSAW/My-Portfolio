import React from "react";
import "@styles/navbar.css";
import "@styles/hero.css";

const About = () => (
  <section id="about" className="about-section">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about my journey and expertise</p>
      </div>
      
      <div className="about-content">
        <div className="about-grid">
          <div className="about-text">
            <div className="about-card">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate Full Stack Developer with a strong foundation in Java, Spring Boot, and React. 
                My journey in software development is driven by creating efficient, scalable, and user-friendly applications 
                that solve real-world problems.
              </p>
              <p>
                With a focus on clean code and best practices, I deliver high-quality solutions that exceed client expectations. 
                My experience spans both frontend and backend development, allowing me to create seamless, end-to-end solutions.
              </p>
            </div>
            
            <div className="about-card">
              <h3>What I Do</h3>
              <div className="services-grid">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <h4>Full Stack Development</h4>
                  <p>Building complete web applications from frontend to backend</p>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h4>Responsive Design</h4>
                  <p>Creating beautiful interfaces that work on all devices</p>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <h4>Database Design</h4>
                  <p>Designing efficient and scalable database solutions</p>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h4>Performance Optimization</h4>
                  <p>Optimizing applications for speed and scalability</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-skills">
            <div className="skills-card">
              <h3>Technical Skills</h3>
              
              <div className="skill-category">
                <h4>Backend Development</h4>
                <div className="skills-list">
                  <div className="skill-item">
                    <span>Java</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>Spring Boot</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>Hibernate</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>MySQL</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-category">
                <h4>Frontend Development</h4>
                <div className="skills-list">
                  <div className="skill-item">
                    <span>React</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>HTML5/CSS3</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>JavaScript</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-category">
                <h4>Tools & Technologies</h4>
                <div className="tech-tags">
                  <span className="tech-tag">Git</span>
                  <span className="tech-tag">Postman</span>
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Agile</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Vite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
