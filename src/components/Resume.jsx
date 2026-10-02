import { useState } from "react";
import ResumeModal from "./ResumeModal.jsx";
import {
  IconEye,
  IconDownload,
  IconSparkle,
  IconArrowRight,
  IconCheck,
  IconBriefcase,
  IconGlobe,
  IconLaptop,
  IconBuilding,
  IconFileText,
  IconMail,
  IconPhone,
  IconArrowUpRight,
} from "./Icons.jsx";

function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleViewClick(e) {
    // Only intercept standard left clicks without modifier keys
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  }

  const availabilityHighlights = [
    {
      title: "Notice Period",
      value: "0 Days — Immediate",
      desc: "Ready to join instantly with no transition lag",
    },
    {
      title: "Primary Roles",
      value: "Senior UI Dev / Frontend",
      desc: "7+ years mastering pixel-perfect code & systems",
    },
    {
      title: "AI Workflows",
      value: "Claude Code & Codex",
      desc: "Accelerated scaffolding & deep bug diagnostics",
    },
    {
      title: "Work Locations",
      value: "Remote / Hybrid / Office",
      desc: "Kolkata on-site or worldwide remote alignment",
    },
  ];

  const resumeHighlights = [
    "7+ Years of Frontend & UI Engineering",
    "50+ Completed Responsive Web Projects",
    "Specialist in Claude Code CLI & OpenAI Codex",
    "Figma & Photoshop to Pixel-Perfect HTML5/CSS3",
    "Web Accessibility & Clean Code Architecture",
    "Zero Layout Shift & Cross-Browser Consistency",
  ];

  return (
    <>
      <section className="section availability-resume-section" id="resume">
        <div className="section-label">08 — Availability & Resume</div>

        <div className="avail-resume-header">
          <div className="avail-status-banner">
            <span className="avail-radar-dot">
              <span className="radar-ping"></span>
              <span className="radar-core"></span>
            </span>
            <span className="avail-status-text">
              <strong>IMMEDIATE JOINER</strong> • Available Immediately for
              Full-Time Roles & Freelance Contracts
            </span>
          </div>

          <h2 className="avail-resume-title">
            Ready to bring velocity, craft, and precision to your team.
          </h2>
          <p className="avail-resume-desc">
            Whether you need a dedicated Senior UI Developer to join your
            engineering team immediately, or an expert frontend engineer to
            build, debug, and modernize your digital product — I am ready to
            deliver from day one.
          </p>
        </div>

        {/* Dual Command Center Bento Grid */}
        <div className="avail-resume-grid">
          {/* Card 1: Immediate Joiner & Freelance Availability Hub */}
          <div className="avail-hub-card">
            <div className="hub-top-bar">
              <div className="hub-badge">
                <IconBriefcase size={15} />
                <span>Work Availability & Modes</span>
              </div>
              <span className="notice-chip">Notice: 0 Days</span>
            </div>

            <h3 className="hub-card-title">
              Immediate Joiner & Open for Freelance
            </h3>
            <p className="hub-card-intro">
              Available immediately for high-impact roles, contract sprints, and
              design-to-code conversions.
            </p>

            {/* Quick Stat Pill Grid */}
            <div className="hub-stats-grid">
              {availabilityHighlights.map((item) => (
                <div className="hub-stat-item" key={item.title}>
                  <span className="hub-stat-title">{item.title}</span>
                  <strong className="hub-stat-val">{item.value}</strong>
                  <span className="hub-stat-desc">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* Engagement Modes Badges */}
            <div className="hub-modes-wrap">
              <span className="hub-modes-label">Engagement Models:</span>
              <div className="hub-modes-pills">
                <span className="hub-pill">
                  <IconGlobe size={13} />
                  <span>Remote Worldwide</span>
                </span>
                <span className="hub-pill">
                  <IconLaptop size={13} />
                  <span>Hybrid</span>
                </span>
                <span className="hub-pill">
                  <IconBuilding size={13} />
                  <span>Kolkata Office</span>
                </span>
                <span className="hub-pill hub-pill-featured">
                  <IconSparkle size={13} />
                  <span>Freelance Projects</span>
                </span>
              </div>
            </div>

            {/* Hub Action Links */}
            <div className="hub-actions">
              <a className="button primary hub-cta-btn" href="#contact">
                <span>Start a Project / Discuss Role</span>
                <IconArrowRight size={15} style={{ marginLeft: "8px" }} />
              </a>
              <div className="hub-direct-links">
                <a
                  href="mailto:kritika.roy372@gmail.com"
                  className="hub-contact-link"
                >
                  <IconMail size={14} />
                  <span>kritika.roy372@gmail.com</span>
                </a>
                <a href="tel:+919804926294" className="hub-contact-link">
                  <IconPhone size={14} />
                  <span>+91 9804926294</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Executive Resume & Credentials Dossier */}
          <div className="resume-dossier-card">
            <div className="resume-card-glow" aria-hidden="true"></div>

            <div className="resume-card-top">
              <div className="resume-card-badge">
                <IconFileText size={15} />
                <span>Executive Credentials</span>
              </div>
              <span className="resume-meta-chip">ATS PDF • 1 Page • 2026</span>
            </div>

            <h3 className="resume-card-title">
              Kritika Roy — Senior UI Developer
            </h3>
            <p className="resume-card-role">
              Senior UI Developer &bull; Frontend Developer &bull; HTML
              Developer
            </p>

            {/* Highlights Checklist */}
            <div className="resume-highlights-list">
              {resumeHighlights.map((point) => (
                <div className="resume-highlight-item" key={point}>
                  <div className="highlight-check-icon">
                    <IconCheck size={12} />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Document Preview Snapshot Badge */}
            <div className="resume-preview-bar">
              <div className="preview-doc-icon">
                <IconFileText size={20} />
              </div>
              <div className="preview-doc-info">
                <strong>Kritika_Roy_Resume.pdf</strong>
                <span>
                  Official resume document ready for recruiter and hiring
                  manager review
                </span>
              </div>
            </div>

            {/* Resume Action Buttons */}
            <div className="resume-buttons-row">
              <a
                className="button primary resume-action-btn"
                href="/resume/Kritika_Roy_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={handleViewClick}
              >
                <IconEye size={16} style={{ marginRight: "8px" }} />
                <span>View Full Resume</span>
              </a>

              <a
                className="button resume-action-btn resume-download-btn"
                href="/resume/Kritika_Roy_Resume.pdf"
                download="Kritika_Roy_Resume.pdf"
              >
                <IconDownload size={16} style={{ marginRight: "8px" }} />
                <span>Download ATS PDF</span>
              </a>
            </div>

            <p className="resume-screen-hint">
              Click <strong>View Full Resume</strong> to open the interactive
              in-browser viewer, or download the PDF for offline review.
            </p>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Resume;
