import "./FlexboxNavbar.css";
export default function FlexboxNavbar() {
  return (
    <div className="navbar">
      <div className="logo">My logo</div>
      <nav>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
