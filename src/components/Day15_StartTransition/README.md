#  📘 Day 15 – React useTransition for Smooth Search

## 🎯 Goal  

Explore concurrent rendering in React using the **useTransition** hook to:

✅ Keep UI responsive during expensive state updates
✅ Prioritize user input over rendering results
✅ Simulate a search experience over a large dataset
---


## 🧩 What I 

### ✅ SearchWithTransition.js

- Implements a search box over a large list (10,000 items).

- Uses useTransition() to defer expensive updates (filter() on a big list).

- Shows a Loading... indicator while the transition is in progress.

- Keeps the input field responsive and snappy, even during heavy rendering.

---

🧠 **Key Learnings**  

- useTransition() is useful for non-urgent state updates (like rendering filtered results).

- Improves UX by preventing input lag during large computations.

- React 18+ introduces this feature as part of its concurrent rendering capabilities.

- Helps separate high-priority updates (like typing) from low-priority ones (like rendering results).

📁 Folder Structure

```text
Day15_StartTransition/
├── SearchWithTransition.js
└── README.md
```


🚀 How to Run

- Make sure you're using React 18+ (required for useTransition):

```bash
npm install react@latest react-dom@latest
```

- Import the component into your app:

```bash
import SearchWithTransition from "./SearchWithTransition";
```

- Render it inside your main component:

```bash
function App() {
  return <SearchWithTransition />;
}
```