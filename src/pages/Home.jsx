import "../css/home.css";
import Navbar from "../components/Navbar";

const portfolioProjects = [
  {
    title: "BirdFeathers",
    type: "AgriTech / Poultry Management",
    description:
      "Tracks egg production, monitors flock health, and gives farmers useful flock analytics.",
    tech: "Kotlin, Firebase, Room local DB",
    image: "/chickens.png",
    alt: "poultry farmer",
    buttonText: "View App ->",
    href: "https://play.google.com/apps/test/com.birdfeathers.birdfeathers/1",
  },
  {
    title: "Handiman",
    type: "Service Platform / On-demand",
    description:
      "Connects users to nearby mechanics with real-time service requests and location-based matching.",
    tech: "Firebase, Google Maps, Web, PWA",
    image:
      "https://images.unsplash.com/photo-1681351622977-a8c4bccae50b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "car service project",
    buttonText: "View App ->",
    href: "https://handiman-web.web.app",
  },
  {
    title: "Ajuma AI",
    type: "AI SaaS",
    description:
      "Helps users apply for jobs automatically, generate profiles from resumes, and fetch job listings.",
    tech: "React Vite, Express, OpenAI API, Firebase Auth",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=455&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "AI job application project",
    buttonText: "View Code ->",
    href: "https://github.com/gyebi/ajuma",
  },
  {
    title: "Adinkra Memory Game",
    type: "Game / Cultural App",
    description:
      "A memory game using African symbols, with a leaderboard system and weekly competitions.",
    tech: "React, JavaScript, Firebase Hosting, Firestore, PWA, Android TWA",
    image:
      "/adinkra-game.jpg",
    alt: "cultural game project",
    buttonText: "View App ->",
    href: "https://adinkra-memory-game.web.app",
  },
  {
    title: "Poultry Calculator",
    type: "AgriTool / Web App",
    description:
      "Calculates feed requirements, estimates profit and loss, and helps farmers plan production.",
    tech: "Vanilla JS, Firebase Hosting, PWA",
    image: "/chicks.jpg",
    alt: "farmer using poultry planning tool",
    buttonText: "View App ->",
    href: "https://birdfeathers-ai.web.app",
  },
  {
    title: "Chicken Disease Detection",
    type: "AI / Computer Vision",
    description:
      "In-progress AI tool for detecting poultry disease from images using computer vision models.",
    tech: "Roboflow, AI models, image detection workflow",
    image:
      "https://plus.unsplash.com/premium_photo-1688678097473-2ce11d23e30c?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "poultry disease detection project",
    buttonText: "View App ->",
  },
  {
    title: "Plant / Medicinal App",
    type: "Agriculture / Knowledge App",
    description:
      "Searches plants and displays plant information through an external plant knowledge API.",
    tech: "React, JavaScript, Trefle API",
    image: "https://images.unsplash.com/photo-1739338333695-3f96926654f2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "plant knowledge app",
    buttonText: "View Code ->",
    href: "https://github.com/gyebi/plant-app",
  },
  {
    title: "Husk & Hive",
    type: "Food / E-commerce Direction",
    description:
      "Honey and natural food brand direction focused on marketing, storytelling, and a hosted website.",
    tech: "Website, branding, Firebase Hosting",
    image: "/husk-honey.jpeg",
    alt: "natural food brand project",
    buttonText: "View Page ->",
    href: "https://huskandhoney-websi.web.app",
  },
  {
    title: "AkuafoAdamfo",
    type: "AgriTech / Weather Intelligence",
    description:
      "Concept for weather-based farming decisions, crop recommendations, and rainfall analysis.",
    tech: "Weather intelligence, crop recommendations, rainfall analysis",
    image: "/weather-app2.webp",
    alt: "weather intelligence farming project",
    buttonText: "View Code ->",
    href: "https://github.com/gyebi/akuafoadamfo",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <section id="home" className="home-section">
        <h1>Welcome to Beit Lechem Tech</h1>
        <p>Empowering farmers, businesses, and Africa's future with smart solutions.</p>
        <button
          className="home-cta"
          onClick={() =>
            document
              .getElementById("portfolio")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Get Started
        </button>
      </section>

      <section id="process" className="home-section process">
        <div className="process-row">
          <div className="process-ini">
            <h4>Work Process</h4>
            <p className="para-1">
              We are a full-stack development and UI/UX design team dedicated to building smart digital solutions for real-world problems.
              From agriculture to business tools, we create responsive, intuitive, and visually engaging products that are both functional and impactful.
            </p>
            <p className="para-2">
              What sets us apart is our strategic use of AI tools to accelerate and enhance
              every stage of the development process, from rapid prototyping and code
              generation to content optimization and UI testing.
            </p>
          </div>

          <div className="process-ini">
            <div className="actual-grid">
              <div className="process-card card-left">
                <div className="icon-box">01</div>
                <h4>1. Research</h4>
                <p>
                  We begin by understanding your goals, audience, and challenges through
                  thorough data gathering and analysis.
                </p>
              </div>

              <div className="process-card card-right">
                <div className="icon-box">02</div>
                <h4>2. Analyze</h4>
                <p>
                  Insights from research are examined to identify patterns, define strategies,
                  and outline the most effective project direction.
                </p>
              </div>

              <div className="process-card card-left">
                <div className="icon-box">03</div>
                <h4>3. Design</h4>
                <p>
                  Creative concepts are transformed into practical designs that balance user
                  experience, functionality, and visual appeal.
                </p>
              </div>

              <div className="process-card card-right">
                <div className="icon-box">04</div>
                <h4>4. Launch</h4>
                <p>
                  Your project is tested, refined, and deployed with precision to ensure a
                  smooth, impactful, and successful launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="home-section portfolio">
        <div className="port-text">
          <h4>Portfolio</h4>
          <p>
            This is where our work across web design, Android app development,
            AI tools, and agritech comes together into functional and creative projects.
          </p>
        </div>

        <div className="cards-contain">
          {portfolioProjects.map((project) => (
            <div className="card-porto-1" key={project.title}>
              <img src={project.image} alt={project.alt} />
              <div className="text-box-1">
                <span className="project-type">{project.type}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p className="project-tech">{project.tech}</p>
              </div>
              {project.href ? (
                <a className="btn" href={project.href} target="_blank" rel="noreferrer">
                  {project.buttonText}
                </a>
              ) : (
                <button className="btn">{project.buttonText}</button>
              )}
            </div>
          ))}
        </div>
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
