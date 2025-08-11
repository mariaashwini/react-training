import { useState } from "react";

import "./App.css";
import Welcome from "./components/Day01_Props/Welcome.js";
import Day02DemoSelector from "./components/Day02_UseState/Day02DemoSelector.js";
import Day03DemoSelector from "./components/Day03_UseEffect/Day03DemoSelector.js";
import { DashboardLayout, TeamList } from "./components/Day04_TeamDashboard";
import teamData from "./components/Day04_TeamDashboard/data/teamData";
import BlogApp from "./components/Day05_Blog/BlogApp.js";
import ContextApp from "./components/Day06_UseContext/ContextApp.js";

import Card from "./components/Day01_CSSBoxModel/Card";

import DailyDemoLayout from "./components/DailyDemoLayout/DailyDemoLayout";
import FlexboxNavbar from "./components/Day02_CSSFlexboxNavbar/FlexboxNavbar.js";

export default function App() {
  const [activeReactDemo, setActiveReactDemo] = useState("Day01");
  const [activeCssDemo, setActiveCssDemo] = useState("Day01_CSS");

  const reactDemoMap = {
    Day01: (
      <div>
        <h2>Day 1: Props</h2>
        <Welcome />
        <Welcome name="Maria" />
      </div>
    ),
    Day02: <Day02DemoSelector />,
    Day03: <Day03DemoSelector />,
    Day04: (
      <DashboardLayout
        header="Team Dashboard"
        footer="&copy; Copyrights Reserved"
      >
        <TeamList data={teamData} />
      </DashboardLayout>
    ),
    Day05_Blog: <BlogApp />,
    Day06: <ContextApp />,

  };

  const cssDemoMap = {
    Day01_CSS: (
      <div>
        <h2>Day 1: CSS - Card Component</h2>
        <Card
          name="Maria Ashwini"
          role="Frontend Developer"
          email="mariaashwini06@gmail.com"
          avatar="https://i.pravatar.cc/150?img=5"
          status="active"
        />
      </div>
    ),
    Day02_CSS: (
      <div>
        <h2>Day 2: CSS - Flexbox Navigation Bar Component</h2>
        <FlexboxNavbar />
      </div>
    ),
  };

  const getReactTitle = (key) =>
    ({
      Day01: "Props",
      Day02: "useState Demos",
      Day03: "useEffect Demos",
      Day04: "Composition and Props Drilling",
      Day05_Blog: "Blog Task - React Router",
      Day06: "useContext - React Authentication",

    }[key] || "Demo");

  const getCssTitle = (key) =>
    ({
      Day01_CSS: "CSS – Card Box Model",
      Day02_CSS: "CSS – Flexbox Navbar",
    }[key] || "CSS Demo");

  return (
    <div className="App">
      <h1 style={{ marginbottom: "20px" }}>30-Day React & CSS Training</h1>
      <DailyDemoLayout
        reactDemoMap={reactDemoMap}
        cssDemoMap={cssDemoMap}
        activeReactDemo={activeReactDemo}
        setActiveReactDemo={setActiveReactDemo}
        activeCssDemo={activeCssDemo}
        setActiveCssDemo={setActiveCssDemo}
        getReactTitle={getReactTitle}
        getCssTitle={getCssTitle}
      />
    </div>
  );
}