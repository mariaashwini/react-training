import { useState } from "react";

import "./App.css";
import Welcome from "./components/Day01_Props/Welcome.js";
import Day02DemoSelector from "./components/Day02_UseState/Day02DemoSelector.js";
import Day03DemoSelector from "./components/Day03_UseEffect/Day03DemoSelector.js";
import { DashboardLayout, TeamList } from "./components/Day04_TeamDashboard";
import teamData from "./components/Day04_TeamDashboard/data/teamData";
import BlogApp from "./components/Day05_Blog/BlogApp.js";
import ContextApp from "./components/Day06_UseContext/ContextApp.js";
import ContactFormRef from "./components/Day07_UseRef/ContactFormRef.js";

import Card from "./components/Day01_CSSBoxModel/Card";

import DailyDemoLayout from "./components/DailyDemoLayout/DailyDemoLayout";
import FlexboxNavbar from "./components/Day02_CSSFlexboxNavbar/FlexboxNavbar.js";
import DebouncedSearch from "./components/Day08_UseCallback/DebouncedSearch.js";
import AppRouter from "./components/Day14_LazyLoadCharts/AppRouter.js";
import ProductList from "./components/Day08_UseCallbackWithMemo/ProductList.js";
import Day09DemoSelector from "./components/Day09_CustomHooks/Day09DemoSelector.js";
import JobForm from "./components/Day11_Formik_JobForm/JobForm.js";
import RegistrationForm from "./components/Day12_Formik+Yup_RegisterForm/RegistrationForm.js";
import Counter from "./components/Day13_ReactRedux/Counter.js";
import SearchWithTransition from "./components/Day15_StartTransition/SearchWithTransition.js";
import TodoApp from "./components/Day16_UseReducer/TodoApp.js";
import ChatBox from "./components/Day17_UseLayoutEffect/ChatBox.js";
import SearchList from "./components/Day18_UseDeferredValue/SearchList.js";
import Form from "./components/Day19_UseId/Form.js";
import AppUseImperativeHandle from "./components/Day20_UseImperativeHandle/AppUseImperativeHandle.js";
import withAuth from "./components/Day21_HOC_ProtectedDashboard/withAuth.js";
import Dashboard from "./components/Day21_HOC_ProtectedDashboard/Dashboard.js";
import AppLifeCycleDemo from "./components/Day22_LifeCycleDemo/AppLifeCycleDemo.js";
import AppReactPortal from "./components/Day23_ReactPortals_Modal/AppReactPortal.js";
import Demo from "./components/Day24_SyntheticEvents/Demo.js";

const ProtectedDashboard = withAuth(Dashboard);

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
    Day07: <ContactFormRef />,
    Day08: <DebouncedSearch />,
    Day08_MemoWithCallback: <ProductList />,
    Day09: <Day09DemoSelector />,
    Day11: <JobForm />
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
      Day07: "useRef - Contact form with UseRef",
      Day08: "useCallback - Search Debounce with UseCallback",
      Day08_MemoWithCallback:
        "useCallback With Memo - Favorite button with Stable Handler",
      Day09: "Custom Hooks",
      Day11: "Formik Job Form"
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
