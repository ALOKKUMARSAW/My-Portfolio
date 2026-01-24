import React from "react";
import "@styles/navbar.css";
import "@styles/hero.css";

const Services = () => {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies like Java, Spring Boot, React, and more.",
      features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Performance Optimization"]
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Web Design",
      description: "Creating beautiful, mobile-first interfaces that provide exceptional user experiences across all devices.",
      features: ["Mobile-First Design", "Cross-Browser Compatibility", "UI/UX Best Practices", "Accessibility"]
    },
    {
      icon: "fas fa-database",
      title: "Database Architecture",
      description: "Designing and implementing efficient, scalable database solutions for your application needs.",
      features: ["MySQL/MongoDB", "Database Optimization", "Data Modeling", "Migration Services"]
    },
    {
      icon: "fas fa-rocket",
      title: "Performance Optimization",
      description: "Analyzing and optimizing application performance for faster load times and better user experience.",
      features: ["Code Optimization", "Caching Strategies", "Load Testing", "Monitoring"]
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security Implementation",
      description: "Implementing robust security measures to protect your applications and user data.",
      features: ["Authentication", "Data Encryption", "Security Audits", "Best Practices"]
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Deployment",
      description: "Deploying and managing applications on cloud platforms for scalability and reliability.",
      features: ["AWS/Azure", "Docker", "CI/CD Pipelines", "Monitoring"]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">Professional services to bring your ideas to life</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to start your project?</h3>
            <p>Let's discuss how I can help bring your ideas to life with professional development services.</p>
            <div className="cta-actions">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                <i className="fas fa-briefcase"></i>
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
