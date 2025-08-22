# 📘 Day 8 – React useCallback with React.memo

## 🎯 Goal  

Optimize React app performance by:

✅ Using **React.memo** to prevent unnecessary re-renders of child components.

✅ Using **useCallback** to memoize callback functions passed as props.

---

## 🧩 What I Built  

### ✅1. Counter with Increment & Decrement

Created Counter.js component with:

- State: count managed by useState.

- Functions: increment and decrement wrapped with useCallback so they don’t recreate on each render.

### ✅ 2. Child Component with React.memo

Created Button.js child component:

- Receives onClick and children props.

- Wrapped with React.memo so it only re-renders when props actually change.

### ✅ 3. Demonstration of Optimization

Without useCallback, the Button components re-render every time count updates.
With useCallback, the memoized functions ensure only the updated button re-renders, improving performance.

---

🧠 **Key Learnings**

- React.memo is used to prevent unnecessary re-renders of child components.

- useCallback ensures the same function reference is passed, avoiding re-renders caused by new function objects.

- Together, they significantly improve rendering performance in larger apps.

- Learned difference between useMemo (memoize values) and useCallback (memoize functions).
---

📁 Folder Structure

```text
Day08_UseCallbackWithMemo/
├── Product.js
├── ProductList.js
└── README.md

```