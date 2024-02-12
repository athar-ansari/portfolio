import React from 'react'
import preloader from "../../Static/Video/preloader.mp4";

const Preloader = () => {
  return (
   <>
   <div className="relative w-full h-screen overflow-hidden xs:h-dvh ">
      <video 
        className="absolute top-0 left-0 w-full h-full object-fill" 
        src={preloader}
        autoPlay 
        loop 
        
      />
    </div>
   </>
  )
}

export default Preloader;