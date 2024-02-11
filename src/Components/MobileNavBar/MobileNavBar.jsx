import React, { useState } from "react";
import "./MobileNavBar.css";
import { Link } from "react-router-dom";


// ICON : https://icons8.com/ 
import project from "../../Static/Images/project.png";
import skill from "../../Static/Images/skill.png";
import about from "../../Static/Images/about.png";
import education from "../../Static/Images/education.png";
import navigation from "../../Static/Images/navigation.png";
import home from "../../Static/Images/home.png";


const MobileNavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };


  return (
    <>  
    
    <div className={`menu ${active ? "active" : ""}`}>
      
      <div className="toggle bg-white hover:bg-white " onClick={handleClick}>
      <img src={navigation} alt="navigation" className="Navigation scale-90  transition-transform duration-500 ease-in-out transform hover:scale-75"/>
      </div>

      <li style={{ "--i": 0, "--clr": "#1da1f2" }}>
      <Link to="/education" className="menu-link">
        <img src={education} alt="education" className="scale-150 transition-transform duration-500 ease-in-out transform hover:scale-125" />
        </Link>
      </li>

      <li style={{ "--i": 1, "--clr": "#FF5733" }}>
      <Link to="/about" className="menu-link">
        <img src={about} alt="about" className="scale-150 transition-transform duration-500 ease-in-out transform hover:scale-125" />
        </Link>
      </li>

      <li style={{ "--i": 2, "--clr": "#0a66c2" }}>
      <Link to="/" className="menu-link">
        <img src={home} alt="home" className="scale-150 transition-transform duration-500 ease-in-out transform hover:scale-125" />
        </Link>
      </li>

      <li style={{ "--i": 6, "--clr": "#c32aa3" }}>
        <Link to="/project" className="menu-link">
        <img src={project} alt="project" className="scale-150 transition-transform duration-500 ease-in-out transform hover:scale-125" />
        </Link>
      </li>

      <li style={{ "--i": 7, "--clr": "#1b1e21" }}>
      <Link to="/skill" className="menu-link">
        <img src={skill} alt="skill" className="scale-150 transition-transform duration-500 ease-in-out transform hover:scale-125" />
        </Link>
      </li>

    </div>

    </>
  );
};

export default MobileNavBar;
