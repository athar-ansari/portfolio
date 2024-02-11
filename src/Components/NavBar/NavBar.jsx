import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skill' },
    { name: 'Works', path: '/project' },
   
  ];

  useEffect(() => {
    setActiveLink(location.pathname); // set activeLink when the location changes
  }, [location]);

  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li");
    const indicator = document.querySelector("nav .nav-indicator");

    function update() {
      let activeLinkElement = navLinks[links.findIndex(link => link.path === activeLink)];
      let width = activeLinkElement.offsetWidth;
      let left = activeLinkElement.offsetLeft;

      indicator.style.width = `${width + 30}px`;
      indicator.style.left = `${left}px`;
    }
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update); // cleanup on unmount
  }, [activeLink]); // re-run the effect when activeLink changes

  return (
    <>
      <div className="homenav flex justify-between bg-[#f5f5f5] w-full h-20 p-6 px-20 fixed top-0 z-[999] xs:hidden">
        <div className="name text-5xl font-Alex text-black">Athar </div> 
        <div className="page text-[1.3rem]">

        <nav>
        <ul className="relative flex gap-16 font-bold z-10 cursor-pointer ">
        <div className="nav-indicator absolute h-full w-[88px] bg-black rounded-[100px] transition-all duration-[0.3s] ease-out  -translate-x-[14px]"></div>
        {links.map((link, index) => (
          <li
            key={index}
            className={`cursor-pointer ${link.path === activeLink ? 'text-white ' : 'text-black'}`}
            onClick={() => setActiveLink(link.path)}
            style={{ zIndex: 10 }}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
