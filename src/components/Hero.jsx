function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="section-label">01 - Home</div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="availability-dot">Immediate Joiner & Available for Freelance Work</p>
          <h1>Kritika Roy</h1>
          <div className="hero-roles">
            <span>Senior UI Developer</span>
            {/* <span>UI Developer</span>
            <span>Frontend Developer</span> */}
          </div>
          <p className="hero-intro">
            I create clean, responsive and user-focused digital experiences using modern frontend technologies.
          </p>

          <div className="availability-pills" aria-label="Availability and work preference">
            <span>Immediate Joiner</span>
            <span>Freelance</span>
            <span>Remote</span>
            <span>Hybrid</span>
            <span>Work from Office</span>
          </div>

          <div className="hero-buttons">
            <a className="button primary" href="#work">View My Work</a>
            <a className="button" href="/resume/Kritika_Roy_Resume.pdf" download>Download Resume</a>
            <a className="text-link" href="#contact">Let's Work Together</a>
          </div>

          <div className="hero-contact-bar" aria-label="Direct contact links">
            <a href="mailto:kritika.roy372@gmail.com" className="hero-contact-item" title="Send email to Kritika">
              <span className="hero-contact-icon">✉</span>
              <span>kritika.roy372@gmail.com</span>
            </a>
            <span className="hero-contact-sep">/</span>
            <a href="tel:+919804926294" className="hero-contact-item" title="Call Kritika">
              <span className="hero-contact-icon">✆</span>
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
              <span className="hero-contact-icon">in</span>
              <span>LinkedIn Profile ↗</span>
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Availability and experience summary">
          <div>
            <strong>7+</strong>
            <span>Years Frontend & UI Development</span>
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
