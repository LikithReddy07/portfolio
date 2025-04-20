import "./../css/FloatingLogos.css";
import bash from "../assets/vectors/bash.svg";
import aws from "../assets/vectors/aws.svg";
import docker from "../assets/vectors/docker.svg";
import git from "../assets/vectors/git.svg";
import githubActions from "../assets/vectors/githubActions.svg";
import java from "../assets/vectors/java.svg";
import nodejs from "../assets/vectors/nodejs.svg";
import postgreSQL from "../assets/vectors/postgreSQL.svg";
import python from "../assets/vectors/python.svg";
import react from "../assets/vectors/react.svg";
import spring from "../assets/vectors/spring.svg";
import typescript from "../assets/vectors/typescript.svg";
import powerPlatform from "../assets/vectors/powerPlatform.svg";

const FloatingLogos = () => {
  return (
    <div>
      <div className="floating-logos">
        <img src={bash} alt="bash" className="floating-logo-1" />
        <img src={java} alt="java" className="floating-logo-1" />
        <img src={spring} alt="spring" className="floating-logo-1" />
        <img src={python} alt="python" className="floating-logo-1" />
        <img src={nodejs} alt="nodejs" className="floating-logo-1" />
        <img src={typescript} alt="typescript" className="floating-logo-1" />
        <img src={react} alt="react" className="floating-logo-1" />
      </div>
      <br></br>
      <br></br>
      <div className="floating-logos">
        <img src={aws} alt="aws" className="floating-logo-2" />
        <img src={docker} alt="docker" className="floating-logo-2" />
        <img src={git} alt="git" className="floating-logo-2" />
        <img
          src={githubActions}
          alt="githubActions"
          className="floating-logo-2"
        />
        <img src={postgreSQL} alt="postgreSQL" className="floating-logo-2" />
        <img
          src={powerPlatform}
          alt="powerPlatform"
          className="floating-logo-2"
        />
      </div>
    </div>
  );
};

export default FloatingLogos;
