import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SpotlightAura() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Don't render on mobile to avoid performance issues
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0, // Behind content, but visible over dark background
        background: 'radial-gradient(circle, rgba(198, 107, 255, 0.08) 0%, rgba(198, 107, 255, 0) 60%)',
        filter: 'blur(60px)',
      }}
      animate={{
        x: mousePosition.x - 400,
        y: mousePosition.y - 400,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        type: 'tween',
        ease: 'backOut',
        duration: 0.8 // Soft, lagging trail effect
      }}
    />
  );
}
