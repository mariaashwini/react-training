import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../AuthApp.css";
import ThemeToggle from "../ThemeToggle";

export function Profile({ name }) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    logout();
    navigate("/");
  };
  if (!user) {
    return <p>Please login to view profile.</p>;
  }
  return (
    <div className="profile-card">
      <h2>Welcome, {user.name}!</h2>
      <ThemeToggle/>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
