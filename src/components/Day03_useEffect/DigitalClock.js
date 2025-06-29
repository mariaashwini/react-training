import { useState, useEffect } from "react";
import "./DigitalClock.css";

import pauseBtn from "./images/pause.png";
import playBtn from "./images/play.png";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }
  }, [isRunning]);

  const togglePause = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div className="outer-layout">
      <div className="inner-layout">
        <div className="time-unit">{time.getHours()}</div>
        <div className="time-unit">{time.getMinutes()}</div>
        <div className="time-unit">{time.getSeconds()}</div>
      </div>
      <div
        onClick={togglePause}
        className={`icon-wrapper ${isRunning ? "pause" : "play"}`}
      ></div>
    </div>
  );
}
