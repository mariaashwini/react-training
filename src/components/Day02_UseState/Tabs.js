import { useState } from "react";
import "./Tabs.css";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabContent = {
    Home: <HomeTab />,
    Profile: <ProfileTab />,
    Contact: <ContactTab />,
  };

  return (
    <div className="tabs-container">
      <h2>🗂️ Tab Switching</h2>
      <div className="tab-buttons">
        {Object.keys(tabContent).map((tab) => (
          <TabComponent
            key={tab}
            label={tab}
            onClick={setActiveTab}
            isActive={tab === activeTab}
          />
        ))}
      </div>
      <div className="tab-content">{tabContent[activeTab]}</div>
    </div>
  );
}

function TabComponent({ label, onClick, isActive }) {
  return (
    <button
      className={`tab-button ${isActive ? "active" : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

function HomeTab() {
  return (
    <div className="home-tab">
      <h1>🏠 Welcome Home</h1>
      <p>This is your dashboard.</p>
      <ul>
        <li>
          <a href="#">Recent activity</a>
        </li>
        <li>
          <a href="#">Quick links</a>
        </li>
      </ul>
    </div>
  );
}

function ProfileTab() {
  return (
    <div className="profile-tab">
      <h1>👤 Your Profile</h1>
      <p>Edit your details and settings.</p>
    </div>
  );
}

function ContactTab() {
  return (
    <div>
      <h1>📞 Contact Us</h1>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="field-line">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your name" required />
        </div>
        <div className="field-line">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4" placeholder="Your message" required />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
