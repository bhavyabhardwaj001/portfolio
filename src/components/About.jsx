import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container reveal">
        <div className="about-grid">
          
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            
            <div className="about-text">
              <p>
                Hi, I'm <span className="accent-text">Bhavya Bhardwaj</span>, a <span className="accent-text">CSE student</span> and <span className="accent-text">Full-stack Developer</span>. I specialize in building scalable web applications with clean user experiences and reliable backends.
              </p>
              <p>
                I'm passionate about bridging raw data and usable products. I build practical <span className="accent-text">AI-powered systems</span> focused on real student and developer workflows, turning complex problems into elegant tools.
              </p>
              <p>
                Currently, I'm a <span className="accent-text">FOSSEE Intern @ IIT Bombay</span> contributing to <span className="accent-text">Open Source</span>. I focus on systems architecture and product engineering using <span className="accent-text">React</span>, <span className="accent-text">Flask</span>, and <span className="accent-text">Python</span>.
              </p>
            </div>

            <div className="about-chips">
              <span>AI + Full-stack</span>
              <span>FOSSEE Intern</span>
              <span>Open Source</span>
              <span>Product Systems</span>
              <span>React / Flask / Python</span>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-photo-wrapper">
              <div className="photo-backdrop"></div>
              <div className="photo-container">
                <img src="/mypic.jpg" alt="Bhavya Bhardwaj" className="about-photo" />
                <div className="photo-caption">
                  <span className="proof-dot"></span>
                  <div className="caption-roller">
                    <span>Full-stack Developer</span>
                    <span>Open Source Contributor</span>
                    <span>CSE Student</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
