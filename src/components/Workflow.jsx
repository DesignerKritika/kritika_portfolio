import { useState } from "react";
import {
  IconSparkle,
  IconTerminal,
  IconBug,
  IconCpu,
  IconLayers,
  IconShieldCheck,
  IconCode,
  IconCheck,
  IconZap,
  IconLaptop
} from "./Icons.jsx";

function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Design Audit & Token Extraction",
      badge: "Ingestion",
      icon: <IconLayers size={18} />,
      tools: ["Figma", "Photoshop", "Design Tokens"],
      summary:
        "Deconstructing design mockups into semantic color tokens, fluid typography scales, responsive breakpoints, and reusable component hierarchies.",
      codeSnippet: `// 01. Design Tokens Extracted from Figma
:root {
  --font-display: 'Inter', sans-serif;
  --fluid-h1: clamp(2.5rem, 5vw + 1rem, 4.5rem);
  --grid-gap: clamp(16px, 2.5vw, 32px);
  --color-accent: #0891b2;
}`
    },
    {
      number: "02",
      title: "Claude Code CLI Scaffolding",
      badge: "AI Scaffolding",
      icon: <IconTerminal size={18} />,
      tools: ["Claude Code (CLI)", "Agentic Prompts", "Modular Architecture"],
      summary:
        "Utilizing Claude Code in the terminal to rapidly scaffold semantic HTML5 boilerplate, accessible ARIA landmarks, and modular CSS architecture in seconds.",
      codeSnippet: `$ claude-code scaffold \\
    --spec "figma-components-v2" \\
    --architecture "semantic-html5" \\
    --css "modern-grid-flexbox"
✔ Generated 14 modular components in 1.1s`
    },
    {
      number: "03",
      title: "Pixel-Perfect UI Craftsmanship",
      badge: "Engineering",
      icon: <IconCode size={18} />,
      tools: ["HTML5", "CSS3 / SCSS", "Vanilla JS (ES6+)"],
      summary:
        "Hand-crafting layouts with CSS Grid and Flexbox, implementing micro-interactions, smooth scrolling, and ensuring strict 1:1 fidelity with design files.",
      codeSnippet: `/* 03. Hand-crafted CSS Architecture */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--grid-gap);
  align-items: stretch;
}`
    },
    {
      number: "04",
      title: "OpenAI Codex Precision Debugging",
      badge: "AI Diagnostics",
      icon: <IconBug size={18} />,
      tools: ["OpenAI Codex", "Layout Inspector", "Edge-Case QA"],
      summary:
        "Deploying OpenAI Codex to rapidly diagnose stubborn layout shifts, responsive edge-cases, specificity conflicts, and cross-browser quirks across viewports.",
      codeSnippet: `$ codex inspect-layout \\
    --viewport "320px-1920px" \\
    --check-overflows \\
    --diagnose-shifts
✔ 0 horizontal overflows detected
✔ Cumulative Layout Shift (CLS): 0.00`
    },
    {
      number: "05",
      title: "WCAG AA Standards & Production Polish",
      badge: "Compliance",
      icon: <IconShieldCheck size={18} />,
      tools: ["WCAG 2.1 AA", "Lighthouse", "Cross-Browser Testing"],
      summary:
        "Conducting keyboard accessibility audits, screen reader compliance, cross-browser validation, and Lighthouse 95+ performance optimization.",
      codeSnippet: `$ npm run audit:accessibility
✔ WCAG 2.1 AA Compliance: 100% Passed
✔ Screen reader landmarks verified
✔ Lighthouse Performance: 98 / 100`
    }
  ];

  return (
    <section className="section workflow-section" id="workflow">
      <div className="section-label">03 — Core Workflow</div>

      <div className="workflow-intro-grid">
        <div>
          <div className="workflow-eyebrow">
            <IconSparkle size={14} />
            <span>AI-Augmented Engineering Pipeline</span>
          </div>
          <h2 className="workflow-heading">
            From design tokens to production code: An intelligent, high-velocity workflow.
          </h2>
        </div>
        <div className="workflow-intro-copy">
          <p>
            Combining <strong>7+ years of frontend discipline</strong> with <strong>Claude Code (CLI)</strong> and{" "}
            <strong>OpenAI Codex</strong>. This dual-engine approach allows me to scaffold pages at lightning speed,
            diagnose elusive layout bugs immediately, and hand-craft pixel-perfect user experiences with zero compromises.
          </p>
        </div>
      </div>

      {/* Interactive Step Navigator */}
      <div className="workflow-stepper" role="tablist" aria-label="Workflow Stages">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          return (
            <button
              key={step.number}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`workflow-step-btn ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="step-btn-top">
                <span className="step-num">{step.number}</span>
                <span className="step-btn-badge">{step.badge}</span>
              </div>
              <span className="step-btn-title">{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Display */}
      <div className="workflow-stage-detail" aria-live="polite">
        <div className="workflow-detail-info">
          <div className="workflow-detail-badge">
            {steps[activeStep].icon}
            <span>Phase {steps[activeStep].number} • {steps[activeStep].badge}</span>
          </div>

          <h3 className="workflow-detail-title">{steps[activeStep].title}</h3>
          <p className="workflow-detail-desc">{steps[activeStep].summary}</p>

          <div className="workflow-tools-list">
            <span className="tools-label">Key Stack:</span>
            {steps[activeStep].tools.map((tool) => (
              <span className="workflow-tool-pill" key={tool}>
                <IconCheck size={12} />
                <span>{tool}</span>
              </span>
            ))}
          </div>

          <div className="workflow-stepper-controls">
            <button
              type="button"
              className="stepper-nav-btn"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              aria-label="Previous step"
            >
              ← Previous Phase
            </button>
            <span className="stepper-indicator">
              {activeStep + 1} of {steps.length}
            </span>
            <button
              type="button"
              className="stepper-nav-btn next-btn"
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              aria-label="Next step"
            >
              Next Phase →
            </button>
          </div>
        </div>

        {/* Live Terminal / Code Inspector Box */}
        <div className="workflow-terminal-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="terminal-title">kritika-dev — zsh — Phase {steps[activeStep].number}</span>
            <span className="terminal-live-badge">
              <span className="live-pulse-dot"></span>
              <span>CLI Pipeline</span>
            </span>
          </div>

          <div className="terminal-content">
            <pre>
              <code>{steps[activeStep].codeSnippet}</code>
            </pre>
          </div>

          <div className="terminal-footer">
            <span className="terminal-status-text">
              Status: <strong>Engineered for 100% Fidelity & Rapid Velocity</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 4 Bottom Advantage Metric Cards */}
      <div className="workflow-advantages-grid" aria-label="Workflow Advantages">
        <div className="workflow-adv-card">
          <div className="adv-icon">
            <IconZap size={18} />
          </div>
          <h4>3x Faster Scaffolding</h4>
          <p>Prompt-engineered terminal pipelines eliminate repetitive boilerplate without sacrificing standards.</p>
        </div>

        <div className="workflow-adv-card">
          <div className="adv-icon">
            <IconBug size={18} />
          </div>
          <h4>Deep Layout Diagnostics</h4>
          <p>Instant detection of stubborn flexbox misalignments, specificity clashes, and viewport bugs via Codex.</p>
        </div>

        <div className="workflow-adv-card">
          <div className="adv-icon">
            <IconLayers size={18} />
          </div>
          <h4>1:1 Design Token Match</h4>
          <p>Every spacing unit, font token, and color nuance from Figma is meticulously matched in clean CSS.</p>
        </div>

        <div className="workflow-adv-card">
          <div className="adv-icon">
            <IconShieldCheck size={18} />
          </div>
          <h4>WCAG & Zero Shifts</h4>
          <p>Every deliverable is tested for accessibility, screen reader landmarks, and sub-second load times.</p>
        </div>
      </div>
    </section>
  );
}

export default Workflow;
