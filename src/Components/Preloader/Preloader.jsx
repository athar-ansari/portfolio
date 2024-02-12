import React, { useState, useEffect, useRef } from "react";
import preloader from "../../Static/Video/preloader.mp4";
import backgroundAudio from "../../Static/Audio/preloaderSound.mp3"; 

const Preloader = () => {
  const [count, setCount] = useState(1);
  const [showWelcome, setShowWelcome] = useState(false);
  const totalTime = 7000; // Total time in milliseconds
  const totalSteps = 100; // Total count
  const intervalTime = totalTime / totalSteps; // Time per count

  const audioRef = useRef(null);

  const startAudio = () => {
    audioRef.current.play();
  };

  useEffect(() => {
    window.addEventListener('click', startAudio);
    return () => {
      window.removeEventListener('click', startAudio);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        }
        return prevCount;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      setTimeout(() => {
        setShowWelcome(true);
      }, 700); // wait for 1 seconds before showing the welcome message
    }
  }, [count]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden xs:h-dvh text-white font-Geologica font-extrabold ">
        <video
          className="absolute top-0 left-0 w-full h-full object-fill"
          src={preloader}
          autoPlay
          loop
          muted
        />
        <audio
          ref={audioRef}
          className=""
          src={backgroundAudio}
          loop
        />
        {!showWelcome ? (
          <p className="z-[999] relative flex items-end justify-start h-screen p-6 xs:p-4" style={{ fontSize: `${12 + count}px` }}>
            {count}%
          </p>
        ) : (
          <p className="z-[999] relative flex items-center justify-center h-screen  text-6xl lg:text-4xl xs:text-xl font-serif text-orange-700 ">
            WELCOME TO MY PORTFOLIO
          </p>
        )}
      </div>
    </>
  );
};

export default Preloader;
