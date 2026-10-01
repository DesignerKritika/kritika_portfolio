import skills from "../data/skills.js";
import { IconSparkle, IconTerminal, IconBug, IconCpu } from "./Icons.jsx";

function Skills() {
  return (
    <section className="section bt-none" id="expertise">
      <div className="section-label">04 — Technical Expertise</div>
      <div className="section-heading">
        <h2>Clean interfaces, resilient systems, and an advanced frontend toolset.</h2>
      </div>

      <div className="skills-list">
        {skills.map((skillGroup) => (
          <article
            className={`skill-row ${skillGroup.highlight ? "skill-row-highlighted" : ""}`}
            key={skillGroup.group}
          >
            <div className="skill-group-header">
              <div className="skill-group-title-wrap">
                {skillGroup.highlight && (
                  <span className="skill-featured-badge">
                    <IconSparkle size={12} />
                    <span>{skillGroup.badge || "Featured"}</span>
                  </span>
                )}
                <h3>{skillGroup.group}</h3>
              </div>
              {skillGroup.description && (
                <p className="skill-group-desc">{skillGroup.description}</p>
              )}
            </div>

            <ul>
              {skillGroup.items
                .filter((skill) => !(typeof skill === "object" && skill.hidden))
                .map((skill) => {
                const name = typeof skill === "string" ? skill : skill.name;
                const isHighlighted = typeof skill === "object" && skill.highlight;
                const isClaudeCode = name.toLowerCase().includes("claude");
                const isCodex = name.toLowerCase().includes("codex");

                return (
                  <li
                    key={name}
                    className={`skill-pill ${isHighlighted ? "skill-pill-highlighted" : ""}`}
                  >
                    {isHighlighted && (
                      <span className="skill-pill-icon" aria-hidden="true">
                        {isClaudeCode ? (
                          <IconTerminal size={12} />
                        ) : isCodex ? (
                          <IconCpu size={12} />
                        ) : (
                          <IconSparkle size={12} />
                        )}
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
