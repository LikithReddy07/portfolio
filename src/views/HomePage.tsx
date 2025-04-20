import { useEffect, useState } from "react";
import "./../css/HomePage.css";
import myself from "./../assets/myself.png";
import FloatingLogos from "../components/FloatingLogos";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const description =
    "I’m a software developer with nearly 3 years of experience building reliable and scalable web applications using Java (Spring Boot), React, and AWS. I specialize in designing microservices, developing robust APIs, and managing CI/CD pipelines to streamline deployment. With a strong focus on system performance and reliability, I’ve consistently delivered impactful solutions to real-world challenges. I thrive in collaborative environments and passionate about driving results through clean, efficient, and maintainable code.";

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
              I’m <span className="highlight">Likith!</span>
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
              Hello, I’m <span className="highlight">Likith!</span>
            </h1>
            <h2>Full-Stack Developer | Cloud Architect | Tech Enthusiast</h2>
            {/* <br></br> */}
            <p>{description}</p>
            <FloatingLogos />
          </div>
        )}
      </div>
      <div
        className={isMobile ? "image-section-mobile" : "image-section-desktop"}
      >
        <img src={myself} alt="Likith" />
      </div>
    </div>
  );
};

export default HomePage;
