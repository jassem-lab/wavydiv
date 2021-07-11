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
        url={
          "https://www.youtube.com/watch?v=gdvQt6S7qFU&ab_channel=1HourLoops"
        }
        autoPlay
      ></ReactPlayer>
      <ReactPlayer url={Video} playing={true} controls={false} />
    </div>
  );
};

export default ReactPlayerComponent;
