import "../css/home.css";

export default function Landing({ onExplore }) {
  return (
    <div className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <img
          className="landing-logo"
          src="/icons/Beit Lechem Tech logo design.png"
          alt="Beit Lechem Tech"
        />

        <h1>
          Building smart solutions for farmers, businesses,
          and Africa's future.
        </h1>

        <button className="hero-btn" onClick={onExplore}>
          Explore Our Solutions
        </button>
      </div>
    </div>
  );
}
