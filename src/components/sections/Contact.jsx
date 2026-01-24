import React, { useState } from "react";
import "@styles/navbar.css";
import "@styles/hero.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(""), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "aloksaw512@gmail.com",
      link: "mailto:aloksaw512@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone", 
      value: "+91 7004418606",
      link: "tel:+917004418606"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Banglore, Karnataka, India",
      link: null
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/alok-kumar-saw",
      link: "https://www.linkedin.com/in/alok-kumar-saw/"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/ALOKKUMARSAW",
      link: "https://github.com/ALOKKUMARSAW"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your next project or opportunity</p>
        </div>

        <div className="contact-container">
          {/* Contact Information Cards */}
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Connect</h3>
              <p>I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to get in touch!</p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="form-header">
              <h3>Send Message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-element">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
