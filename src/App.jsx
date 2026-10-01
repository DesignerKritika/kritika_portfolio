import { useEffect, useState } from "react";
import Lenis from "lenis";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import Workflow from "./components/Workflow.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    return () => lenis.destroy();
  }, []);

  return (
    <div className={`app${darkMode ? " dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Workflow />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
