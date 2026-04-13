import "../css/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => {
          document.getElementById("home").scrollIntoView({ behavior: "smooth" });
        }}
      >
        Beit Lechem Tech
      </div>

      <ul className="nav-links">
        <li
          onClick={() =>
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Home
        </li>

        <li
          onClick={() =>
            document
              .getElementById("apps")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Apps
        </li>

        <li
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          About
        </li>

        <li
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact
        </li>
      </ul>

      <button className="nav-btn">Get Started</button>
    </nav>
  );
}
