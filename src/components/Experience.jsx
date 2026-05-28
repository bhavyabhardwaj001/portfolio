import React from 'react';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container narrow">
        <div className="section-heading reveal">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Internship</h2>
        </div>

        <article className="experience-card reveal">
          <div>
            <p className="experience-label">FOSEE Internship</p>
            <h3>IIT Bombay</h3>
          </div>
          <p>
            Selected for a 2-month internship under the FOSSEE program at IIT
            Bombay.
          </p>
          <div className="experience-work">
            <h4>Work</h4>
            <p>
              Developing a Package Downloader (eSim Tool Manager) to automate
              installation and management of tools and dependencies, focusing
              on system-level workflows and usability.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
