import React from "react";
import "./navbar.css";

const statisticsData = [
  { label: "Projects Completed", value: "15+" },
  { label: "GitHub Repositories", value: "30+" },
  { label: "Tech Stack Mastered", value: "10+" },
  { label: "Open Source Contributions", value: "3+" },
  { label: "Certifications Achieved", value: "5+" },
];

const Statistics = () => {
  return (
    <section id="statistics" className="statistics-section">
      <h2 className="statistics-title">My Statistics</h2>
      <div className="statistics-grid">
        {statisticsData.map((stat, index) => (
          <div key={index} className="stat-card">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
