import { useEffect, useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { number: "01", label: "Home", href: "#home", id: "home" },
    { number: "02", label: "About", href: "#about", id: "about" },
    { number: "03", label: "Work", href: "#work", id: "work" },
    { number: "04", label: "Experience", href: "#experience", id: "experience" },
    { number: "05", label: "Contact", href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Top of page
      if (scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Bottom of page
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      const sectionIds = ["home", "about", "work", "experience", "contact"];
      const scrollPosition = scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLinkClick(id) {
    setActiveSection(id);
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => handleLinkClick("home")}>
          <span className="brand-mark">KR</span>
          <span>Kritika Roy</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </button>

        <div className={menuOpen ? "nav-actions open" : "nav-actions"}>
          <ul className="nav-links">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={isActive ? "active" : ""}
                    onClick={() => handleLinkClick(link.id)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{link.number}</span> {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            className="theme-toggle"
            type="button"
            aria-label="Toggle dark and light mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☼" : "☾"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
