import React, { useState, useEffect } from "react";
import { MdDownload } from "react-icons/md";

const CvButton = () => {
  const [timer, setTimer] = useState(5);
  const [isDownloading, setIsDownloading] = useState(false);

  const fileLink =
    "https://drive.google.com/uc?export=download&id=1eXNJNcniy-HaoYRNopktqJsuKnqGn71u";

  // there is a fileLink variable where I’ve given my Google Drive file link. You’ve to remove that link and paste your own link to download.
  // If you want to give your Google Drive link there then you can replace this “1eXNJNcniy-HaoYRNopktqJsuKnqGn71u” ID with your file ID.
  // Steps to Get Downloadable Id of Google Drive File ⤵️
  // To get a file ID, upload your file on Google Drive > Right Click on the File > Click Share > Update General Access to “Anyone with the link” > Click Copy Link > Paste it on the notepad. In this link, you’ll get the file ID.
  // The URL looks like this: https://drive.google.com/file/d/FILE-ID/view?usp=sharing

  useEffect(() => {
    let timerId;
    if (isDownloading && timer > 0) {
      timerId = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      window.location.href = fileLink;
      setIsDownloading(false);
      setTimer(5);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isDownloading, timer]);

  const handleClick = () => {
    setIsDownloading(true);
  };

  return (
    <button
      className={`font-serif m-5 w-48 outline-none border-none flex cursor-pointer px-6 py-4 rounded-xl items-center whitespace-nowrap xs:ml-2 xs:w-32 xs:px-3 xs:py-4 ${
        isDownloading
          ? "text-black bg-transparent pointer-events-none"
          : "text-white bg-[#4A98F7] hover:bg-[#2382f6] transition-all duration-200"
      }`}
      onClick={handleClick}
      data-timer="5"
    >
      {!isDownloading && <MdDownload className="text-5xl text-black" />}
      <span className="text text-[16px] tracking-widest pl-6 xs:text-[12px] xs:tracking-tight		xs:pl-5">
        {isDownloading
          ? `Your download will begin in ${timer} seconds`
          : "Download CV"}
      </span>
    </button>
  );
};

export default CvButton;
