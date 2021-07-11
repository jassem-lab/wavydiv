import React from "react";
import ReactPlayer from "react-player";
import Video from "../assets/aerial.mp4";

const ReactPlayerComponent = () => {
  return (
    <div>
    this video
      <ReactPlayer
      autoPlay playing={true} url={Video} muted
      />
    </div>
  );
};

export default ReactPlayerComponent;
