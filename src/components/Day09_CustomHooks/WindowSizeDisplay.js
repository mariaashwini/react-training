import useWindowSize from "./useWindowSize";

export default function WindowSizeDisplay() {
  const { width, height } = useWindowSize();
  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h2>🪟 Window Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}
