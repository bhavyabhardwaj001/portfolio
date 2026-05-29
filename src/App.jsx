import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsCanvas from './components/StarsCanvas';
import CustomCursor from './components/CustomCursor';

// Keep the old vanilla JS reveals temporarily until we port them to Framer Motion
function initVanillaReveals() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );
  reveals.forEach((el) => observer.observe(el));
}

export default function App() {
  useEffect(() => {
    initVanillaReveals();
  }, []);

  return (
    <>
      <CustomCursor />
      <StarsCanvas />
      <div className="page-glow" aria-hidden="true"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
