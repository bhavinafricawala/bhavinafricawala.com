import React from "react";

const BackGround = () => {
  return (
    <div className="fullscreen-bg">
      <video loop muted autoPlay className="fullscreen-bg__video">
        <source src="video/Motorcycle.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackGround;
