import React from 'react';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading reveal">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Technical Skillset</h2>
        </div>

        <div className="skills-grid">
          <article className="skill-group reveal">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span>C++</span>
              <span>Python</span>
              <span>JavaScript</span>
            </div>
          </article>

          <article className="skill-group reveal">
            <h3>Web &amp; Tech</h3>
            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
              <span>Node.js</span>
              <span>SQL</span>
              <span>MongoDB</span>
            </div>
          </article>

          <article className="skill-group reveal">
            <h3>Tools</h3>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Linux</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
