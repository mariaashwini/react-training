import { useState } from "react";

import "./App.css";
import Welcome from "./components/Day01_Props/Welcome.js";
import Day02DemoSelector from "./components/Day02_UseState/Day02DemoSelector.js";
import Day03DemoSelector from "./components/Day03_UseEffect/Day03DemoSelector.js";
import { DashboardLayout, TeamList, TeamMember } from "./components/Day04_TeamDashboard";
import teamData from "./components/Day04_TeamDashboard/data/teamData";
import AppRouterDemo from "./components/Day05_ReactRouterDOM/AppRouterDemo.js";
import BlogApp from "./components/Day05_Blog/BlogApp.js";

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
    Day03:<Day03DemoSelector />,
    Day04: (
      <DashboardLayout
        header="Team Dashboard"
        footer="&copy; Copyrights Reserved"
      >
        <TeamList data={teamData} />
      </DashboardLayout>
    ),
    Day05: <AppRouterDemo />,
    Day05_Blog: <BlogApp />,
  };

  return (
    <div className="App" >
      <h1>React Daily Demos</h1>

      <label>Select Day:</label>
      <select
        onChange={(e) => setActiveDemo(e.target.value)}
        value={activeDemo}
      >
        {Object.keys(demoMap).map((dayKey) => (
          <option key={dayKey} value={dayKey}>
            {dayKey}: {getDayTitle(dayKey)}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "30px" }}>{demoMap[activeDemo]}</div>
    </div>
  );
}

// Optional: Define readable titles for each day
function getDayTitle(dayKey) {
  const titles = {
    Day01: "Props",
    Day02: "useState Demos",
    Day03: "useEffect Demos",
    Day04: "Composition and Props Drilling",
    Day05: "React Router DOM",
    Day05_Blog: "Blog Task - React Router"

    // add more days here
  };
  return titles[dayKey] || "Demo";
}
