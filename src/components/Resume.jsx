import { useState } from "react";
import ResumeModal from "./ResumeModal.jsx";

function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleViewClick(e) {
    // Only intercept standard left clicks without modifier keys
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  }

  return (
    <>
      <section className="section resume-section" id="resume">
        <div className="section-label">07 - Resume</div>
        <div className="resume-box">
          <h2>Want to know more about my experience?</h2>
          <p>View my resume or download a PDF copy.</p>
          <div className="hero-buttons">
            <a
              className="button primary"
              href="/resume/Kritika_Roy_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={handleViewClick}
            >
              View Resume
            </a>
            <a
              className="button"
              href="/resume/Kritika_Roy_Resume.pdf"
              download="Kritika_Roy_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <ResumeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Resume;

