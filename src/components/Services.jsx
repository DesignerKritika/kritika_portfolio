function Services() {
  const services = [
    {
      title: "UI Development",
      text: "Pixel-perfect responsive website implementation."
    },
    {
      title: "Figma to HTML",
      text: "Convert Figma designs into responsive HTML/CSS."
    },
    {
      title: "Website Redesign",
      text: "Modernize existing websites and improve responsive UI."
    },
    {
      title: "Frontend Support",
      text: "Fix UI issues, responsiveness, browser compatibility and frontend bugs."
    }
  ];

  return (
    <section className="section services" id="services">
      <div className="section-label">06 - What I Do</div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>

      <div className="freelance-cta">
        <p className="section-label">Immediate Joiner + Freelance Availability</p>
        <h2>Have a website project in mind?</h2>
        <p>Let's build something clean, responsive and user-friendly.</p>
        <a className="button primary" href="#contact">Start a Project -&gt;</a>
        <div className="cta-tags">
          <span>Immediate Joiner</span>
          <span>Freelance Projects</span>
          <span>Remote Work</span>
          <span>Hybrid Work</span>
          <span>Work from Office</span>
        </div>
      </div>
    </section>
  );
}

export default Services;
