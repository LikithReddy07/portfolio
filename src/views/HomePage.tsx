import { useEffect, useState } from "react";
import "./../css/HomePage.css";
import myself from "./../assets/myself.png";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const description =
    "I nearly have 3 years of experience creating reliable and scalable web applications using Java (Spring Boot), React, and AWS. Skilled in designing microservices, developing APIs, managing CI/CD pipelines, and enhancing system reliability. Proven track record of optimizing deployment processes and system performance to solve real - world challenges with strong focus on team collaboration, delivering impactful results.";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="content-section">
        {isMobile ? (
          <div className="content-section-mobile">
            <h1>
              Hello, I’m <span className="highlight">Likith</span>
            </h1>
            <h2>
              <div>Full-Stack Developer</div>
              <div>Cloud Architect</div>
              <div>Tech Enthusiast</div>
            </h2>
            <p>{description}</p>
          </div>
        ) : (
          <div className="content-section-desktop">
            <h1>
              Hello, I’m <span className="highlight">Likith</span>
            </h1>
            <h2>Full-Stack Developer | Cloud Architect | Tech Enthusiast</h2>
            <br></br>
            <p>{description}</p>
          </div>
        )}
        {/* <div className="cta-buttons">
          <button>View Projects</button>
          <button>Download Resume</button>
          <button>Let’s Connect</button>
        </div> */}
      </div>
      <div className="image-section">
        <img src={myself} alt="Likith" />
      </div>
    </div>
  );
};

export default HomePage;
