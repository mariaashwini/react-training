
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import "./AuthApp.css";

export function Navbar(){
  const { user } = useContext(AuthContext);

    return (
       <nav className="navbar">
      <div>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Login
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
          Profile
        </NavLink>
      </div>
      {user && <span>👤 {user.name}</span>}
    </nav>
    )
}