# 📘 Day 13 –React Redux Toolkit Demo

## 🎯 Goal  

Build and practice state management in React using **Redux Toolkit** to:

✅ Manage global state for counter and user profile.
✅ Share state between components without props drilling.
✅ Learn reducers, actions, and the Redux store setup.
---

## 🧩 What I Built  

### ✅ 1. counterSlice.js

- Manages a simple counter state with actions:

- increment ➕ increase counter by 1.

- decrement ➖ decrease counter by 1.

- reset 🔄 reset counter back to 0.

### ✅ 2. profileSlice.js

- Manages profile information with actions:

- setName → updates the name.

- setAge → updates the age.

- resetProfile → resets profile to default (Maria, 25).

### ✅ 3. Counter.js (UI Component)

- Displays and updates both counter and profile states.

- Uses useSelector to read values and useDispatch to trigger actions.

- Includes an input field to update the profile name dynamically.

### ✅ 4. store.js

- Combines multiple slices (counter and profile) into a single store.

- Configured with configureStore from Redux Toolkit.

---

🧠 **Key Learnings**  

- Redux Toolkit simplifies Redux by reducing boilerplate.

- createSlice makes reducers + actions in one step.

- useSelector and useDispatch connect React components to the store.

- Multiple slices (counter, profile) can coexist in the same store for scalable apps.

- Helps avoid props drilling by using global state.

---

📁 Folder Structure  

```text
Day13_ReactRedux/
├── counterSlice.js
├── profileSlice.js
├── store.js
├── Counter.js
└── README.md