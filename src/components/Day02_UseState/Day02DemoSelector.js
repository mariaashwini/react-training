import { useState } from "react";
import Counter from './Counter.js';
import NameForm from './NameForm.js';
import Tabs from './Tabs.js';

export default function Day02DemoSelector() {
  const [selectedDemo, setSelectedDemo] = useState("EventHandlers");

  const day02Demos = {
    EventHandlers: <Counter />,
    ControlledFormInputs: <NameForm />,
    TabSwitching: <Tabs />,
  };

  return (
    <div>
      <h2>Day 2: useState Demos</h2>
      <select onChange={(e) => setSelectedDemo(e.target.value)} value={selectedDemo}>
        {Object.keys(day02Demos).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      <div style={{ marginTop: "16px" }}>{day02Demos[selectedDemo]}</div>
    </div>
  );
}
