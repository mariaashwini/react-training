import { useState } from "react";
import useDebounce from "./useDebounce";

export default function DebouncedInput() {
  const [typedText, setTypedText] = useState("");
  const debouncedText = useDebounce(typedText, 500);
  return (
    <div style={styles.container}>
      <h2>Debounced Input with Custom Hook</h2>
      <input
        type="text"
        style={styles.input}
        placeholder="Enter text"
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
      />
      <p>{debouncedText}</p>
    </div>
  );
}
const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    width: "300px",
    fontSize: "16px",
    marginBottom: "20px",
  },
};
