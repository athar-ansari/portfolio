import React from "react";
import Nhit from "../../Static/Images/Nhit.jpeg";
import Aec from "../../Static/Images/Aec.jpeg";
import x from "../../Static/Images/x.jpeg";
import NavBar from "../NavBar/NavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <>
      <NavBar />
      <div className="education h-screen w-full bg-[#f5f5f5] text-black xs:h-dvh lg:h-dvh lg:overflow-hidden ">
        <h2 className="font-bold  w-full text-center   p-3 xs:block xs:text-6xl  ">
          Education
        </h2>
        {/* B.tech */}

        <motion.div
          className="max-w-2xl mx-auto mt-14 sm:mt-12 xs:mt-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-1000 transform hover:scale-110 cursor-pointer"
                loading="lazy"
                src={Aec}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-2 py-2">
              <p className="text-xl font-bold">
                B.TECH
                <br />
                <span className="text-xl font-semibold">(22-25)</span>
              </p>

              <p className="">Asansol Engineering College</p>
            </div>
          </div>
        </motion.div>

        {/* Diploma */}

        <motion.div
          className="max-w-2xl mx-auto mt-14 sm:mt-12 xs:mt-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-1000 transform hover:scale-110 cursor-pointer"
                loading="lazy"
                src={Nhit}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-2 py-2">
              <p className="text-xl font-bold">
                DIPLOMA
                <br />
                <span className="text-xl font-semibold">(19-22)</span>
              </p>

              <p className="">Durgapur "NHIT" Engineering College</p>
            </div>
          </div>
        </motion.div>

        {/* Claas X */}

        <motion.div
          className="max-w-2xl mx-auto mt-14 sm:mt-12 xs:mt-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-1000 transform hover:scale-110 cursor-pointer"
                loading="lazy"
                src={x}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-2 py-2">
              <p className="text-xl font-bold">
                CLASS X<br />
                <span className="text-xl font-semibold">(2019)</span>
              </p>

              <p className="">Rahmat Nagar High School</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mobileNavBar  -mt-96 ml-48  hidden xs:block">
        <MobileNavBar />
      </div>
    </>
  );
};

export default Education;
