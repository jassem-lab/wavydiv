import React from "react";
import ReactPlayer from "react-player";
import Video from "../assets/aerial.mp4";

const ReactPlayerComponent = () => {
  return (
    <div>
      this video
      <ReactPlayer
        playing={true}
        controls={true}
        url={"https://www.youtube.com/watch?v=dDR1DFtik0E"}
        autoPlay
      ></ReactPlayer>
      <ReactPlayer
        playsinline={true}
        className="video"
        autoPlay
        loop={true}
        playing={true}
        volume="0"
        muted={true}
        url={Video}
      />
    </div>
  );
};

export default ReactPlayerComponent;
