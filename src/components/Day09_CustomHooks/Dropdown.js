import { useState, useRef } from "react";
import useClickOutside from "./useClickoutside";
import "./Dropdown.css";

export default function Dropdown() {
  const dropdownRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  // Close when clicking outside
  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  // Toggle: only open if not open
  const handleToggle = () => {
   setIsOpen((prev) => !prev); 
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={handleToggle}>
        {isOpen ? "Close Menu 🔼" : "Open Menu 🔽"}
      </button>

      {isOpen && (
        <div className="dropdown" >
          <ul>
            <li>🌟 Profile</li>
            <li>⚙️ Settings</li>
            <li>🚪 Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}
