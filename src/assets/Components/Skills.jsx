import React, { useEffect } from "react";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import "../../App.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { name: "HTML", level: "95%", icon: <FaHtml5 /> },
    { name: "CSS", level: "90%", icon: <FaCss3Alt /> },
    { name: "JavaScript", level: "85%", icon: <FaJsSquare /> },
    { name: "React.js", level: "85%", icon: <FaReact /> },
    { name: "Java", level: "90%", icon: <FaJava /> },
    { name: "J2EE", level: "80%", icon: <FaJava /> },
    { name: "SQL", level: "85%", icon: <FaDatabase /> },
    { name: "Spring Boot", level: "75%", icon: <SiSpringboot /> },
    { name: "Version Control (Git)", level: "80%", icon: <FaGitAlt /> },
  ];

  return (
    <Element name="Skills" className="skills-section">
      <h2 className="skills-title" data-aos="fade-up">
        My Technical Skills
      </h2>
      <p className="skills-subtitle" data-aos="fade-up">
        Tools and technologies I work with 🚀
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: skill.level }}></div>
            </div>
            <span className="skill-percent">{skill.level}</span>
          </div>
        ))}
      </div>
    </Element>
  );
}

export default Skills;
