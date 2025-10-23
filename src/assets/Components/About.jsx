import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll";
import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";
import "../../App.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const timeline = [
    {
      year: "2022",
      title: "Completed Higher Secondary",
      description:
        "Graduated from Govt. Girls Higher Secondary School, Ettayapuram with 88.8%.",
      icon: <FaGraduationCap />,
      aos: "fade-right",
    },
    {
      year: "2022 – 2025",
      title: "B.Sc Physics - G. Venkataswamy Naidu College",
      description:
        "Pursued my Bachelor’s degree in Physics while exploring my passion for technology and full-stack web development.",
      icon: <FaLaptopCode />,
      aos: "fade-left",
    },
    {
      year: "Future",
      title: "Full Stack Development 🚀",
      description:
        "Excited to embark on my professional journey as a Full Stack Developer, building innovative digital experiences.",
      icon: <FaRocket />,
      aos: "fade-right",
    },
  ];

  return (
    <Element name="About" className="section2">
      <h2 className="journey-title">My Journey</h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={item.aos}
          >
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
}

export default About;
