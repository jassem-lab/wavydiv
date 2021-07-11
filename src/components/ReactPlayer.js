import React from "react";
import ReactPlayer from "react-player";
import Video from "../assets/aerial.mp4";

const ReactPlayerComponent = () => {
  return (
    <div>
      this video
      <ReactPlayer
        playsinline={true}
        className="video"
        autoPlay
        loop={true}
        playing={true}
        volume="0"
        muted
        url={Video}
      />
    </div>
  );
};

export default ReactPlayerComponent;
