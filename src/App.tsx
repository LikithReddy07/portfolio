import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedBackground } from "animated-backgrounds";
import HomePage from "./views/HomePage";

function App() {
  return (
    <Router basename="/portfolio">
      <AnimatedBackground animationName="starryNight" />
      <HomePage />
    </Router>
  );
}

export default App;
