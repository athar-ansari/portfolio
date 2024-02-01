import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

import Home from "../Home/Home";
import About from "../About/About";
import Education  from "../Education/Education";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

const FullPageScroll = () => {
   
  return (
    <>
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection >
            <Home/>
          </FullpageSection>
          <FullpageSection >
           <About/>
          </FullpageSection>
          <FullpageSection >
            <Education/>
          </FullpageSection>
          <FullpageSection>
           <Skill/>
          </FullpageSection>
          <FullpageSection>
           <Project/>
          </FullpageSection>
          <FullpageSection>
          <Contact/>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default FullPageScroll;
