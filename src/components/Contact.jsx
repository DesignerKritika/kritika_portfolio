function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-label">08 - Contact</div>
      <div className="contact-grid">
        <div>
          <h2>Let's work together.</h2>
          <p>
            Kritika Roy<br />
            Kolkata, India
          </p>
          <div className="contact-direct-items">
            <a href="mailto:kritika.roy372@gmail.com" className="contact-direct-item" title="Send email">
              <span className="direct-icon">✉</span>
              <span>kritika.roy372@gmail.com</span>
            </a>
            <a href="tel:+919804926294" className="contact-direct-item" title="Call Kritika">
              <span className="direct-icon">✆</span>
              <span>+91 9804926294</span>
            </a>
          </div>
        </div>
        <address className="contact-links">
          <a href="mailto:kritika.roy372@gmail.com" title="Send email to Kritika Roy">
            <span className="contact-link-content">
              <span className="contact-link-title">Email</span>
              <span className="contact-link-value">kritika.roy372@gmail.com</span>
            </span>
          </a>
          <a href="tel:+919804926294" title="Call Kritika Roy">
            <span className="contact-link-content">
              <span className="contact-link-title">Phone</span>
              <span className="contact-link-value">+91 9804926294</span>
            </span>
          </a>
          <a
            href="https://linkedin.com/in/kritika-roy-710b5b80"
            target="_blank"
            rel="noreferrer"
            title="Connect on LinkedIn"
          >
            <span className="contact-link-content">
              <span className="contact-link-title">LinkedIn</span>
              <span className="contact-link-value">linkedin.com/in/kritika-roy-710b5b80</span>
            </span>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub Profile">
            <span className="contact-link-content">
              <span className="contact-link-title">GitHub</span>
              <span className="contact-link-value">github.com</span>
            </span>
          </a>
        </address>
      </div>
    </section>
  );
}

export default Contact;
