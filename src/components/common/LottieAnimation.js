import { useLottie, useLottieInteractivity } from "lottie-react";

export default function LottieAnimation({ json }) {
  const options = {
    animationData: json,
    loop: true,
  };
  const lottieObj = useLottie(options);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.45],
        type: "stop",
        frames: [1],
      },
      {
        visibility: [0.45, 1],
        type: "play",
        frames: [0, 38],
      },
    ],
  });
  return Animation;
}
