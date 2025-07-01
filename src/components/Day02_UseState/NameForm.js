import { useState } from "react";
import "./NameForm.css";

export default function NameForm() {
  const [user, setUser] = useState("");

  return (
    <div className="form-container">
      <h2>📝 Controlled Form Input</h2>

      <label htmlFor="name">Enter your name:</label>
      <input
        type="text"
        id="name"
        value={user}
        placeholder="Type your name..."
        onChange={(e) => setUser(e.target.value)}
      />

      <h3>Hello, {user || "stranger"} 👋</h3>
    </div>
  );
}
