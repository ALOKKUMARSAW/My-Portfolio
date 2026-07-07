import React, { useEffect, useState } from "react";
import "@styles/navbar.css";
import "@styles/hero.css";

const Skills = () => {
  const [inView, setInView] = useState(false);

  const skillsData = {
    backend: [
      { name: "Java", level: 90, category: "Programming Language", icon: "fab fa-java" },
      { name: "Spring Boot", level: 90, category: "Framework", icon: "fas fa-leaf" },
      { name: "Spring MVC", level: 90, category: "Framework", icon: "fas fa-spring" },
      { name: "Hibernate", level: 85, category: "ORM", icon: "fas fa-database" },
      { name: "JPA", level: 85, category: "ORM", icon: "fas fa-layer-group" },
      { name: "RESTful APIs", level: 90, category: "API Development", icon: "fas fa-plug" },
      { name: "Microservices", level: 85, category: "Architecture", icon: "fas fa-cubes" },
      { name: "Node.js", level: 85, category: "Runtime", icon: "fab fa-node-js" }
    ],
    frontend: [
      { name: "React", level: 85, category: "Framework", icon: "fab fa-react" },
      { name: "JavaScript", level: 85, category: "Language", icon: "fab fa-js" },
      { name: "TypeScript", level: 85, category: "Language", icon: "fas fa-code" },
      { name: "HTML5", level: 95, category: "Markup", icon: "fab fa-html5" },
      { name: "CSS3", level: 90, category: "Styling", icon: "fab fa-css3-alt" },
      { name: "Tailwind CSS", level: 90, category: "Framework", icon: "fas fa-wind" },
      { name: "Bootstrap", level: 90, category: "Framework", icon: "fab fa-bootstrap" },
      { name: "Thymeleaf", level: 95, category: "Template Engine", icon: "fas fa-file-code" }
    ],
    database: [
      { name: "MySQL", level: 95, category: "Relational DB", icon: "fas fa-database" },
      { name: "PostgreSQL", level: 90, category: "Relational DB", icon: "fas fa-table" },
      { name: "MongoDB", level: 95, category: "NoSQL DB", icon: "fas fa-leaf" },
      { name: "Redis", level: 90, category: "Cache DB", icon: "fas fa-memory" },
      { name: "H2 Database", level: 100, category: "In-Memory DB", icon: "fas fa-bolt" }
    ],
    tools: [
      { name: "Git", level: 95, category: "Version Control", icon: "fab fa-git-alt" },
      { name: "Docker", level: 90, category: "Containerization", icon: "fab fa-docker" },
      { name: "Maven", level: 95, category: "Build Tool", icon: "fas fa-cube" },
      { name: "Gradle", level: 90, category: "Build Tool", icon: "fas fa-tools" },
      { name: "Postman", level: 95, category: "API Testing", icon: "fas fa-paper-plane" },
      { name: "Jenkins", level: 85, category: "CI/CD", icon: "fas fa-infinity" },
      { name: "AWS", level: 85, category: "Cloud Platform", icon: "fab fa-aws" },
      { name: "Linux", level: 85, category: "Operating System", icon: "fab fa-linux" }
    ],
    concepts: [
      { name: "OOP Principles", level: 90, category: "Programming", icon: "fas fa-shapes" },
      { name: "Design Patterns", level: 85, category: "Architecture", icon: "fas fa-puzzle-piece" },
      { name: "Agile/Scrum", level: 85, category: "Methodology", icon: "fas fa-users" },
      { name: "Test-Driven Development", level: 85, category: "Methodology", icon: "fas fa-vial" },
      { name: "Code Review", level: 90, category: "Process", icon: "fas fa-search" },
      { name: "Performance Optimization", level: 90, category: "Engineering", icon: "fas fa-tachometer-alt" }
    ],
    ai: [
      { name: "API Integration", level: 95, category: "Development", icon: "fas fa-plug" },
      { name: "AI Integration", level: 90, category: "Artificial Intelligence", icon: "fas fa-brain" },
      { name: "Gen AI", level: 90, category: "Generative AI", icon: "fas fa-robot" },
      { name: "OpenAI APIs", level: 95, category: "AI Services", icon: "fas fa-cloud" },
      { name: "Prompt Engineering", level: 95, category: "AI Development", icon: "fas fa-comment-dots" },
      { name: "Machine Learning", level: 90, category: "AI/ML", icon: "fas fa-chart-line" },
      { name: "NLP Integration", level: 85, category: "AI Processing", icon: "fas fa-language" },
      { name: "ChatGPT Integration", level: 95, category: "AI Services", icon: "fas fa-comments" }
    ]
  };

  const handleScroll = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      const sectionTop = skillsSection.getBoundingClientRect().top;
      const sectionBottom = skillsSection.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && sectionBottom > 0) {
        setInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div className="skill-item" key={`${skill.name}-${index}`}>
      <div className="skill-header">
        <div className="skill-info">
          <i className={skill.icon}></i>
          <div>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-category">{skill.category}</span>
          </div>
        </div>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{
            width: inView ? `${skill.level}%` : "0%",
            transition: `width 1s ease-out ${index * 0.1}s`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Comprehensive expertise across modern development, AI, and emerging technologies</p>
        </div>

        <div className="skills-container">
          {/* Backend Development */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-server"></i>
              </div>
              <div>
                <h3>Backend Development</h3>
                <p>Server-side technologies and APIs</p>
              </div>
            </div>
            <div className="skills-list">
              {skillsData.backend.map((skill, index) => (
                <SkillBar skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Frontend Development */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div>
                <h3>Frontend Development</h3>
                <p>User interfaces and client-side logic</p>
              </div>
            </div>
            <div className="skills-list">
              {skillsData.frontend.map((skill, index) => (
                <SkillBar skill={skill} index={index + skillsData.backend.length} />
              ))}
            </div>
          </div>

          {/* Database & Storage */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-database"></i>
              </div>
              <div>
                <h3>Database & Storage</h3>
                <p>Data persistence and management</p>
              </div>
            </div>
            <div className="skills-list">
              {skillsData.database.map((skill, index) => (
                <SkillBar skill={skill} index={index + skillsData.backend.length + skillsData.frontend.length} />
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-tools"></i>
              </div>
              <div>
                <h3>Development Tools</h3>
                <p>Productivity and deployment tools</p>
              </div>
            </div>
            <div className="skills-list">
              {skillsData.tools.map((skill, index) => (
                <SkillBar skill={skill} index={index + skillsData.backend.length + skillsData.frontend.length + skillsData.database.length} />
              ))}
            </div>
          </div>

          {/* Programming Concepts */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-brain"></i>
              </div>
              <div>
                <h3>Programming Concepts</h3>
                <p>Best practices and methodologies</p>
              </div>
            </div>
            <div className="skills-list">
              {skillsData.concepts.map((skill, index) => (
                <SkillBar skill={skill} index={index + skillsData.backend.length + skillsData.frontend.length + skillsData.database.length + skillsData.tools.length} />
              ))}
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <h3>AI & Machine Learning</h3>
                <p>Cutting-edge AI integration and automation</p>
              </div>
            </div>
            <div className="skills-list">
              {skillsData.ai.map((skill, index) => (
                <SkillBar skill={skill} index={index + skillsData.backend.length + skillsData.frontend.length + skillsData.database.length + skillsData.tools.length + skillsData.concepts.length} />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">35+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Code Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
