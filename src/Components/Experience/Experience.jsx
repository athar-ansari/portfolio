import React from "react";
import NavBar from "../NavBar/NavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { motion } from "framer-motion";

const Experience = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <>
      <NavBar />
      <div className=" h-screen w-full bg-[#f5f5f5] xs:h-dvh lg:h-dvh  p-24 lg:p-[4.5rem] xs:p-3 text-slate-800 lg:overflow-hidden">
        <h2 className="hidden h-20 font-bold  w-full text-center text-black xs:block text-5xl xs:p-1 ">
          Experience
        </h2>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle text-[royalblue]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start text-end mb-2 ">
              <div className="font-mono italic xs:text-[0.58rem]">November 2024</div>
              <div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                >
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-black xs:text-base"
                  >
                    Skyscanner
                  </motion.div>
                </motion.div>
                <motion.h3
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="text-justify xs:text-[0.55rem] font-serif"
                >
                  In the Front-End Software Engineering Virtual Experience Program, I completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner. I developed a page for picking a travel date using Skyscanner’s open-source Backpack React library, customized my application, and ran automated tests to ensure it rendered properly.
                </motion.h3>
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle text-[royalblue]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 "
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-6 ">
              <div className="font-mono italic xs:text-[0.58rem]">
                 May 2024
              </div>
              <div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                >
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-black xs:text-base"
                  >
                    JPMorgan Chase & Co.
                  </motion.div>
                </motion.div>
                <motion.h3
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="text-justify xs:text-[0.55rem] font-serif"
                >
                  In the Software Engineering Lite Virtual Experience Program
                  with JPMorgan Chase & Co., I developed solutions for their
                  credit-card rewards system.I successfully restored system
                  functionality by developing a new class and implementing a
                  comprehensive test suite, demonstrating my problem-solving &
                  software engineering skills.
                </motion.h3>
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle text-[royalblue]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start text-end ">
              <div className="font-mono italic xs:text-[0.58rem]">
              November 2023
              </div>
              <div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                >
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-black xs:text-base"
                  >
                    CodeSoft
                  </motion.div>
                </motion.div>
                <motion.h3
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="text-justify xs:text-[0.55rem] font-serif"
                >
                  As a Web Developer Intern at CodeSoft, I created a dynamic
                  calculator app with an engaging user interface, integrating
                  sound effects & system themes to enhance user interaction.
                  This project allowed me to apply my creativity and technical
                  skills in front-end development.
                </motion.h3>
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
        </ul>
      </div>
      {/* ======== MOBILE NAV-BAR ======== */}

      <div className="mobileNavBar  -mt-80 ml-48  hidden xs:block">
        <MobileNavBar />
      </div>
    </>
  );
};

export default Experience;
