import React from "react";
import Lottie from "react-lottie";
import AnimationData from "../assets/loading/worldload2.json";
import Fade from "react-reveal/Fade";

function LoaderAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Fade>
      <div className="loader-container overscroll-none">
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
          isStopped={false}
          isPaused={false}
        />
      </div>
    </Fade>
  );
}

export default LoaderAnimation;
