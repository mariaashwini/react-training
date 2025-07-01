# 📘 Day 1 – CSS Box Model – Profile Card Component

## 🎯 Goal  
Practice real-time CSS concepts by building a **Profile Card UI** demonstrating the use of **Box Model**, **Flexbox**, **Transitions**, and **Shadows**.

---

## 🧩 What I Built

### ✅ 1. `Card.js`  
A reusable React component styled with CSS to represent a profile card with avatar, name, role, email, and status.

#### 💡 Key Concepts Demonstrated:
- Box model properties: `margin`, `padding`, `border-radius`
- Flexbox for centering card using `.cardLayout`
- Smooth hover transition with `transform: translateY(-5px)`
- `box-shadow` to lift the card visually
- Styling avatar images with `border-radius: 50%`
- Basic component structure using semantic HTML (`<h2>`, `<p>`, `<span>`)

```jsx
import "./Card.css";
export default function Card(props) {
  return (
    <div className="card-layout">
      <div className="card">
        <img
          src={props.avatar}
          className="avatar" aria-label="Profile Picture"
          alt={`Profile Picture of ${props.name}`}
        />
        <h2>{props.name}</h2>
        <p>{props.role}</p>
        <p>{props.email}</p>
        <span className="status">{props.status}</span>

      </div>
    </div>
  );
}
```

🎨 Styling – Card.css
```css
.card-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #e3f2fd;
}
.card {
  max-width: 250px;
  width: 100%;
  box-sizing: border-box;
  margin: 20px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease box-shadow 0.3s ease;
  background-color: white;
}
.card h2 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.25rem;
}
.card p {
  font-size: 0.9rem;
  color: #555;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
.card:hover .avatar {
  transform: scale(1.05);
}
.card .status::before{
    content: "● ";

}
.avatar {
  border-radius: 50%;
  margin-bottom: 10px;
  width: 80px;
  height: 80px;
  transition: transform 0.3s ease;
}
.status {
  font-weight: 500;
  background-color: #4caf50;
  padding: 5px 12px;
  border-radius: 12px;
  display: inline-block;
  font-size: 0.75rem;
  margin-top: 0.75rem;
  color: white;
  text-transform: uppercase;
}
```

🧠 Key Learnings
- Mastered box-shadow and border-radius to create elegant UIs

- Understood how to center content using flexbox

- Used hover effects with transition and transform

- Created a visually clean and responsive card layout

- Practiced separating structure (JSX) from styling (CSS)

📁 Folder Structure

```text

Day01_CSSBoxModel/
├── Card.js
├── Card.css
└── README.md
```

🗂️ Git Commit

```bash
git add src/components/Day01_CSSBoxModel/
git commit -m "Day 1 CSS: Profile card with box-shadow, transitions, and flex layout"
git push origin main
```
📌 Next Steps

✅ Build button sets with hover/focus styles
✅ Try responsive layout using media queries
✅ Practice layout challenges like pricing cards and feature grids
✅ Convert this card into a reusable component with props

🔗 Live Demo: Click here to view
🟡 Part of my 30-Day React + CSS Training Plan [Click here to view](https://mariaashwini.github.io/react-training/)





