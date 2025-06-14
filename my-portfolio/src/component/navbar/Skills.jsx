import React, { useEffect, useState } from "react";
import "./navbar.css";

const skillsData = [
  { skill: "Java", level: "Expert", percentage: 90 },
  { skill: "SpringBoot", level: "Advanced", percentage: 85 },
  { skill: "Hibernate", level: "Intermediate", percentage: 70 },
  { skill: "React", level: "Intermediate", percentage: 70 },
  { skill: "Postman", level: "Expert", percentage: 70 },
  { skill: "HTML5", level: "Expert", percentage: 95 },
  { skill: "CSS3", level: "Expert", percentage: 80 },
  { skill: "MySql", level: "Advanced", percentage: 85 },
  { skill: "MongoDB", level: "Intermediate", percentage: 75 },
  { skill: "Git", level: "Advanced", percentage: 85 },
  { skill: "Docker", level: "Advanced", percentage: 80 },
  { skill: "RESTful APIs", level: "Intermediate", percentage: 75 },
];

const Skills = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const skillsSection = document.getElementById("skills");
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const sectionBottom = skillsSection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Check if the section is in view
    if (sectionTop < windowHeight && sectionBottom > 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="skills"
      className={`skills-section ${inView ? "in-view" : ""}`}
    >
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-name">{item.skill}</h3>
            <p className="skill-level">{item.level}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: inView ? `${item.percentage}%` : "0%",
                  transition: "width 1.5s ease-out",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
