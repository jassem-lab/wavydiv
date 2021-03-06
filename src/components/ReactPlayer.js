import React from "react";
import ReactPlayer from "react-player";
import Video from "../assets/aerial.mp4";
import Beggin from "../assets/videoplayback.mp4";
import Ac from "../assets/assassinCreeds.mp4";
import Vid from "../assets/vid.mp4";

const ReactPlayerComponent = () => {
  return (
    <div>
      <mark>this video</mark>

      <ReactPlayer
        style={{ height: `120px`, width: `180px` }}
        loop={true}
        playing={true}
        url={Ac}
        muted={true}
        playsinline={true}
      />
    </div>
  );
};

export default ReactPlayerComponent;
