import React from "react";
import Nhit from "../../Static/Images/Nhit.jpeg";
import Aec from "../../Static/Images/Aec.jpeg";
import x from "../../Static/Images/x.jpeg";
const Education = () => {
  return (
    <>
      <div className="education h-screen w-full bg-black">
        <h2 className="font-bold text-7xl  w-full text-center text-white  p-3 md:text-6xl ">
          Education
        </h2>
        {/* B.tech */}

        <div className="max-w-2xl mx-auto mt-14  sm:mt-12  xs:mt-4">
          <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                loading="lazy"
                src={Aec} alt="" />
            </div>

            <div className="flex flex-col gap-2 py-2">
              <p className="text-xl font-bold">
                B.tech in Information Technology(22-25)
              </p>

              <p className="text-gray-500">Asansol Engineering College</p>
            </div>
          </div>
        </div>

        {/* Diploma */}

        <div className="max-w-2xl mx-auto mt-14 sm:mt-12 xs:mt-8">
          <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                loading="lazy"
                src={Nhit} alt="" />
            </div>

            <div className="flex flex-col gap-2 py-2">
              <p className="text-xl font-bold">Diploma</p>

              <p className="text-gray-500">
                Durgapur "NHIT" Engineering College
              </p>
            </div>
          </div>
        </div>

        {/* Claas X */}

        <div className="max-w-2xl mx-auto mt-14 sm:mt-12 xs:mt-8">
          <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                loading="lazy"
                src={x} alt="" />
            </div>

            <div className="flex flex-col gap-2 py-2">
              <p className="text-xl font-bold">Claas X</p>

              <p className="text-gray-500">Rahmat Nagar High School</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
