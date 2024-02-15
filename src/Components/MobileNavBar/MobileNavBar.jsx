import React, { useState } from "react";
import "./MobileNavBar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ICON : https://icons8.com/
import project from "../../Static/Images/project.png";
import skill from "../../Static/Images/skill.png";
import about from "../../Static/Images/about.png";
import education from "../../Static/Images/education.png";
import navigation from "../../Static/Images/navigation.png";
import home from "../../Static/Images/home.png";
import useSound from "use-sound";
import clickSound from "../../Static/Audio/click.mp3";

const MobileNavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const [play] = useSound(clickSound);

  return (
    <>
      <motion.div
        className={`menu ${active ? "active" : ""}`}
        initial={{ x: "60vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
      >
        <div className="toggle bg-white hover:bg-white " onClick={handleClick}>
          <img
            src={navigation}
            alt="navigation"
            className="Navigation scale-90  transition-transform duration-500 ease-in-out transform hover:scale-75"
          />
        </div>

        <li style={{ "--i": 0, "--clr": "#1da1f2" }}>
          <Link to="/education" className="menu-link" onClick={play}>
            <img
              src={education}
              alt="education"
              className="scale-150 transition-transform duration-500 ease-in-out transform hover:scale-125"
            />
          </Link>
        </li>

        <li style={{ "--i": 1, "--clr": "#FF5733" }}>
          <Link to="/about" className="menu-link" onClick={play}>
            <img
              src={about}
              alt="about"
              className="scale-150 transition-transform duration-500 ease-in-out transform hover:scale-125"
            />
          </Link>
        </li>

        <li style={{ "--i": 2, "--clr": "#0a66c2" }}>
          <Link to="/" className="menu-link" onClick={play}>
            <img
              src={home}
              alt="home"
              className="scale-150 transition-transform duration-500 ease-in-out transform hover:scale-125"
            />
          </Link>
        </li>

        <li style={{ "--i": 6, "--clr": "#c32aa3" }}>
          <Link to="/project" className="menu-link" onClick={play}>
            <img
              src={project}
              alt="project"
              className="scale-150 transition-transform duration-500 ease-in-out transform hover:scale-125"
            />
          </Link>
        </li>

        <li style={{ "--i": 7, "--clr": "#1b1e21" }}>
          <Link to="/skill" className="menu-link" onClick={play}>
            <img
              src={skill}
              alt="skill"
              className="scale-150 transition-transform duration-500 ease-in-out transform hover:scale-125"
            />
          </Link>
        </li>
      </motion.div>
    </>
  );
};

export default MobileNavBar;
