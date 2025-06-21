import { useState } from "react";

import './App.css';
import Welcome from './components/Day01_Props/Welcome.js';
import Day02DemoSelector from './components/Day02_UseState/Day02DemoSelector.js';

export default function App() {
  const [activeDemo, setActiveDemo] = useState("Day01");

  const demoMap = {
    Day01: (
    <div>
      <h2>Day 1: Props</h2>
      <Welcome name="Maria" />
      <Welcome name="Ashwini" />
    </div>
  ),
    Day02: <Day02DemoSelector />,
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>React Daily Demos</h1>

      <label>Select Day:</label>
      <select onChange={(e) => setActiveDemo(e.target.value)} value={activeDemo}>
        {Object.keys(demoMap).map((dayKey) => (
          <option key={dayKey} value={dayKey}>
            {dayKey}: {getDayTitle(dayKey)}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "30px" }}>
        {demoMap[activeDemo]}
      </div>
    </div>
  );
}

// Optional: Define readable titles for each day
function getDayTitle(dayKey) {
  const titles = {
    Day01: "Props",
    Day02: "useState Demos",
    // add more days here
  };
  return titles[dayKey] || "Demo";
}