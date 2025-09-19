#  📘 Day 17 – React useLayoutEffect for Auto-Scrolling Chat

## 🎯 Goal  

Learn how to use **useLayoutEffect** to:

✅ Run DOM updates **synchronously** after render but before the browser paints
✅ Automatically scroll to the **latest message** in a chat window
✅ Understand the difference between useEffect and useLayoutEffect in UI updates

---

## 🧩 What I Built

### ✅ ChatBox.js

- Displays a chat window with scrollable messages.

- Uses useLayoutEffect to scroll to the bottom whenever new messages are added.

- A button simulates adding new messages (New message X).

- The chat always stays scrolled to the most recent message.

---

🧠 **Key Learnings**  

- useLayoutEffect is useful when you need to measure or update DOM layout immediately after React renders but before the screen updates.

- Unlike useEffect, it blocks painting until the DOM change (scroll position here) is applied → prevents flicker.

- Great for UI cases like:

    - Auto-scrolling chat windows

    - Keeping focus in an input field

    - Synchronizing measurements with layout


📁 Folder Structure

```text
Day17_UseLayoutEffect/
├── ChatBox.js.js
└── README.md
```


🚀 How to Run

- Make sure React is installed:


```bash
npm install react
```

- Import the component into your app:

```bash
import ChatBox from "./ChatBox";
```

Render it inside your main component:


```bash
function App() {
  return <ChatBox />;
}
```