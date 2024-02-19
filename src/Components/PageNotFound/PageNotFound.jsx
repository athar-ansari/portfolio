import React from "react";
import NotFound from "../../Static/Video/NotFound.mp4";

const PageNotFound = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden xs:h-dvh ">
        <video
          className="absolute top-0 left-0 w-full h-full object-fill"
          src={NotFound}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </>
  );
};

export default PageNotFound;
