import React from "react";
import "@styles/statistics.css";

const Statistics = () => {
  return (
    <section id="statistics" className="statistics-section">
      <div className="container">
        <h2 className="section-title">Statistics</h2>
        <div className="statistics-grid">
          <div className="stat-card">
            <h3 className="stat-number">25+</h3>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Technologies</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">100%</h3>
            <p className="stat-label">Code Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
