import React from "react";
import lottie from "lottie-web";
import animation from "../animation/laforga.json";
import { Player } from "@lottiefiles/react-lottie-player";
import an from "../animation/an.json";

const Animation = () => {
  let animationContainer = React.createRef();

  React.useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: an,
      loop: true,
      play: true,
      autoplay: true,
      renderer: "svg",
    });
  }, []);


//   https://lottiefiles.com/share/i5eriina



  return (
    <div>
      <div style={{ width: `200px`, height: `200px` }}>
        <Player
          autoplay={true}
          play
          loop
          speed="1"
          background="transparent"
          src={an}
        ></Player>
      </div>
      <div className="animation-container" ref={animationContainer} />
    </div>
  );
};

export default Animation;
