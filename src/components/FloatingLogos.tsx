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

const FloatingLogos = () => {
  return (
    <div className="floating-logos">
      <img src={bash} alt="bash" className="floating-logo" />
      <img src={java} alt="java" className="floating-logo" />
      <img src={spring} alt="spring" className="floating-logo" />
      <img src={python} alt="python" className="floating-logo" />
      <img src={nodejs} alt="nodejs" className="floating-logo" />
      <img src={aws} alt="aws" className="floating-logo" />

      <img src={docker} alt="docker" className="floating-logo" />

      <img src={typescript} alt="typescript" className="floating-logo" />
      <img src={git} alt="git" className="floating-logo" />
      <img src={githubActions} alt="githubActions" className="floating-logo" />
      <img src={postgreSQL} alt="postgreSQL" className="floating-logo" />
      <img src={react} alt="react" className="floating-logo" />
    </div>
  );
};

export default FloatingLogos;
