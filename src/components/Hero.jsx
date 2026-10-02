import {
  IconMail,
  IconPhone,
  IconLinkedIn,
  IconArrowUpRight,
  IconArrowRight,
  IconDownload,
  IconSparkle,
  IconTerminal,
  IconZap,
  IconBriefcase,
  IconGlobe,
  IconLaptop,
  IconBuilding
} from "./Icons.jsx";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="section-label">01 - Home</div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="availability-dot">Immediate Joiner • AI-Augmented UI Engineer • Open to Freelance</p>
          <h1>Kritika Roy</h1>
          <div className="hero-roles">
            <span className="hero-role-main">Senior UI Developer</span>
            <span className="role-ai-badge">
              <IconSparkle size={13} />
              <span>Claude Code & Codex Specialist</span>
            </span>
          </div>
          <p className="hero-intro">
            I create clean, responsive and user-focused digital experiences — supercharged with <strong>Claude Code</strong> and <strong>OpenAI Codex</strong> for rapid website generation, terminal-based workflows, and precision debugging.
          </p>

          <div className="availability-pills" aria-label="Availability and work preference">
            <span className="availability-pill pill-status" title="Immediate Joiner — Available immediately">
              <span className="status-indicator" aria-hidden="true">
                <span className="status-ping"></span>
                <span className="status-core"></span>
              </span>
              <span className="pill-text">Immediate Joiner</span>
            </span>

            <span className="availability-pill pill-ai pill-ai-accent" title="AI Engineering: Claude Code & OpenAI Codex">
              <IconSparkle size={13} className="pill-icon pill-icon-sparkle" />
              <span className="pill-text">Claude Code & Codex</span>
            </span>

            <span className="availability-pill pill-ai pill-ai-accent" title="AI Website Generation & Deep Debugging">
              <IconZap size={13} className="pill-icon pill-icon-zap" />
              <span className="pill-text">AI Web Generation & Debugging</span>
            </span>

            <span className="availability-pill pill-mode" title="Open to Freelance & Contract Projects">
              <IconBriefcase size={13} className="pill-icon" />
              <span className="pill-text">Freelance</span>
            </span>

            <span className="availability-pill pill-mode" title="Available for Remote Roles">
              <IconGlobe size={13} className="pill-icon" />
              <span className="pill-text">Remote</span>
            </span>

            <span className="availability-pill pill-mode" title="Available for Hybrid Roles">
              <IconLaptop size={13} className="pill-icon" />
              <span className="pill-text">Hybrid</span>
            </span>

            <span className="availability-pill pill-mode" title="Available for Work from Office">
              <IconBuilding size={13} className="pill-icon" />
              <span className="pill-text">Work from Office</span>
            </span>
          </div>

          <div className="hero-buttons">
            <a className="button primary" href="#work">
              <span>View My Work</span>
              <IconArrowRight size={15} style={{ marginLeft: "6px" }} />
            </a>
            <a className="button" href="/resume/Kritika_Roy_Resume.pdf" download>
              <IconDownload size={15} style={{ marginRight: "6px" }} />
              <span>Download Resume</span>
            </a>
            <a className="text-link" href="#contact">Let's Work Together</a>
          </div>

          <div className="hero-contact-bar" aria-label="Direct contact links">
            <a href="mailto:kritika.roy372@gmail.com" className="hero-contact-item" title="Send email to Kritika">
              <span className="hero-contact-icon">
                <IconMail size={14} />
              </span>
              <span>kritika.roy372@gmail.com</span>
            </a>
            <span className="hero-contact-sep">/</span>
            <a href="tel:+919804926294" className="hero-contact-item" title="Call Kritika">
              <span className="hero-contact-icon">
                <IconPhone size={14} />
              </span>
              <span>+91 9804926294</span>
            </a>
            <span className="hero-contact-sep">/</span>
            <a
              href="https://linkedin.com/in/kritika-roy-710b5b80"
              target="_blank"
              rel="noreferrer"
              className="hero-contact-item"
              title="View LinkedIn Profile"
            >
              <span className="hero-contact-icon">
                <IconLinkedIn size={14} />
              </span>
              <span>LinkedIn Profile</span>
              <IconArrowUpRight size={12} style={{ marginLeft: "2px", opacity: 0.8 }} />
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Availability and experience summary">
          <div>
            <strong>7+</strong>
            <span>Years Frontend & UI Development</span>
          </div>
          <div className="highlight-box hero-ai-card">
            <div className="hero-ai-badge">
              <IconSparkle size={12} />
              <span>AI-Driven Workflow</span>
            </div>
            <strong>Claude Code & Codex</strong>
            <span>Website Generation • CLI Workflows • Deep Debugging</span>
          </div>
          <div className="highlight-box">
            <strong>Immediate Joiner</strong>
            <span>Ready for full-time roles</span>
          </div>
          <div className="highlight-box">
            <strong>Freelance</strong>
            <span>Available for project work</span>
          </div>
          <div>
            <strong>Remote / Hybrid / Office</strong>
            <span>Kolkata, India</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;

