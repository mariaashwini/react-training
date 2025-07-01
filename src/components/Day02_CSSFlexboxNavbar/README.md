# 📘 Day 2  – CSS Flexbox – Responsive Navbar Component

## 🎯 Goal  
Practice real-time CSS layout using **Flexbox** by building a **responsive navbar UI** with focus and hover styles, and mobile support via media queries.

🧩 What I Built
✅ 1. FlexboxNavbar.js
A simple and accessible navigation bar built using Flexbox that adjusts its layout on smaller screens.

💡 Key Concepts Demonstrated:
- display: flex, justify-content, and align-items for horizontal layout

- Semantic structure using <nav>, <ul>, and <li> for accessibility

- :hover for visual feedback on links

- :focus and outline-offset for keyboard navigation and accessibility

- Responsive design with media queries (max-width: 600px)

- Touch-friendly mobile menu layout

```jsx

import "./FlexboxNavbar.css";

export default function FlexboxNavbar() {
  return (
    <div className="navbar">
      <div className="logo">My logo</div>
      <nav>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
```

🎨 Styling – FlexboxNavbar.css

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.menu {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

nav a {
  text-decoration: none;
  color: white;
  padding: 20px;
  font-size: large;
  transition: color 0.3s ease;
  margin-left: 20px;
}

nav a:focus {
  outline: 2px solid #ffcc00;
  outline-offset: 2px;
}

nav a:hover {
  color: #ffcc00;
}

@media (max-width: 600px) {
  .menu {
    flex-direction: column;
    gap: 10px;
  }

  .navbar {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  nav a:focus {
    outline: none;
    outline-offset: 0;
  }
}
```

🧠 Key Learnings

- Used flexbox to space and align navigation items

- Learned to build accessible components using :focus styles

- Applied mobile-first responsive design using @media

- Practiced semantic HTML structure inside a React component

- Understood the visual difference between outline and outline-offset

📁 Folder Structure

```text

Day02_FlexboxNavbar/
├── FlexboxNavbar.js
├── FlexboxNavbar.css
└── README.md

```

🗂️ Git Commit

```bash

git add src/components/Day02_FlexboxNavbar/
git commit -m "Day 2 CSS: Responsive navbar using flexbox with focus and hover styles"
git push origin main
```


📌 Next Steps

✅ Add a hamburger menu toggle with useState
✅ Make the navbar sticky on scroll
✅ Try horizontal and vertical navigation layouts
✅ Explore accessibility attributes like aria-label and role

🔗 Live Demo: Click here to view
🟡 Part of my 30-Day React + CSS Training Plan [Click here to view](https://mariaashwini.github.io/react-training/)

