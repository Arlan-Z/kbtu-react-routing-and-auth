import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <h1>Rick and Morty</h1>
        <h2>Wiki</h2>
      </div>

      <ul className="header-routing">
        <li>Home</li>
        <li>Login</li>
      </ul>
    </div>
  );
}