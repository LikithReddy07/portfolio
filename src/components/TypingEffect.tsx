import "./../css/Components.css";
import { useEffect, useState } from "react";

interface TypingEffectProps {
  text: string;
  typingSpeed: number;
}

function TypingEffect(props: TypingEffectProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const texts = ["Hi, I'm Likith!", "A Full Stack Developer"];

  const story =
    "Ever since I was a kid, computers and coding have fascinated me. This passion grew over the years, leading me to become a full-stack engineer with skills in frontend and backend technologies, cloud services, and building efficient CI/CD pipelines.";
  useEffect(() => {
    if (lineIndex < texts.length) {
      if (currentIndex < texts[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + texts[lineIndex][currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 60); // Adjust the speed as needed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText("");
          setCurrentIndex(0);
          setLineIndex((prev) => prev + 1);
        }, 500); // Delay before starting the next line
        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, lineIndex, texts]);
  return (
    <div id="typingEffectElement" className="baumans-regular">
      {texts.slice(0, lineIndex).map((text, index) => (
        <div key={index} style={{ fontSize: `${60 + index * 10}px` }}>
          {text}
        </div>
      ))}
      {lineIndex < texts.length ? (
        <span style={{ fontSize: `${60 + lineIndex * 10}px` }}>
          {currentText}
        </span>
      ) : (
        <div style={{ fontSize: "30px" }}>{story}</div>
      )}
    </div>
  );
}

export default TypingEffect;
