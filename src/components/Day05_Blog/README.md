# 📘 Day 5 – React Router DOM v6

## 🎯 Goal  
Build a multi‑page **BlogApp** in React using **React Router DOM v6** to enable client‑side navigation, dynamic URL parameters, nested views, and 404 handling.

---

## 🧩 What I Built

### ✅ 1. Client‑Side Routing  
Configured `<BrowserRouter>`, `<Routes>`, and `<Route>` in `BlogApp.js` to define all application paths and render the appropriate page component without full page reloads.

### ✅ 2. Dynamic Category Pages  
Created a `Categories` page that lists blog categories and links to `/categories/:category`. Used `useParams()` in `CategoryPosts.js` to read the `category` parameter and display the relevant posts.

### ✅ 3. Post Details View  
Implemented `PostDetails.js` to read the `postId` parameter from the URL (`/post/:postId`) and render post‑specific content dynamically.

### ✅ 4. 404 Not Found Handling  
Added a wildcard route (`path="*"`) in `BlogApp.js` rendering `NotFound.js` for any undefined URLs.

### ✅ 5. Shared Navbar  
Built a `Navbar.js` with `<NavLink>` links to Home and Categories, highlighting active links and enabling navigation across pages.

---

🧠 **Key Learnings**

- How to wrap an app in `<BrowserRouter>` and configure `<Routes>`/`<Route>`.  
- Extracting dynamic URL segments with `useParams()`.  
- Structuring nested and wildcard routes for scalable navigation.  
- Using `<NavLink>` for declarative navigation and active‑link styling.  

---

📁 Folder Structure

```text
 Day05_Blog/
├── BlogApp.js
├── Navbar.js
├── NotFound.js
├── pages/
│   ├── Home.js
│   ├── Categories.js
│   ├── CategoryPosts.js
│   └── PostDetails.js
└── README.md
```
🗂️ Git Commits

```bash
git add src/components/Day05_Blog/
git commit -m "Day 5: Implement React Router DOM v6 – routes, params, nested routes, 404"
git push origin main
```
🛠 Enhancements to Be Made

- Fetch categories and posts from a real API instead of hard‑coded objects.

- Style the navbar and page layouts with CSS Modules or styled‑components.

- Implement nested layouts (e.g., sidebar + content).

- Add transition animations on route changes.

📌 Next Steps

🎯 Learn Data Fetching & Side Effects

- Use useEffect for API calls in page components.

- Handle loading and error states gracefully.

🎯 Explore Global State Management

- Introduce Context API to share user/auth state across routes.

Compare with Redux for larger apps.

🔗 Navigation

🟡 This is part of my [30-Day React Training Plan](../../../.github/profile-progress.md)