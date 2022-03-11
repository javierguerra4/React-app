import React from "react";
import logo from "./images/react_logo.png";
export default function Header() {
  return (
    <header className="header-items">
      <nav className="nav">
        <div className="logo-text">
          <img className="logo" alt="Logo" src={logo} />
          <h1 className="react-facts">ReactFacts</h1>
        </div>
        <h1 className="extraTitle">React Course - Project 1</h1>
      </nav>
    </header>
  );
}
