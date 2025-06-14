import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Movie Watchlist Application",
      description:
        "Built with Java, Spring Boot, Thymeleaf, and H2 Database, this full-stack app lets users search, add, and view movies using the OMDB API. It features a responsive UI, fast in-memory storage, and efficient REST API integration for a smooth user experience.",
      shortDescription: "A user-friendly web app to search and manage favorite movies.",
      //liveDemo: "",
      repo: "https://github.com/ALOKKUMARSAW/MovieWatchList-App",
      image: "/Movie.png", // Image path relative to the public folder
    },
    {
      title: "EduTrack-Pro",
      description:
        "EduTrack-Pro is built with Java, Spring Boot, and MySQL. It allows students to explore and enroll in courses, track their progress, and learn at their own pace. The platform also includes an admin panel to manage courses and users, ensuring a smooth and scalable learning experience.",
      shortDescription: "An e-learning platform for students to enroll in courses and track their progress.",
      liveDemo: "https://edutractpro.netlify.app/",
      repo: "https://github.com/ALOKKUMARSAW/EduTech-Pro",
      image: "/EduTrack.png", // Image path relative to the public folder
    },
    {
      title: "Doctor Appointment System",
      description:
        "Built using Java, Spring Boot, and MySQL, this system allows users to view available slots, book appointments, and manage them efficiently. It features a responsive Thymeleaf interface and optimized REST APIs for a seamless experience across all user roles.",
      shortDescription:
        "A web app to book and manage doctor appointments with dedicated portals for doctors, patients, and admins.",
      liveDemo: "https://docterappointment.netlify.app/",
      repo: "https://github.com/ALOKKUMARSAW/DoctorAppoinmentSystem",
      image: "/Doctor.png", // Image path relative to the public folder
    },
    {
      title: "Employee Management System",
      description:
        "This Employee Management System is a full-stack application built with Java, Spring Boot, and MySQL. It allows users to manage employee records, including adding, updating, and deleting employee information. The system features a responsive UI built with Thymeleaf and provides RESTful APIs for efficient data handling.",
      shortDescription:
        "",
      //liveDemo: "https://docterappointment.netlify.app/",
      repo: "https://github.com/ALOKKUMARSAW/Employee-Management-Sysrem",
      image: "/Employee.png", // Image path relative to the public folder
    },
    {
      title: "Registration Login Authenticity",
      description:
        "This project is a full-stack application built with Java, Spring Boot, and MySQL. It allows users to register, log in, and manage their accounts securely. The system features a responsive UI built with Thymeleaf and provides RESTful APIs for efficient data handling.",
      shortDescription:
        " A secure registration and login system with user authentication and account management.",
      //liveDemo: "https://docterappointment.netlify.app/",
      repo: "https://github.com/ALOKKUMARSAW/registration-login-authenticity",
      image: "", // Image path relative to the public folder
    },
  ];

  // Initialize AOS for animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card" data-aos="fade-up">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="short-description">{project.shortDescription}</p>
              <p className="project-description">{project.description}</p>
             
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
