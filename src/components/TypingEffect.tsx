import { useEffect, useState } from "react";

function TypingEffect() {
  const text = "I'm Likith Reddy, A Full Stack Developer!";
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100; // Speed in milliseconds

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
    <div style={{ fontSize: "24px", fontFamily: "monospace" }}>
      {displayedText}
    </div>
  );
}

export default TypingEffect;
