import './Welcome.css'
export default function Welcome({name="Guest"}){
     return (
    <div className="welcome-box">
      <h3>Welcome, {name} 🙋‍♀️</h3>
      <p>Thanks for visiting! Hope you're having a great day.</p>
    </div>
  );
}