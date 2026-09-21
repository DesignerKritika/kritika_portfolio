import skills from "../data/skills.js";

function Skills() {
  return (
    <section className="section" id="expertise">
      <div className="section-label">03 - Expertise</div>
      <div className="section-heading">
        <h2>Clean interfaces, responsive systems and careful implementation.</h2>
      </div>

      <div className="skills-list">
        {skills.map((skillGroup) => (
          <article className="skill-row" key={skillGroup.group}>
            <h3>{skillGroup.group}</h3>
            <ul>
              {skillGroup.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
