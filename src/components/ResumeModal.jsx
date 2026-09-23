import { useEffect } from "react";

function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="resume-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Kritika Roy Resume Viewer"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="resume-modal-header">
          <div className="resume-modal-info">
            <h3 className="resume-modal-title">Kritika Roy — Resume</h3>
            <span className="resume-modal-badge">Senior UI Developer</span>
            <span className="resume-modal-pages">4 Pages • PDF</span>
          </div>

          <div className="resume-modal-actions">
            <a
              href="/resume/Kritika_Roy_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-modal-btn"
              title="Open resume in a new tab"
            >
              <span>Open in New Tab</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="/resume/Kritika_Roy_Resume.pdf"
              download="Kritika_Roy_Resume.pdf"
              className="resume-modal-btn primary-btn"
              title="Download resume PDF"
            >
              <span>Download PDF</span>
              <span aria-hidden="true">↓</span>
            </a>
            <button
              type="button"
              className="resume-modal-close"
              onClick={onClose}
              aria-label="Close resume viewer"
              title="Close (Esc)"
            >
              ✕
            </button>
          </div>
        </header>

        <div className="resume-modal-body">
          <iframe
            src="/resume/Kritika_Roy_Resume.pdf#toolbar=1&navpanes=0&view=FitH"
            title="Kritika Roy Resume Document"
            className="resume-modal-iframe"
          />
        </div>

        <footer className="resume-modal-footer">
          <p>
            Having trouble viewing?{" "}
            <a
              href="/resume/Kritika_Roy_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open PDF in a new tab
            </a>{" "}
            or{" "}
            <a
              href="/resume/Kritika_Roy_Resume.pdf"
              download="Kritika_Roy_Resume.pdf"
            >
              Download PDF copy
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default ResumeModal;
