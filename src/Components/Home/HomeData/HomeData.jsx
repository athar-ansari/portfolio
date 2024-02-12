import React from "react";
import HomeSend from "../HomeData/HomeSend/HomeSend";
import { Typewriter } from "react-simple-typewriter"; 
import { FaLaptopCode } from "react-icons/fa";
const HomeData = () => {
  return (
    <>
      <div className="home_data mt-24 lg:-ml-12 lg:mt-60 xs:mt-24 xs:-ml-24">
      <h1 className="home_title text-5xl font-semibold font-Geologica bg-gradientLinear text-transparent bg-clip-text  animate-gradient lg:text-4xl">Athar Ansari</h1>

        <h3 className="home_subtitle text-2xl	font-medium	my-2 h-5 flex items-center gap-2 lg:text-xl">
        <FaLaptopCode />
        <Typewriter
              words={["Programmer", "Developer", "Designer"]}
              loop={true}
              typeSpeed={250}
              deleteSpeed={150}
              delaySpeed={1000}
            /></h3>
        <p className="home_despriction mb-4">I'm creative designer based in India, and I'm very passionate and dedicated to my work. </p>
        <HomeSend/>
      </div>
    </>
  );
};

export default HomeData;
