import { useEffect, useState } from "react";
import "./../css/Components.css"

interface TypingEffectProps {
  text: string;
  typingSpeed: number;
}

function TypingEffect(props: TypingEffectProps) {
  const {text, typingSpeed} = props;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index += 1;

      if (index === text.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div id="typingEffectElement" className="alef-regular" style={{ fontSize: "50px" }}>
      {displayedText}
    </div>
  );
}

export default TypingEffect;
