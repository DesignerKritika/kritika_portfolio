import experience from "../data/experience.js";
import { IconSparkle } from "./Icons.jsx";

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-label">06 — Experience</div>
      <div className="section-heading">
        <h2>Years of hands-on frontend, UI development and AI-driven workflows.</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.company}>
            <div className="timeline-meta">
              <span>{item.dates}</span>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
              {item.aiHighlight && (
                <div className="timeline-ai-highlight">
                  <IconSparkle size={12} />
                  <span>{item.aiHighlight}</span>
                </div>
              )}
            </div>
            <div className="timeline-body">
              <p>{item.description}</p>
              <ul>
                {item.responsibilities.map((responsibility) => {
                  const isAiRelated =
                    responsibility.includes("Claude") ||
                    responsibility.includes("Codex") ||
                    responsibility.includes("AI");
                  return (
                    <li
                      key={responsibility}
                      className={isAiRelated ? "responsibility-ai-highlighted" : ""}
                    >
                      {responsibility}
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;

