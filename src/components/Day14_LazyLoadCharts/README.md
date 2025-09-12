# 📘 Day 14 – Lazy Loading Charts

## 🎯 Goal  

Practice **client-side routing** and **code splitting** in React using:

✅ react-router-dom for navigation between components
✅ React.lazy and Suspense for lazy loading components
✅ Recharts for simple data visualization in a lazily-loaded route

---

## 🧩 What I Built  

### ✅ 1. AppRouter.js

- Sets up routing using react-router-dom:

    - / → Home component

    - /charts → Charts component (lazy-loaded)

- Uses Suspense to show a fallback loader while the Charts component is being fetched.

- Includes navigation using <Link> for a seamless SPA experience.

### ✅ 2. Charts.js (Lazy-Loaded)

- Loaded on-demand via React.lazy().

- Renders a responsive line chart using recharts.

- Displays sample user growth data over 5 months.

### ✅3. Home.js

- A simple home screen with a welcome message.

- Encourages user to explore the lazy-loaded charts.

---

🧠 **Key Learnings**  

- **React Router** enables seamless navigation in single-page apps.

- **Lazy loading** improves performance by loading code only when needed.

- **Suspense** provides a user-friendly loading experience during lazy loading.

- recharts is a quick way to integrate clean, interactive charts into React apps.

---

📁 Folder Structure  

```text
Day14_LazyLoadCharts/
├── AppRouter.js
├── Charts.js
├── Home.js
└── README.
```

🚀 How to Run

- Install dependencies:

```bash
npm install react-router-dom recharts

```

-  your React app:

```bash
npm start
```

- Open http://localhost:3000 in your browser.