import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import NavBar from "../NavBar/NavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
const Project = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen w-full  overflow-hidden bg-[#f5f5f5] xs:h-dvh">
        <h1 className="hidden  h-4 font-extrabold font-Geologica xs:flex justify-center  text-5xl  text-black  mx-14 mt-6">
          PROJECTS
        </h1>
        <ProfileCard />
      </div>

      {/* ======== MOBILE NAV-BAR ======== */}

      <div className="mobileNavBar -mt-[30rem] ml-48  hidden xs:block">
        <MobileNavBar />
      </div>
    </>
  );
};

export default Project;
