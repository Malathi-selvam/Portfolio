import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaTrophy,
  FaEnvelope,
} from "react-icons/fa";
import "../../App.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={toggleSidebar}>
          &times;
        </span>

        <div className="sidebar-header">
          <h1 className="name">My Portfolio</h1>
        </div>

        <nav className="sidebar-links">
          <Link
            to="Home"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={toggleSidebar}
            className="link"
          >
            <FaHome /> <span>Hello</span>
          </Link>

          <Link
            to="About"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={toggleSidebar}
            className="link"
          >
            <FaUser /> <span>My Journey</span>
          </Link>

          <Link
            to="Skills"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={toggleSidebar}
            className="link"
          >
            <FaCode /> <span>Skills</span>
          </Link>

          <Link
            to="Creations"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={toggleSidebar}
            className="link"
          >
            <FaProjectDiagram /> <span>Creations</span>
          </Link>

          <Link
            to="Contact"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={toggleSidebar}
            className="link"
          >
            <FaEnvelope /> <span>Connect</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Nav;
