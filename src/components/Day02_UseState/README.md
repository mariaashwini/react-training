# 📘 Day 2 – React `useState` Hook

## 🎯 Goal
Learn and apply the `useState` hook to create interactive, stateful UI components in React.

---

## 🧩 What I Built

### ✅ 1. `Counter.js`
A simple counter that increments and decrements a number.

```jsx
const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
const decrement = () => count > 0 && setCount(count - 1);
```
Rendered as:

```jsx
<h1>{count}</h1>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
```

✅ 2. Tabs.js
A UI tab component that switches visible content based on the active tab.

```jsx
const [activeTab, setActiveTab] = useState("Home");
```
Example tab logic:

```jsx
{["Home", "Profile", "Contact"].map(tab => (
  <button key={tab} onClick={() => setActiveTab(tab)}>{tab}</button>
))}
```
Content Rendering:

```jsx
{activeTab === "Home" && <h1>This is the Home page</h1>}
```

🧠 Key Learnings
- useState() creates reactive state variables

- UI updates when state changes

- You can use multiple state hooks in the same component

- You can conditionally render based on state (e.g., tabs, toggles)

📁 Folder Structure

```text

Day02_UseState/
├── Counter.js
├── Tabs.js
├── NameForm.js
├── Day02DemoSelector.js
├── README.md
```

🗂️ Git Commits

```bash
git add src/components/Day02_useState/
git commit -m "Day 2: useState demos – counter and tabs"
git push origin main
```

📌 Next Steps

- Learn useEffect for side effects (Day 3)

- Use effects to fetch data, listen to events, and clean up

🔗 Navigation

🟡 This is part of my [30-Day React Training Plan](../../../../.github/profile-progress.md)



