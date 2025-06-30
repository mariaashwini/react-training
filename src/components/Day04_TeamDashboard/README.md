# 📘 Day 4 – Composition, Props Drilling & Conditional Rendering

## 🎯 Goal  
Build a functional **Team Dashboard** layout using React with focus on three major concepts:
- ✅ Component Composition  
- ✅ Props Drilling  
- ✅ Conditional Rendering

---

## 🧩 What I Built

### ✅ 1. `DashboardLayout.js`  
A reusable layout component that accepts `header`, `footer`, and `children` props and renders them in structured layout format.

#### Key Concepts Demonstrated:
- Composition using layout slots (header, footer, main content)
- Children prop to inject dynamic content

```jsx
export default function DashboardLayout({ header, footer, children }) {
  return (
    <>
      <header className="dashboard-header">{header}</header>
      <main className="content">{children}</main>
      <footer className="dashboard-footer">{footer}</footer>
    </>
  );
}
```

✅ 2. Team Member Dashboard with Popup Modal
- A team dashboard that lists members and allows interaction:

- Clicking on a member opens a popup/modal with full details

- A filter dropdown shows members by status

- A single button to set all members to Active

Key Concepts Demonstrated:

- Props drilling to send data from parent → child → grandchild

- Conditional rendering for:

- Displaying popup only on member click

- Filtering based on member status

- Lifting state up for centralized status update logic

```jsx

{showPopup && (
  <Popup member={selectedMember} onClose={handleClose} />
)}
```

🧠 Key Learnings

- Component Composition helps in building reusable layouts and containers

- Props Drilling allows data flow across deeply nested components

- Conditional Rendering is powerful for showing/hiding UI based on state

- Keeping logic and UI cleanly separated improves maintainability

📁 Folder Structure

```text
Day04_TeamDashboard/
├── DashboardLayout.js
├── DashboardLayout.css
├── TeamList.js
├── TeamMember.js
└── SetFilterStatus.js
├── data/
│   └── teamData.js
├── App.js
├── index.js
├── README.md
```

🗂️ Git Commits

```bash

git add src/components/Day04_TeamDashboard/
git commit -m "Day 4: Team Dashboard with Composition, Props Drilling, Conditional Rendering"
git push origin main
```
🛠 Enhancements to be Made

✅ Improve UX

- Add transitions to popup/modal

- Allow inline status update for each team member

✅ Explore State Management

- Replace props drilling with Context API or Redux (in future days)

✅ Add More Interactivity

- Search by name

- Add/delete team members dynamically

📌 Next Steps

🎯 Learn React Router DOM v6  

- Understand and implement `routes` to navigate between views  

- Use `params` to fetch dynamic values from the URL  

- Implement `nested routes` to handle layout-based routing  

- Handle 404 or invalid routes with wildcard path (`*`)  

🔗 Navigation

🟡 This is part of my [30-Day React Training Plan](../../../.github/profile-progress.md)


