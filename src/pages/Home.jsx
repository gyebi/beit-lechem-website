import "../css/home.css";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

const whatsappMessage = encodeURIComponent(
  "Hello Beit Lechem Tech, I would like to discuss a project."
);

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
        <div className="home-hero">
          <div className="home-copy">
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
          </div>

          <div className="home-image-stack" aria-label="Agriculture and technology work">
            <img
              className="home-stack-image image-one"
              src="/layers-feeding.jpeg"
              alt="poultry birds feeding"
              tabIndex="0"
            />
            <img
              className="home-stack-image image-two"
              src="/lady-farmer.jpg"
              alt="farmer holding produce"
              tabIndex="0"
            />
            <img
              className="home-stack-image image-three"
              src="/men-drying-cocoa.jpg"
              alt="farmers drying cocoa"
              tabIndex="0"
            />
          </div>
        </div>
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
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-copy">
            <p>
              Beit Lechem Tech is a technology company focused on developing
              scalable digital solutions across agriculture, services, and
              business operations.
            </p>
            <p>
              We specialize in full-stack development and UI/UX design, delivering
              products that are both efficient and user-centered.
            </p>
            <p>
              Our goal is to bridge the gap between technology and real-world
              application.
            </p>
          </div>
          <img
            className="about-image"
            src="/tractor-farm.webp"
            alt="tractor working on a farm"
          />
        </div>
      </section>

      <section id="contact" className="home-section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-intro">
            <span className="contact-eyebrow">Start a project</span>
            <h3>Let's create something useful together.</h3>
            <p>
              Tell us what you are building, where you need support, and how we
              can reach you.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="site-footer">
        <p>&copy; Copyright 2026, Beit Lechem Tech</p>
      </footer>

      <a
        className="whatsapp-float"
        href={`https://wa.me/13323234305?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Beit Lechem Tech on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M16.04 4C9.41 4 4 9.38 4 16c0 2.12.56 4.18 1.62 6L4.02 28l6.15-1.57A12 12 0 0 0 16.04 28C22.67 28 28 22.62 28 16S22.67 4 16.04 4Zm0 21.8c-1.87 0-3.68-.53-5.25-1.54l-.38-.24-3.65.93.97-3.56-.25-.39A9.75 9.75 0 0 1 6.23 16c0-5.4 4.4-9.8 9.81-9.8 5.39 0 9.76 4.4 9.76 9.8s-4.37 9.8-9.76 9.8Zm5.37-7.35c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.95 1.15-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.47-1.76-1.64-2.06-.18-.29-.02-.45.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.89 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.74-.71 1.99-1.4.25-.68.25-1.27.17-1.39-.07-.12-.27-.2-.57-.34Z" />
        </svg>
      </a>
    </div>
  );
}
