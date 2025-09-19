#  📘 Day 16 – React useReducer Todo App

## 🎯 Goal  

Build a Todo List application using the **useReducer** hook to:

✅ Manage complex state logic (add, toggle, delete tasks)
✅ Keep code structured and predictable with reducer functions
✅ Understand action dispatching and state immutability

---



## 🧩 What I Built

### ✅ TodoApp.js

- Implements a Todo List using useReducer for state management.

- Actions supported:

    - add ➝ Add a new todo item.

    - toggle ➝ Mark a todo as done/undone.

    - delete ➝ Remove a todo from the list.

- Uses useState for handling input text separately.

- Todos are displayed with strikethrough style when marked as done.

---

🧠 **Key Learnings**  

- useReducer is great for managing state with multiple operations.

- Reducer functions use actions (with type and optional data) to update state.

- Immutability is key ➝ state is always copied/updated, never directly mutated.

- Cleaner alternative to multiple useState calls when managing related state.

📁 Folder Structure

```text
Day16_UseReducer/
├── TodoApp.js
└── README.md
```


🚀 How to Run

- Make sure you have React installed:

```bash
npm install react
```

- Import the component into your app:

```bash
import TodoApp from "./todoapp";
```

- Render it inside your main component:

```bash
function App() {
  return <TodoApp />;
}
```