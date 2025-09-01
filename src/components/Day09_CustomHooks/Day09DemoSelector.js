import { useState } from "react";
import DebouncedInput from './DebouncedInput.js';
import LocalStorage from "./LocalStorage.js";
import WindowSizeDisplay from "./WindowSizeDisplay.js";
import CounterWithPrevious from "./CounterWithPrevious.js";
import Dropdown from "./Dropdown.js";
import OnlineStatusIndicator from "./OnlineStatusIndicator.js";

// import Tabs from './Tabs.js';

export default function Day09DemoSelector() {
  const [selectedDemo, setSelectedDemo] = useState("useDebounce");

  const day09Demos = {
    useDebounce: <DebouncedInput />,
    useLocalStorage: <LocalStorage />,
    useWindowSize: <WindowSizeDisplay />,
    usePrevious: <CounterWithPrevious />,
    useClickOutside: (<div className="app-wrapper">
      <h2>🖱️ useClickOutside Hook Demo</h2>
      <Dropdown />
    </div>),
    useOnlineStatus: <OnlineStatusIndicator />
  };

  return (
    <div>
      <h2>Day 9: Custom Hooks Demos</h2>
      <select onChange={(e) => setSelectedDemo(e.target.value)} value={selectedDemo}>
        {Object.keys(day09Demos).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      <div style={{ marginTop: "16px" }}>{day09Demos[selectedDemo]}</div>
    </div>
  );
}
