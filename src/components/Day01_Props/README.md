# 📘 Day 1 – React Props & Component Reuse

## 🎯 Goal
Understand how to build a reusable React component and pass data using **props**.

---

## 🧩 What I Built

✅ A simple `Welcome` component that takes a `name` prop and renders a greeting.

```jsx
export default function Welcome({ name }) {
  return <h2>Welcome, {name}!</h2>;
}
```

🔁 Reusability
I used the same component multiple times with different data:

```jsx

<Welcome name="Maria" />
<Welcome name="Ashwini" />
```

🧠 Key Learnings

- React components are functions that return UI.

- Props allow us to pass custom values into components.

- We can reuse components with different props instead of duplicating code.

📁 Folder Structure



Day01_Props/
├── Welcome.js
├── README.md


🗂️ Git Commit

```bash
git add src/components/Day01_Props/Welcome.js
git commit -m "Day 1: Created Welcome component using props"
```

📌 Next Steps

- Learn how to handle user input using state 

- Build an interactive counter in Day 2

🔗 Navigation

🟡 This is part of my 30-Day React Training Plan
