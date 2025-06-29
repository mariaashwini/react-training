# 📘 Day 3 – React `useEffect` Hook

## 🎯 Goal  
Understand and apply the `useEffect` hook to perform **side effects** in React components such as data fetching, timers, event listeners, and cleanups.

---

## 🧩 What I Built

### ✅ 1. `WeatherByCity.js`  
A weather application that fetches and displays real-time weather data based on user input using the OpenWeather API.

#### Key Concepts Demonstrated:
- Fetching data from API on mount

- Conditionally re-fetching on user input

- Using async function inside `useEffect`

- Handling loading, errors, and empty states

```jsx
useEffect(() => {
  fetchWeather();
}, []);
```
Here, fetchWeather() is called once when the component mounts to show initial data.


✅ 2. DigitalClock.js

A live digital clock with pause/play functionality.

#### Key Concepts Demonstrated:
- setInterval to update time every second

- Cleanup with clearInterval to avoid memory leaks

- Dependency array usage to control re-runs of useEffect

```jsx
useEffect(() => {
  if (isRunning) {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }
}, [isRunning]);
```

🧠 Key Learnings
- useEffect is used to perform side effects (data fetches, timers, subscriptions)

- It runs after the initial render and can re-run on dependency change

- You can return a cleanup function to clear side effects (like intervals, event listeners)

- [] dependency means run only on mount

- [state] dependencies mean run when that state changes

📁 Folder Structure

```text

Day03_useEffect/
├── WeatherByCity.js
├── DigitalClock.js
├── WeatherByCity.css
├── DigitalClock.css
├── images/
│   ├── search.png
│   ├── clear.png
│   ├── cloud.png
│   ├── drizzle.png
│   ├── rain.png
│   ├── snow.png
│   ├── wind.png
│   ├── humidity.png
│   ├── play.png
│   └── pause.png
├── Day03DemoSelector.js
├── README.md
```

🗂️ Git Commits

```bash
git add src/components/Day03_useEffect/
git commit -m "Day 3: useEffect demos – weather API & digital clock"
git push origin main
```
📌 Next Steps

✅ Composition

- Practice breaking larger components into smaller, reusable child components.

- Use children prop to allow flexible content injection in layout or card components.

- Try composing multiple components together to build UIs like a dashboard or profile card.

✅ Props Drilling

- Understand how to pass props through multiple component levels.

- Identify when props drilling becomes cumbersome.

- Learn how to avoid deep drilling using techniques like lifting state up or context API (coming in later days).

✅ Conditional Rendering

- Use logical AND (&&), ternary (? :), or switch statements to render different UI blocks.

🔗 Navigation

🟡 This is part of my [30-Day React Training Plan](../../../.github/profile-progress.md)

