import {
  IconSparkle,
  IconTerminal,
  IconBug,
  IconCpu,
  IconLayers,
  IconShieldCheck,
  IconLaptop,
  IconCheck,
  IconArrowUpRight
} from "./Icons.jsx";

function About() {
  const stats = [
    {
      value: "7+",
      label: "Years Experience",
      subtext: "Senior Frontend & UI Specialist",
      highlight: false
    },
    {
      value: "50+",
      label: "Web Projects",
      subtext: "SaaS, E-Commerce & Portals",
      highlight: false
    },
    {
      value: "Codex & Claude",
      label: "AI-Augmented Stack",
      subtext: "Sub-second Scaffolding & Fixes",
      highlight: true
    },
    {
      value: "100%",
      label: "Responsive & WCAG",
      subtext: "Cross-Browser & Accessible",
      highlight: false
    }
  ];

  const craftPillars = [
    {
      icon: <IconLayers size={18} />,
      title: "Pixel-Perfect Conversion",
      description: "1:1 translation from Figma and Photoshop mockups into clean, modular, semantic HTML5 and modern CSS3."
    },
    {
      icon: <IconLaptop size={18} />,
      title: "Responsive Systems",
      description: "Fluid multi-device layouts engineered with CSS Grid and Flexbox, with zero layout shift and smooth transitions."
    },
    {
      icon: <IconShieldCheck size={18} />,
      title: "WCAG Accessibility",
      description: "Accessible semantics, keyboard navigable components, ARIA landmarks, and strict adherence to web standards."
    },
    {
      icon: <IconTerminal size={18} />,
      title: "AI-Accelerated Velocity",
      description: "Agentic scaffolding with Claude Code CLI and rapid layout diagnostics with OpenAI Codex for rapid, reliable delivery."
    }
  ];

  return (
    <section className="section about" id="about">
      <div className="section-label">02 — About Me</div>
      
      <div className="about-main-grid">
        {/* Left Column: Core Narrative */}
        <div className="about-story-card">
          <div className="about-eyebrow">
            <span className="about-badge-dot"></span>
            <span>Philosophy & Engineering Discipline</span>
          </div>
          <h2 className="about-heading">
            Frontend craftsmanship elevated by intelligent AI developer tools.
          </h2>
          <div className="about-body">
            <p>
              I am a <strong>Senior UI Developer and Frontend Engineer</strong> based in Kolkata, India.
              Over the past 7+ years, my core discipline has centered on turning creative design visions
              into production-ready web interfaces with uncompromised fidelity, clean semantic HTML5,
              and maintainable CSS architecture.
            </p>
            <p>
              My sweet spot is at the intersection of design and code — transforming Figma and Photoshop
              files into responsive, accessible, cross-browser compliant applications that load fast and feel effortless.
            </p>
          </div>

          <div className="about-pills-row">
            <span className="about-spec-tag">Figma to HTML</span>
            <span className="about-spec-tag">Photoshop to Code</span>
            <span className="about-spec-tag">Pixel-Perfect UI</span>
            <span className="about-spec-tag">CSS Grid & Flexbox</span>
            <span className="about-spec-tag">WCAG 2.1 AA</span>
            <span className="about-spec-tag">Zero Layout Shift</span>
          </div>
        </div>

        {/* Right Column: AI Superpower Spotlight */}
        <div className="about-ai-spotlight-card">
          <div className="about-ai-card-glow" aria-hidden="true"></div>
          
          <div className="about-ai-card-header">
            <div className="about-ai-header-badge">
              <IconSparkle size={14} />
              <span>Specialized AI Workflow</span>
            </div>
            <span className="about-ai-live-tag">Active in Production</span>
          </div>

          <h3 className="about-ai-card-title">
            Claude Code CLI & OpenAI Codex
          </h3>

          <p className="about-ai-card-desc">
            Actively leveraging <strong>Claude Code</strong> (agentic CLI workflows) and <strong>OpenAI Codex</strong> to accelerate website creation and streamline debugging. From prompt-driven page scaffolding to diagnosing stubborn layout shifts, JavaScript state issues, and cross-browser bugs, this workflow enables rapid, high-accuracy frontend delivery.
          </p>

          {/* Interactive Simulated Terminal Box */}
          <div className="about-terminal-box">
            <div className="about-terminal-top">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">claude-code — zsh</span>
            </div>
            <div className="about-terminal-body">
              <div className="terminal-line">
                <span className="t-prompt">$</span>
                <span className="t-cmd">claude-code scaffold --component "ResponsiveHero"</span>
              </div>
              <div className="terminal-response">
                <span className="t-success">✔</span>
                <span>Semantic HTML5 + modular CSS generated in 0.8s</span>
              </div>
              <div className="terminal-line">
                <span className="t-prompt">$</span>
                <span className="t-cmd">codex inspect-layout --check-wcag</span>
              </div>
              <div className="terminal-response">
                <span className="t-success">✔</span>
                <span>0 layout shifts • 100% keyboard navigable</span>
              </div>
            </div>
          </div>

          <div className="about-ai-metrics-row">
            <div className="about-ai-metric">
              <strong>3x</strong>
              <span>Velocity Scaffolding</span>
            </div>
            <div className="about-ai-metric">
              <strong>0</strong>
              <span>Fidelity Compromise</span>
            </div>
            <div className="about-ai-metric">
              <strong>100%</strong>
              <span>Human Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Craft Pillars 4-Column Row */}
      <div className="about-pillars-grid" aria-label="Core Engineering Disciplines">
        {craftPillars.map((pillar) => (
          <div className="about-pillar-card" key={pillar.title}>
            <div className="about-pillar-icon">{pillar.icon}</div>
            <h4>{pillar.title}</h4>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* Upgraded Modern Bento Stats Grid */}
      <div className="about-stats-bento" aria-label="Experience statistics">
        {stats.map((stat) => (
          <article
            className={`about-bento-stat ${stat.highlight ? "about-bento-stat-highlight" : ""}`}
            key={stat.label}
          >
            <div className="about-stat-top">
              <strong>{stat.value}</strong>
              {stat.highlight && (
                <span className="stat-pulse-chip">
                  <IconSparkle size={12} />
                  <span>Featured</span>
                </span>
              )}
            </div>
            <span className="about-stat-label">{stat.label}</span>
            <span className="about-stat-subtext">{stat.subtext}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
