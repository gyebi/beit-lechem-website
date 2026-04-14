import { useState } from "react";
import "../css/navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => scrollToSection("home")}
      >
        <img src="/icons/Beit Lechem Tech logo design.png" alt="Beit Lechem Tech" />
      </div>

      <button
        className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
        <li onClick={() => scrollToSection("home")}>
          Home
        </li>

        <li onClick={() => scrollToSection("process")}>
          Process
        </li>

        <li onClick={() => scrollToSection("portfolio")}>
          Portfolio
        </li>

        <li onClick={() => scrollToSection("about")}>
          About
        </li>

        <li onClick={() => scrollToSection("contact")}>
          Contact
        </li>
      </ul>
    </nav>
  );
}
