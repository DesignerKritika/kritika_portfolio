function About() {
  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "50+", label: "Web Projects" },
    { value: "100%", label: "Responsive UI" },
    { value: "Available", label: "For Freelance" }
  ];

  return (
    <section className="section about" id="about">
      <div className="section-label">02 - About</div>
      <div className="split-layout">
        <h2>Frontend development with a strong eye for design.</h2>
        <div className="body-copy">
          <p>
            Kritika Roy is a Senior HTML Developer, UI Developer and Frontend Developer based in Kolkata,
            India. Her work focuses on responsive web development, semantic HTML, reusable CSS and
            polished user interface implementation.
          </p>
          <p>
            She specializes in Figma-to-HTML and Photoshop-to-HTML development, pixel-perfect responsive
            layouts, cross-browser compatibility, accessibility, performance-minded frontend work and
            collaboration with designers and developers.
          </p>
          <p>
            Her workflow also includes AI-assisted development for faster debugging, cleaner implementation
            and better day-to-day frontend productivity.
          </p>
        </div>
      </div>

      <div className="stats-grid" aria-label="Experience statistics">
        {stats.map((stat) => (
          <article className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
