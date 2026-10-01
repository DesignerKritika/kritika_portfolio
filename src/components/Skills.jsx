import { useState } from "react";
import skills, { aiWorkflowData } from "../data/skills.js";
import {
  IconSparkle,
  IconTerminal,
  IconBug,
  IconCpu,
  IconCode,
  IconZap,
  IconLayers,
  IconShieldCheck,
  IconCheck,
  IconCommand
} from "./Icons.jsx";

function getCapabilityIcon(iconName, size = 16) {
  switch (iconName) {
    case "terminal":
      return <IconTerminal size={size} />;
    case "cpu":
      return <IconCpu size={size} />;
    case "bug":
      return <IconBug size={size} />;
    case "code":
      return <IconCode size={size} />;
    case "zap":
      return <IconZap size={size} />;
    case "layers":
      return <IconLayers size={size} />;
    case "shield":
      return <IconShieldCheck size={size} />;
    case "sparkle":
    default:
      return <IconSparkle size={size} />;
  }
}

function Skills() {
  const [activeEngine, setActiveEngine] = useState("claude-code");

  return (
    <section className="section bt-none" id="expertise">
      <div className="section-label">04 — Technical Expertise</div>
      <div className="section-heading">
        <h2>Clean interfaces, resilient systems, and an advanced AI-augmented toolset.</h2>
      </div>

      {/* Hero Showcase: AI-Powered Development & Debugging */}
      <div className="ai-workflow-showcase skill-row-highlighted">
        <div className="ai-showcase-glow-bg" aria-hidden="true" />

        {/* Top Bar / Header */}
        <div className="ai-showcase-header">
          <div className="ai-showcase-title-block">
            <div className="ai-showcase-badge-row">
              <span className="ai-showcase-badge">
                <IconSparkle size={13} className="ai-badge-sparkle" />
                <span>{aiWorkflowData.badge}</span>
              </span>
              <span className="ai-live-indicator">
                <span className="ai-live-dot" />
                <span>Active Production Stack</span>
              </span>
            </div>
            <h3 className="ai-showcase-title">{aiWorkflowData.title}</h3>
            <p className="ai-showcase-desc">{aiWorkflowData.description}</p>
          </div>

          <div className="ai-showcase-stats">
            {aiWorkflowData.stats.map((stat, idx) => (
              <div key={idx} className="ai-stat-pill">
                <IconCheck size={13} className="ai-stat-icon" />
                <div>
                  <span className="ai-stat-label">{stat.label}: </span>
                  <strong className="ai-stat-value">{stat.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary AI Engines Showcase */}
        <div className="ai-engines-section">
          <div className="ai-section-subtitle">
            <IconCommand size={14} />
            <span>Primary Autonomous & AI Engines</span>
          </div>

          <div className="ai-engines-grid">
            {aiWorkflowData.primaryEngines.map((engine) => {
              const isSelected = activeEngine === engine.id;
              return (
                <article
                  key={engine.id}
                  className={`ai-engine-card ${isSelected ? "is-active-engine" : ""}`}
                  onClick={() => setActiveEngine(engine.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActiveEngine(engine.id)}
                >
                  <div className="ai-engine-card-top">
                    <div className="ai-engine-icon-wrap">
                      {engine.icon === "terminal" ? (
                        <IconTerminal size={20} />
                      ) : (
                        <IconCpu size={20} />
                      )}
                    </div>
                    <div className="ai-engine-header-meta">
                      <div className="ai-engine-name-row">
                        <h4>{engine.name}</h4>
                        <span className="ai-engine-badge">{engine.badge}</span>
                      </div>
                      <code className="ai-engine-cmd">{engine.command}</code>
                    </div>
                  </div>

                  <p className="ai-engine-desc">{engine.description}</p>

                  <div className="ai-engine-tags">
                    {engine.tags.map((tag) => (
                      <span key={tag} className="ai-engine-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Specialized AI Capabilities Grid */}
        <div className="ai-capabilities-section">
          <div className="ai-section-subtitle">
            <IconSparkle size={14} />
            <span>Core AI-Assisted Frontend Capabilities</span>
          </div>

          <div className="ai-capabilities-grid">
            {aiWorkflowData.capabilities.map((cap) => (
              <div
                key={cap.name}
                className={`ai-cap-card ${cap.highlight ? "ai-cap-card-highlighted" : ""}`}
              >
                <div className="ai-cap-card-top">
                  <span className="ai-cap-icon" aria-hidden="true">
                    {getCapabilityIcon(cap.icon, 15)}
                  </span>
                  <span className="ai-cap-tag">{cap.tag}</span>
                </div>
                <h5 className="ai-cap-name">{cap.name}</h5>
                <p className="ai-cap-desc">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive CLI Terminal Preview */}
        <div className="ai-terminal-preview">
          <div className="ai-terminal-header">
            <div className="ai-terminal-dots" aria-hidden="true">
              <span className="dot-red" />
              <span className="dot-yellow" />
              <span className="dot-green" />
            </div>
            <span className="ai-terminal-title">claude-code — agentic-frontend-workflow</span>
          </div>
          <div className="ai-terminal-body">
            <div className="ai-terminal-line">
              <span className="ai-terminal-prompt">kritika@frontend-cli:~$</span>
              <span className="ai-terminal-command">
                claude "scaffold accessible, responsive component with zero layout shift"
              </span>
            </div>
            <div className="ai-terminal-output">
              <span className="ai-terminal-success">✓</span>
              <span>
                Generated semantic HTML5 • Validated WCAG 2.1 AA contrast • 100% Cross-Browser Tested
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Skill Groups */}
      <div className="skills-standard-grid">
        {skills.map((skillGroup) => (
          <article className="skill-row skill-row-standard" key={skillGroup.group}>
            <div className="skill-group-header">
              <div className="skill-group-title-wrap">
                {skillGroup.badge && (
                  <span className="skill-category-badge">{skillGroup.badge}</span>
                )}
                <h3>{skillGroup.group}</h3>
              </div>
            </div>

            <ul className="skill-standard-pills">
              {skillGroup.items
                .filter((skill) => !(typeof skill === "object" && skill.hidden))
                .map((skill) => {
                  const name = typeof skill === "string" ? skill : skill.name;
                  const isHighlighted = typeof skill === "object" && skill.highlight;

                  return (
                    <li
                      key={name}
                      className={`skill-pill ${isHighlighted ? "skill-pill-highlighted" : ""}`}
                    >
                      {isHighlighted && (
                        <span className="skill-pill-icon" aria-hidden="true">
                          <IconSparkle size={11} />
                        </span>
                      )}
                      <span>{name}</span>
                    </li>
                  );
                })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
