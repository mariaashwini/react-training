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
