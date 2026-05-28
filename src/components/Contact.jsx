import React from 'react';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel reveal">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let’s build something practical.</h2>
            <p className="section-copy">
              Open to project discussions, internships, and full-stack or AI
              development opportunities.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:bhardwajbhavya026@gmail.com">
              <span>Email</span>
              <strong>bhardwajbhavya026@gmail.com</strong>
            </a>
            <a href="https://github.com/bhavyabhardwaj001" target="_blank" rel="noreferrer">
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/bhavya-bhardwaj-1ba26926b/" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
