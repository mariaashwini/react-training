import { useState,useLayoutEffect, useRef } from "react";

export default function ChatBox() {
  const boxRef = useRef();
  const [messages, setMessages] = useState([
    "Welcome to the chat!",
    "Type a message below...",
  ]);

  useLayoutEffect(() => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight; // scroll to bottom
  }, [messages]);

   function addMessage() {
    setMessages(prev => [...prev, `New message ${prev.length + 1}`]);
  }

  return (
    <div style={{ width: "300px", margin: "20px auto", textAlign: "center" }}>
      <h3>Chat Window</h3>
      <div
        ref={boxRef}
        style={{
          height: "150px",
          overflow: "auto",
          border: "1px solid black",
          padding: "5px",
          textAlign: "left",
        }}
      >
        {messages.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
      </div>
      <button onClick={addMessage} style={{ marginTop: "10px" }}>
        Add Message
      </button>
    </div>
  );
}
