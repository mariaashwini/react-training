# 📘 Day 6 – React Context API (useContext)

## 🎯 Goal  
Implement global state management in React using **Context API** and `useContext` to handle **authentication** and **theme switching** across the entire app without prop drilling.

---

## 🧩 What I Built

### ✅ 1. Auth Context for Login & Logout functionality
Created `AuthContext.js` with:
- **State**: `user` – stores logged-in user data (persisted in `localStorage`).
- **login()** – saves user data to state + `localStorage`.
- **logout()** – clears user state + removes from `localStorage`.
- Initial state loads from `localStorage` for persistent sessions.

### ✅ 2. Theme Context for Light/Dark Mode  
Created `ThemeContext.js` with:
- **State**: `theme` – stores current theme (`light` or `dark`).
- **toggleTheme()** – switches between `light` and `dark`.
- **useEffect** updates `<body>` class to reflect active theme.
- Exported `useTheme` custom hook for easy access.

### ✅ 3. Provider Wrapping the App  
Wrapped `<App>` with both `<AuthProvider>` and `<ThemeProvider>` so all components can access `user` and `theme` data without passing props.

### ✅ 4. Easy Access with useContext Hooks  
Any component can:
- Use `useContext(AuthContext)` for authentication functions/data.
- Use `useTheme()` for theme state & toggling.

---

🧠 **Key Learnings**
- How to create and export a React Context.
- Wrapping components in a Provider to share global data.
- Using `useContext` to access values in deeply nested components.
- Persisting state with `localStorage` for authentication.
- Dynamically updating `document.body` for theme changes.

---

📁 Folder Structure
```text
Day06_UseContext/
├── context/
│   ├── AuthContext.js
│   └── ThemeContext.js
├── pages/
│   ├── Login.js
│   └── Profile.js
├── routes/
│   ├── PrivateRoute.js
├── AuthApp.css
├── ContextApp.js
├── Navbar.js
├── ThemeToggle.js
└── README.md
