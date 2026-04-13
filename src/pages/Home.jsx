import "../css/home.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <section id="home" className="home-section">
        <h1>Welcome to Beit Lechem Tech</h1>
        <p>Empowering farmers, businesses, and Africa's future with smart solutions.</p>
      </section>

      <section id="apps" className="home-section">
        <h2>Apps</h2>
        <p>Tools built for real work, practical growth, and stronger communities.</p>
      </section>

      <section id="about" className="home-section">
        <h2>About</h2>
        <p>We build technology with purpose, clarity, and local impact.</p>
      </section>

      <section id="contact" className="home-section">
        <h2>Contact</h2>
        <p>Let's create something useful together.</p>
      </section>
    </div>
  );
}
