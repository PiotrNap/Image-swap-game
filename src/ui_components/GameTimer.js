import { useState, useEffect } from "react";

export default function GameTimer({ startTime, gameEnded }) {
  const [timerStyle, setTimerStyle] = useState("h-2 bg-green-300");

  useEffect(() => {
    if (!startTime) window.location.reload();
    var timer = document.querySelector("#timer");
    var initialWidth = timer.offsetWidth;
    var milsecPixels = initialWidth / (startTime * 60);
    var interval = setInterval(() => {
      if (timer.offsetWidth > 0 && timer.offsetWidth >= milsecPixels) {
        timer.style.width = timer.offsetWidth - milsecPixels + "px";
        if (
          timer.offsetWidth < (initialWidth / 100) * 70 &&
          timer.offsetWidth > (initialWidth / 100) * 30
        ) {
          setTimerStyle("h-2 bg-yellow-400");
        } else if (timer.offsetWidth < (initialWidth / 100) * 30) {
          setTimerStyle("h-2 bg-red-500");
        }
      } else if (timer.offsetWidth < milsecPixels) {
        clearInterval(interval);
        gameEnded();
      }
      return function cleanUp() {
        clearInterval(interval);
      };
    }, 100);
  }, [startTime, gameEnded]);

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
