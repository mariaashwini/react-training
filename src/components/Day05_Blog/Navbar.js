import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-blog">
      <div className="logo">My logo</div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Categories
        </NavLink>
      </div>
    </nav>
  );
}
