import React from 'react';
import './navbar.css';

const Projects = () => {
  const projects = [
    {
      title: "Movie Watchlist Application",
      description: "Built with Java, Spring Boot, Thymeleaf, and H2 Database, this full-stack app lets users search, add, and view movies using the OMDB API. It features a responsive UI, fast in-memory storage, and efficient REST API integration for a smooth user experience.",
      technologies: ["Java", "Spring Boot", "Thymeleaf", "H2 Database", "REST API"],
      image: "/Movie.png",
      github: "https://github.com/ALOKKUMARSAW/MovieWatchList-App",
      live: ""
    },
    {
      title: "EduTrack-Pro",
      description: "EduTrack-Pro is built with Java, Spring Boot, and MySQL. It allows students to explore and enroll in courses, track their progress, and learn at their own pace. The platform also includes an admin panel to manage courses and users, ensuring a smooth and scalable learning experience.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
      image: "/EduTrack.png",
      github: "https://github.com/ALOKKUMARSAW/EduTech-Pro",
      live: "https://coursemanagementsystem5.netlify.app/"
    },
    {
      title: "Doctor Appointment System",
      description: "Built using Java, Spring Boot, and MySQL, this system allows users to view available slots, book appointments, and manage them efficiently. It features a responsive Thymeleaf interface and optimized REST APIs for a seamless experience across all user roles.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "REST API"],
      image: "/Doctor.png",
      github: "https://github.com/ALOKKUMARSAW/DoctorAppoinmentSystem",
      live: "https://docterappointment.netlify.app/"
    },
    {
      title: "Employee Management System",
      description: "This Employee Management System is a full-stack application built with Java, Spring Boot, and MySQL. It allows users to manage employee records, including adding, updating, and deleting employee information. The system features a responsive UI built with Thymeleaf and provides RESTful APIs for efficient data handling.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "REST API"],
      image: "/Employee.png",
      github: "https://github.com/ALOKKUMARSAW/Employee-Management-Sysrem",
      live: ""
    },
    {
      title: "Registration Login Authenticity",
      description: "This project is a full-stack application built with Java, Spring Boot, and MySQL. It allows users to register, log in, and manage their accounts securely. The system features a responsive UI built with Thymeleaf and provides RESTful APIs for efficient data handling.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Security"],
      image: "/Registration.png",
      github: "https://github.com/ALOKKUMARSAW/registration-login-authenticity",
      live: ""
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-main-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links-below">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                  <i className="fab fa-github"></i> GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <a href="https://github.com/ALOKKUMARSAW" target="_blank" rel="noopener noreferrer" className="cta-button">
          View More Projects
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Projects;
