function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="section-label">07 - Resume</div>
      <div className="resume-box">
        <h2>Want to know more about my experience?</h2>
        <p>View my resume or download a PDF copy.</p>
        <div className="hero-buttons">
          <a className="button primary" href="/resume/Kritika_Roy_Resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
          <a className="button" href="/resume/Kritika_Roy_Resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
