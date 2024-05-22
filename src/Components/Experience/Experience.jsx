import React from "react";
import NavBar from "../NavBar/NavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";

const Experience = () => {
  return (
    <>
      <NavBar />
      <div className=" h-screen w-full bg-[#f5f5f5] xs:h-dvh lg:h-dvh  p-24 lg:p-[4.5rem] xs:p-3 text-slate-800 lg:overflow-hidden">
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
              <time className="font-mono italic xs:text-[0.58rem]">
                May 2024
              </time>
              <div className="text-lg font-black xs:text-base">TATA</div>
              <h3 className="text-justify  xs:text-[0.55rem] font-serif">
                During my internship at Tata Consultancy Services as a
                Cybersecurity Security Analyst, I played a key role in enhancing
                identity & access management systems, which significantly
                improved security protocols. This experience honed my ability to
                align cybersecurity strategies with business objectives &
                effectively communicate complex technical concepts.
              </h3>
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
              <time className="font-mono italic xs:text-[0.58rem]">
                Apr. 2024 to May 2024
              </time>
              <div className="text-lg font-black xs:text-base">
                JPMorgan Chase & Co.
              </div>
              <h3 className="text-justify  xs:text-[0.55rem] font-serif">
                In the Software Engineering Lite Virtual Experience Program with
                JPMorgan Chase & Co., I developed solutions for their
                credit-card rewards system.I successfully restored system
                functionality by developing a new class and implementing a
                comprehensive test suite, demonstrating my problem-solving &
                software engineering skills.
              </h3>
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
              <time className="font-mono italic xs:text-[0.58rem]">
                Oct. 2023 to Nov. 2023
              </time>
              <div className="text-lg font-black xs:text-base">CodeSoft</div>
              <h3 className="text-justify  xs:text-[0.55rem] font-serif">
                As a Web Developer Intern at CodeSoft, I created a dynamic
                calculator app with an engaging user interface, integrating
                sound effects & system themes to enhance user interaction. This
                project allowed me to apply my creativity and technical skills
                in front-end development.
              </h3>
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
