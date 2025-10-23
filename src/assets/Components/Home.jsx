import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import "../../App.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Home() {
  const messages = [
    "Full Stack Developer skilled in React.js and databases.",
    "Passionate about coding, problem-solving, and creating web solutions.",
    "Ready to kick-start my career and contribute to real-world projects.",
  ];

  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = deleting ? 40 : 100;
    const timeout = setTimeout(() => {
      const currentMessage = messages[msgIndex];
      if (!deleting) {
        setText(currentMessage.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentMessage.length) setDeleting(true);
      } else {
        setText(currentMessage.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setMsgIndex((msgIndex + 1) % messages.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, msgIndex]);

  return (
    <Element name="Home" className="section home-section">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">
            Hi, I'm <span>Malathi</span> 👋
          </h1>
          <p className="typed-text">{text}</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/malathi-s-270695379/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Malathi-selvam"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/malu_4858?utm_source=qr&igsh=MWU2amFzOGVqb20yMw=="
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src="/me.jpg" alt="Malathi" />
        </div>
      </div>
    </Element>
  );
}

export default Home;
