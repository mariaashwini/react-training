# 📘 Day 9 – React Custom Hooks Collection  

## 🎯 Goal  

Build and practice commonly used **custom hooks** in React to:  

✅ Reuse logic across multiple components.  
✅ Simplify state management and event handling.  
✅ Improve code readability and maintainability.  

---

## 🧩 What I Built  

### ✅ 1. `useClickOutside`  
- Detects clicks outside a referenced element.  
- Useful for closing dropdowns, modals, or tooltips automatically.  

### ✅ 2. `useDebounce`  
- Returns a debounced version of a value after a delay.  
- Prevents unnecessary API calls or renders during fast user input.  

### ✅ 3. `useLocalStorage`  
- Stores and retrieves state in **localStorage**.  
- Persists user data even after page refresh (e.g., username, theme).  

### ✅ 4. `useOnlineStatus`  
- Tracks whether the browser is online or offline.  
- Helpful for offline-first apps and user notifications.  

### ✅ 5. `usePrevious`  
- Stores and returns the **previous value** of a state/prop.  
- Useful for detecting changes between renders.  

### ✅ 6. `useWindowSize`  
- Tracks the window’s width and height.  
- Enables responsive UI behavior.  

---

🧠 **Key Learnings**  

- Custom hooks encapsulate reusable logic, keeping components clean.  
- Hooks like `useClickOutside` and `useDebounce` improve **UX** by handling user interaction smoothly.  
- Persistent state with `useLocalStorage` makes apps more **user-friendly**.  
- `useOnlineStatus` shows how React hooks can listen to browser APIs and events.  
- `usePrevious` and `useWindowSize` highlight how hooks can retain or track values between renders.  

---

📁 **Folder Structure**  

```text
Day09_CustomHooks/
├── useClickOutside.js
├── Dropdown.js
├── useDebounce.js
├── DebouncedInput.js
├── useLocalStorage.js
├── LocalStorage.js
├── useOnlineStatus.js
├── OnlineStatusIndicator.js
├── usePrevious.js
├── CounterWithPrevious.js
├── useWindowSize.js
├── WindowSizeDisplay.js
└── README.md
