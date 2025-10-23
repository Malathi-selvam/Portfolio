import React from "react";
import { Element } from "react-scroll";
import "../../App.css";

function Creations() {
  const projects = [
    {
      title: "🍽️ Online Food Shop Management",
      img: "/online-food-shop.jpg",
      tech: "Java • J2EE • MySQL",
      link: "https://github.com/Malathi-selvam/Java-Project",
    },
    {
      title: "⏰ Daily Routine Reminder",
      img: "/reminder.jpg",
      tech: "React.js • EmailJS • REST API",
      link: "https://github.com/Malathi-selvam/daily_routine_reminder",
    },
    {
      title: "/Leave Management System",
      img: "leavemanagementsystem.jpg",
      tech: "SpringBoot • Hibernate • HTML • Css • Mysql",
    },
  ];

  return (
    <Element name="Creations" className="projects-section">
      <h2 className="projects-title" data-aos="fade-up">
        My Creations
      </h2>
      <p className="projects-subtitle" data-aos="fade-up">
        A glimpse of what I’ve built 🚀
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={project.img}
              alt={project.title}
              className="project-img"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="tech-stack">{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
}

export default Creations;
