import { useState } from "react";

export default function TeamMember({
  name,
  role,
  email,
  status,
  avatar,
  phone,
  location,
  joinedDate,
  project,
  skills,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <>
      <div className="profile-card" onClick={togglePopup}>
        <img src={avatar} />
        <h2>{name}</h2>
        <p>{role}</p>
        <p>{email}</p>
        <span class={`status ${status}`}>{status}</span>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={togglePopup}>
              ✖
            </button>

            <div className="popup-header">
              <img src={avatar} alt={name} className="popup-avatar" />
              <div>
                <h2>{name}</h2>
                <p className="popup-role">{role}</p>
              </div>
            </div>

            <div className="form-style-details">
              <div className="field-line">
                <strong>Name:</strong> <span>{name}</span>
              </div>
              <div className="field-line">
                <strong>Email:</strong> <span>{email}</span>
              </div>
              <div className="field-line">
                <strong>Phone:</strong> <span>{phone}</span>
              </div>
              <div className="field-line">
                <strong>Location:</strong> <span>{location}</span>
              </div>
              <div className="field-line">
                <strong>Joined:</strong> <span>{joinedDate}</span>
              </div>
              <div className="field-line">
                <strong>Project:</strong> <span>{project}</span>
              </div>
              <div className="field-line">
                <strong>Status:</strong>
                <span className={`status ${status}`}>{status}</span>
              </div>
              <div className="field-line">
                <strong>Skills:</strong>
                <span className="skill-list-inline">
                  {skills.map((skill, idx) => (
                    <span key={idx} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
