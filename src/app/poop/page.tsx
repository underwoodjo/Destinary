'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sections = [
    <Hero key={'hero'} />,
    <Features key={'features'} />,
    <Testimonials key={'testimonials'} />,
  ]; // Example content

  useEffect(() => {
    const handleScroll = (e) => {
      if (isAnimating) return;
      setIsAnimating(true);

      if (e.deltaY > 0) {
        setCurrentSection((prev) =>
          prev < sections.length - 1 ? prev + 1 : prev
        );
      } else {
        setCurrentSection((prev) => (prev > 0 ? prev - 1 : prev));
      }

      setTimeout(() => setIsAnimating(false), 1000); // Timeout to match animation duration

      window.addEventListener('wheel', handleScroll);

      return () => window.removeEventListener('wheel', handleScroll);
    };

    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll);
  }, [isAnimating, sections.length]);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <AnimatePresence>
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0, y: 0.5 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{
            type: 'tween',
            duration: 0.3,
            ease: [0.1, 0.5, 0.2, 1],
            delay: 0.2,
          }}
          //   style={{ position: 'absolute', width: '100%' }}
        >
          {sections[currentSection]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
