import experience from "../data/experience.js";

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-label">05 - Experience</div>
      <div className="section-heading">
        <h2>Years of hands-on frontend and UI development work.</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.company}>
            <div className="timeline-meta">
              <span>{item.dates}</span>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
            </div>
            <div className="timeline-body">
              <p>{item.description}</p>
              <ul>
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
