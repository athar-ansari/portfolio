import React from "react";
import hand from "../../Static/Images/waving-hand.png";
import { motion } from "framer-motion";


function Preloader() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4 } },
  };
  return (
    <>
      <div className="homeSection h-screen w-full bg-[#f5f5f5] text-black xs:h-dvh lg:h-dvh lg:overflow-hidden ">
        <div className="p-44 lg:p-20 sm:p-36">
          <div className="grid grid-cols-2 gap-2">
            <motion.h3
              initial="hidden"
              animate="visible"
              variants={variants}
              className="order-2 font-serif text-[2.65rem]  -ml-52 mt-8  lg:-ml-10 lg:mt-56 lg:text-4xl sm:mt-28 sm:-ml-44 sm:text-2xl sm:w-screen "
            >
              <img className="w-[120px]" src={hand} alt="" />
              Welcome Back to My Portfolio Website !
            </motion.h3>
            <div className="home_image  bg-homeImage bg-no-repeat bg-center bg-cover order-1 w-72 h-72 lg:h-60 lg:w-60 lg:mt-64 xs:w-52 xs:h-52 xs:-mt-28 sm:-ml-10 shadow-insetWhite animate-profile_animate"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preloader;
