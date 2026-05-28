import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('accent-text') ||
        target.closest('.project-card') ||
        target.closest('.skill-group') ||
        target.closest('.about-chips span')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Only render on desktop to avoid issues on mobile touches
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    document.body.style.cursor = 'auto';
    return null;
  }

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '16px',
        height: '16px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 4 : 1,
        opacity: mousePosition.x === -100 ? 0 : 1
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
    />
  );
}
