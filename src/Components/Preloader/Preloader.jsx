import React from "react";
import "./Preloader.css";
const Preloader = () => {
  return (
    <>
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Connecting</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="myname">Hi, Athar..👋</div>
      </div>
    </>
  );
};

export default Preloader;
