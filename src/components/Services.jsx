import { IconArrowRight, IconSparkle, IconFileText, IconCheck } from "./Icons.jsx";

function Services() {
  const services = [
    {
      title: "AI Website Generation",
      subtitle: "Powered by Claude Code & OpenAI Codex",
      text: "Rapid prompt-driven scaffolding and production-grade responsive website development from requirements, wireframes, or design specs.",
      highlight: true
    },
    {
      title: "AI-Assisted Debugging",
      subtitle: "Fast Diagnostics & Fixes",
      text: "Precision troubleshooting of tricky CSS layout shifts, responsive breakpoint bugs, cross-browser quirks, and JavaScript state errors.",
      highlight: true
    },
    {
      title: "Figma & Photoshop to HTML",
      subtitle: "Pixel-Perfect Conversion",
      text: "Flawless 1:1 translation of Figma designs and Photoshop mockups into clean, accessible, semantic HTML5 and modern CSS3/SCSS.",
      highlight: false
    },
    {
      title: "Frontend Support & Redesign",
      subtitle: "Modernization & Performance",
      text: "Modernize legacy codebases, improve mobile responsiveness, optimize Core Web Vitals, and maintain strict WCAG 2.1 AA accessibility.",
      highlight: false
    }
  ];

  return (
    <section className="section services" id="services">
      <div className="section-label">07 — What I Do</div>
      
      <div className="service-grid">
        {services.map((service, index) => (
          <article
            className={`service-card ${service.highlight ? "service-card-ai" : ""}`}
            key={service.title}
          >
            <div className="service-card-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              {service.highlight && (
                <span className="service-ai-badge">
                  <IconSparkle size={12} />
                  <span>AI Powered</span>
                </span>
              )}
            </div>
            <h3>{service.title}</h3>
            {service.subtitle && <p className="service-subtitle">{service.subtitle}</p>}
            <p className="service-body">{service.text}</p>
          </article>
        ))}
      </div>

      <div className="services-project-invite">
        <div className="invite-content">
          <div className="invite-badge">
            <IconSparkle size={13} />
            <span>Collaboration & Contracting</span>
          </div>
          <h3>Have a website or debugging project in mind?</h3>
          <p>
            Whether you need rapid design-to-HTML conversion, layout shift fixes, or complete frontend development,
            I am available for immediate start on freelance contracts and full-time senior roles.
          </p>
        </div>
        <div className="invite-actions">
          <a className="button primary" href="#contact">
            <span>Start a Project</span>
            <IconArrowRight size={15} style={{ marginLeft: "6px" }} />
          </a>
          <a className="button" href="#resume">
            <IconFileText size={15} style={{ marginRight: "6px" }} />
            <span>View Availability & Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
