import React from "react";
import { motion } from "framer-motion";
import NavBar from "../NavBar/NavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
const Skills = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black cursor-pointer absolute 
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-black xs:font-bold
      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};
const Skill = () => {
  return (
    <>
      <NavBar />
      <div className="skill-page h-screen w-full bg-[#f5f5f5] xs:h-dvh lg:h-dvh lg:overflow-hidden">
        <h2 className=" h-24 font-bold  w-full text-center text-black xs:block text-6xl xs:p-8 ">
          Skills
        </h2>
        <div className="mt-3 h-5/6 relative flex items-center justify-center rounded-full  bg-circularLight  lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg md:bg-circularLightMd  sm:bg-circularLightSm  xs:bg-circularLightXs">
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-4 shadow-black cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>
          <Skills name="HTML" x="-28vw" y="2vw" />
          <Skills name="CSS" x="-8vw" y="-10vw" />
          <Skills name="JavaScript" x="23vw" y="6vw" />
          <Skills name="ReatJS" x="0vw" y="18vw" />
          <Skills name="Github" x="-24vw" y="-12vw" />
          <Skills name="Web Design" x="15vw" y="-12vw" />
          <Skills name="Figma" x="32vw" y="-5vw" />
          <Skills name="Tailwind CSS" x="0vw" y="-19vw" />
          <Skills name="SCSS" x="-20vw" y="17vw" />
          <Skills name="Bootstrap" x="18vw" y="17.5vw" />
        </div>
      </div>

      {/* ======== MOBILE NAV-BAR ======== */}

      <div className="mobileNavBar  -mt-80 ml-48  hidden xs:block">
        <MobileNavBar />
      </div>
    </>
  );
};

export default Skill;
