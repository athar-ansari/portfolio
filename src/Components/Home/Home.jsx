import React from "react";
import HomeSocial from "./HomeSocial/HomeSocial";
import HomeData from "./HomeData/HomeData";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="homeSection h-screen w-full bg-[#f5f5f5] text-black xs:h-dvh lg:h-dvh lg:overflow-hidden ">
        <div className="homeContainer ">
          <div className="homeContent  ml-44 pt-20  gap-x-8 	items-center xl:ml-32 lg:ml-7 lg:gap-x-5 grid md:block	 xs:gap-x-1  xs:ml-32">
            <HomeSocial />
            <div className="home_image mt-32 bg-homeImage bg-no-repeat bg-center bg-cover order-1 	 w-72 h-72 lg:h-60  lg:w-60 lg:mt-64 xs:w-52 xs:h-52 xs:-mt-32 shadow-insetWhite animate-profile_animate"></div>
            <HomeData />
          </div>
        </div>

         {/* ======== MOBILE NAV-BAR ======== */}
         
        <div className="mobileNavBar  -mt-44 ml-48 hidden xs:block ">
          <MobileNavBar />
        </div>
      </div>
    </>
  );
};

export default Home;
