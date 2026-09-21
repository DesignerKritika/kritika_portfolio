import { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Services from "./components/Services.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // This state controls the dark/light theme for the full website.
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1
    });

    let frameId;

    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    function handleAnchorClick(event) {
      const link = event.target.closest('a[href^="#"]');

      if (!link) {
        return;
      }

      const targetId = link.getAttribute("href");

      if (targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        lenis.scrollTo(target, { offset: -70 });
      }
    }

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(
      [
        ".section-label",
        ".section-heading",
        ".hero-copy > *",
        ".hero-panel > div",
        ".split-layout > *",
        ".stat",
        ".skill-row",
        ".project-carousel",
        ".timeline-item",
        ".service-card",
        ".freelance-cta",
        ".resume-box",
        ".contact-grid > *"
      ].join(", ")
    );

    revealItems.forEach((item, index) => {
      item.classList.add("reveal-item");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
