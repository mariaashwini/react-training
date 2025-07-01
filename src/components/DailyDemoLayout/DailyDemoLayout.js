import "./DailyDemoLayout.css";

export default function DailyDemoLayout({
  reactDemoMap,
  cssDemoMap,
  activeReactDemo,
  setActiveReactDemo,
  activeCssDemo,
  setActiveCssDemo,
  getReactTitle,
  getCssTitle,
}) {
  return (
    <div>
      <div className="demo-selectors">
        <div>
          <label>React Demo:</label>
          <select
            onChange={(e) => setActiveReactDemo(e.target.value)}
            value={activeReactDemo}
          >
            {Object.keys(reactDemoMap).map((key) => (
              <option key={key} value={key}>
                {key}: {getReactTitle(key)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>CSS Demo:</label>
          <select
            onChange={(e) => setActiveCssDemo(e.target.value)}
            value={activeCssDemo}
          >
            {Object.keys(cssDemoMap).map((key) => (
              <option key={key} value={key}>
                {key}: {getCssTitle(key)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>React Output:</h2>
            <div style={{ marginTop: "30px" }}>
                 {reactDemoMap[activeReactDemo]}
            </div>
       

        <h2 style={{ marginTop: "40px" }}>CSS Output:</h2>
            <div style={{ marginTop: "30px" }}>
                 {cssDemoMap[activeCssDemo]}
            </div>
      </div>
    </div>
  );
}