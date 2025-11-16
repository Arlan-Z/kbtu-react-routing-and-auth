import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <h1>Rick and Morty</h1>
        <h2>Wiki</h2>
      </div>

      <ul className="header-routing">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/items">Wiki</Link>
        </li>
      </ul>
    </div>
  );
}