
import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("medicare-theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);

    localStorage.setItem(
      "medicare-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="med-navbar">
      <div className="nav-container">

        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <span>✚</span> MediCare
        </a>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#doctors" onClick={closeMenu}>Doctors</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        <div className="nav-actions">

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Light Mode" : "Dark Mode"}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
