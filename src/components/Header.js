import "../styles/header.css";
import main from "../assets/2.png";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <img src={main} className="image-logo" alt="logo" />
      </div>

      {/* Hidden checkbox toggle */}
      <input
        type="checkbox"
        id="menu-toggle"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />

      {/* Hamburger Icon */}
      <label htmlFor="menu-toggle" className="hamburger">
        ☰
      </label>

      {/* Navigation links */}
      <div className={`links ${menuOpen ? "show" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          HOME
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          ABOUT
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          PROJECTS
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Header;
