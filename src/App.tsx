import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ShaderBackground } from "./components/ShaderBackground";

function App() {
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-[5vw]">
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
