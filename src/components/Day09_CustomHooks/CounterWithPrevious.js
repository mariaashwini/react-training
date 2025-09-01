import { useState } from "react";
import usePrevious from "./usePrevious";

export default function CounterWithPrevious() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div style={{ fontFamily: "Arial", padding: "1rem" }}>
      <h2>🔁 Counter</h2>
      <p>Current: {count}</p>
      <p>Previous: {prevCount ?? "N/A"}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
