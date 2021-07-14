import React, { useState, useEffect } from "react";
import lottie from "lottie-web";
import animation from "../animation/laforga.json";
import { Player } from "@lottiefiles/react-lottie-player";
import an from "../animation/an.json";
import Lottie from "react-lottie-player";

const Animation = () => {
  //   let animationContainer = React.createRef();

  //   React.useEffect(() => {
  //     lottie.loadAnimation({
  //       container: animationContainer.current,
  //       animationData: an,
  //       loop: true,
  //       play: true,
  //       autoplay: true,
  //       renderer: "svg",
  //     });
  //   }, []);

  const [animationData, setAnimationData] = useState();

  useEffect(() => {
    import("../animation/an.json").then(setAnimationData);
  }, []);

  if (!animationData) return <div style={{ color: `red` }}>Loading...</div>;
  return (
    <>
   <Player
      src="https://assets9.lottiefiles.com/packages/lf20_1vb6lfpn.json"
      loop
      autoplay
      style={{ width: 150, height: 150 }}
    />
     <Player
      src="https://assets2.lottiefiles.com/packages/lf20_de3mokag.json"
      loop
      autoplay
      style={{ width: 150, height: 150 }}
    /> 
    </>
  );
};

export default Animation;
