import React from "react";
import ReactLottie from "react-lottie";

type LottieProps = {
  src: any;
};

const Lottie = ({ src }: LottieProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: src,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <ReactLottie options={defaultOptions} height={100} width={100} />;
};

export default Lottie;
