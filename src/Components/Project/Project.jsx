import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";

const Project = () => {
  return (
    <>
      <div className="h-screen w-full bg-orange-700 overflow-hidden">
        <div className="h-20  text-7xl font-extrabold font-Geologica flex justify-center lg:mt-14   sm:text-5xl ">
          <h1 className="mt-4 text-white  sm:mr-14 sm:-mt-6">PROJECTS</h1>
        </div>
        <div className="">
          <ProfileCard />
        </div>
      </div>
    </>
  );
};

export default Project;
