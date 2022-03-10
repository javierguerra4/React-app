import React from "react";
import logo from "./images/react_logo.png";
export default function Header() {
  return (
    <header className="header-items">
      <nav className="nav">
        <img alt="Logo" src={logo} />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
