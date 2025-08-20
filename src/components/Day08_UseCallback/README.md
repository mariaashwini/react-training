# 📘 Day 8 – Debounced Search with useDebounce & useCallback

## 🎯 Goal  

Build a **Debounced Search component** in React that demonstrates:  

✅ Preventing unnecessary API calls while typing.  
✅ Using a **custom hook (`useDebounce`)** for reusability.  
✅ Filtering data efficiently with delayed queries.  
✅ Combining **useEffect + useCallback** for optimized performance.  

---

## 🧩 What I Built  

### ✅ 1. DebouncedSearch.js  

A search component that:  
- Uses `useDebounce` to delay API calls until typing stops.  
- Filters a static fruit list (mock API) based on the search term.  
- Updates results dynamically with minimal renders.  

🧠 **Key Concepts Demonstrated:**  
- Debouncing user input to reduce redundant API calls.  
- `useCallback` for memoizing the fetch function.  
- Controlled input handling with `useState`.  
- Side-effect management using `useEffect`.  

```jsx
useEffect(() => {
  if (debouncedSearchTerm) {
    fetchResults(debouncedSearchTerm);
  } else {
    setResult([]);
  }
}, [debouncedSearchTerm, fetchResults]);

const fetchResults = useCallback(async (query) => {
  console.log("API called for:", query);
  const fruits = ["apple","banana","kiwi","orange","mango","lemon","lime"];
  const filtered = fruits.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  setResult(filtered);
}, []);
```

### ✅ 2. useDebounce.js

A reusable custom hook that delays updating the value until after the specified delay.

```jsx
import { useState, useEffect } from "react";

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
```

### ✅ 3. Styling

Inline styles for simplicity:

- Centered container.
- Styled input box for better readability.
- List of results with emoji prefix.

---

🧠 **Key Learnings**

- Debouncing optimizes performance by batching user input before triggering actions.
- useDebounce makes debouncing logic reusable across components.
- useCallback ensures the search function isn’t recreated unnecessarily.
- Great pattern for search bars, autocomplete, and live filters.

📁 Folder Structure

Day08_UseCallback/
├── DebouncedSearch.js
├── useDebounce.js
└── README.md

🗂️ Git Commits

```bash
git add src/components/Day08_UseCallback/
git commit -m "Day 8: Debounced Search – custom hook with useCallback optimization"
git push origin main
```

🛠 Enhancements to be Made

## ✅ Improve UX

- Show a loading indicator while waiting for results.

- Highlight matching text inside results.

## ✅ Explore Real API Integration

- Replace static fruit list with a real API (e.g., Wikipedia search API).

## ✅ Compare Approaches

- With vs without debounce to measure performance difference.

📌 Next Steps

🎯 Learn useMemo Hook

- Understand memoized values and caching expensive computations.

- Build a demo showing performance gains with useMemo.