import React,{ lazy, Suspense } from "react";
import Home from "./Home";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";

const Charts = lazy(() => import("./Charts"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ margin: "10px" }}>
          <Link to="/">Home</Link> | <Link to="/charts">Charts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/charts"
            element={
              <Suspense fallback={<p>Loading Charts . . .</p>}>
                <Charts />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
