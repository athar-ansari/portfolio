import React from "react";
import Home from "./Components/Home/Home";
import Education from "./Components/Education/Education";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import ThankYou from "./Components/Contact/ThankYou";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/thank-you" element={<ThankYou/>} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
