import { useState, useEffect } from "react";
import EndGamePopup from "./EndGamePopup.js";

export default function GameTimer({ startTime }) {
  const [timerStyle, setTimerStyle] = useState("h-2 bg-green-300");
  const [gameTimeOut, setGameTimeOut] = useState(false);

  useEffect(() => {
    console.log(startTime);
    if (!startTime) window.location.reload();
    var timer = document.querySelector("#timer");
    var initialWidth = timer.offsetWidth;
    console.log(initialWidth, startTime);
    var milsecPixels = initialWidth / (startTime * 60);
    var interval = setInterval(() => {
      if (timer.offsetWidth > 0 && timer.offsetWidth >= milsecPixels) {
        console.log(milsecPixels);
        timer.style.width = timer.offsetWidth - milsecPixels + "px";
        if (
          timer.offsetWidth < (initialWidth / 100) * 70 &&
          timer.offsetWidth > (initialWidth / 100) * 30
        ) {
          setTimerStyle("h-2 bg-yellow-400");
        } else if (timer.offsetWidth < (initialWidth / 100) * 30) {
          setTimerStyle("h-2 bg-red-500");
        }
        console.log(timer.offsetWidth);
      } else if (timer.offsetWidth < milsecPixels) {
        clearInterval(interval);
        setGameTimeOut(true);
      }
      return function cleanUp() {
        clearInterval(interval);
      };
    }, 100);
  }, [startTime]);

  return (
    <div className="w-4/5 p-4 flex justify-center">
      <div
        id="timer"
        className={`${timerStyle}`}
        style={{ width: "100%" }}
      ></div>
    </div>
  );
}
