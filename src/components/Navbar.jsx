import { useEffect, useState } from "react";
import { IconSun, IconMoon, IconClose, IconArrowRight } from "./Icons.jsx";

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IconClose size={20} />
          ) : (
            <span className="menu-toggle-bars" aria-hidden="true">
              <span></span>
              <span></span>
            </span>
          )}
        </button>

        {menuOpen && (
          <div
            className="nav-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

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
                    <span className="nav-link-num">{link.number}</span>
                    <span className="nav-link-text">{link.label}</span>
                    <IconArrowRight size={14} className="nav-link-arrow" />
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
            <span className="theme-toggle-icon">
              {darkMode ? <IconSun size={18} /> : <IconMoon size={18} />}
            </span>
            <span className="theme-toggle-label">
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
