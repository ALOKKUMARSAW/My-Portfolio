import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Movie Watchlist Application",
      description:
        "The Movie Watchlist App is a full-stack web application developed using Java, Spring Boot, OMDB API, Thymeleaf, and H2 Database. It enables users to search, add, and view movies by integrating with the OMDB API. The backend is built with Spring Boot and utilizes H2 for fast in-memory data storage, while the frontend uses Thymeleaf to render a dynamic and responsive interface. The app improves performance, user interaction, and overall experience through efficient RESTful API integration and UI design.",
      shortDescription: "An interactive movie watchlist application.",
      //liveDemo: "",
      repo: "https://github.com/ALOKKUMARSAW/MovieWatchList-App",
      image: "/Movie.png", // Image path relative to the public folder
    },
    {
      title: "EduTrack-Pro",
      description:
        "EduTrack-Pro is a comprehensive e-learning platform built with Java, Spring Boot, and MySQL. It offers a wide range of courses in various domains, including technology, business, and personal development. The platform provides a user-friendly interface for students to explore courses, enroll in them, and track their progress. It also includes a robust admin panel for managing courses, users, and other administrative tasks. EduTrack-Pro is designed to be scalable and maintainable, with a focus on providing a seamless learning experience for students.",
      shortDescription: "An e-learning platform for students to enroll in courses and track their progress.",
      liveDemo: "https://docterappointment.netlify.app/",
      repo: "https://github.com/ALOKKUMARSAW/EduTech-Pro",
      image: "/EduTrack.png", // Image path relative to the public folder
    },
    {
      title: "Doctor Appointment System",
      description:
        "The Doctor Appointment System is a full-stack web application developed using Java, Spring Boot, and MySQL. It enables users to book appointments with doctors, view available slots, and manage their appointments. The backend is built with Spring Boot and utilizes MySQL for data storage, while the frontend uses Thymeleaf to render a dynamic and responsive interface. The app improves performance, user interaction, and overall experience through efficient RESTful API integration and UI design.",
      shortDescription:
        "It enables users to book appointments with doctors, view available slots, and manage their appointments.",
      liveDemo: "https://docterappointment.netlify.app/",
      repo: "https://github.com/ALOKKUMARSAW/DoctorAppoinmentSystem",
      image: "/Doctor.png", // Image path relative to the public folder
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
