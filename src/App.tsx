import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GrainOverlay } from "./components/GrainOverlay";
import { ParticleField } from "./components/ParticleField";
import { CursorGlow } from "./components/CursorGlow";

function App() {
  return (
    <>
      <ParticleField />
      <CursorGlow />
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
