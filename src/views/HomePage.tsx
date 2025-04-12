import "./../css/HomePage.css";

const HomePage = () => {
  return (
    <div className="hero-section">
      <h1>
        Hello, I’m <span className="highlight">Likith</span>
      </h1>
      <h2>Full-Stack Developer | Cloud Architect | Tech Enthusiast</h2>
      <p>
        Building cloud-native apps and scalable systems.....
      </p>
      <div className="cta-buttons">
        {/* Placeholder buttons - functionality to be added */}
        <button>View Projects</button>
        <button>Download Resume</button>
        <button>Let’s Connect</button>
      </div>
    </div>
  );
};

export default HomePage;
