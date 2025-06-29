import { useState } from "react";
import WeatherByCity from './WeatherByCity.js';
import DigitalClock from './DigitalClock.js';

export default function Day03DemoSelector() {
  const [selectedDemo, setSelectedDemo] = useState("WeatherByCity");

  const day03Demos = {
    WeatherByCity: <WeatherByCity />,
    DigitalClock: <DigitalClock />,
  };

  return (
    <div>
      <h2>Day 3: useEffect Demos</h2>
      <select onChange={(e) => setSelectedDemo(e.target.value)} value={selectedDemo}>
        {Object.keys(day03Demos).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      <div style={{ marginTop: "16px" }}>{day03Demos[selectedDemo]}</div>
    </div>
  );
}
