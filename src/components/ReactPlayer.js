import React from "react";
import ReactPlayer from "react-player";
import Video from "../assets/aerial.mp4";

const ReactPlayerComponent = () => {
  return (
    <div>
      <ReactPlayer
        autoPlay
        muted={true}
        url={Video}
        controls={false}
        playsinline={true}
        playing={true}
      />
    </div>
  );
};

export default ReactPlayerComponent;
