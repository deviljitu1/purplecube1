/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactButton } from './ContactButton.tsx';

interface HeroSectionProps {
  onOpenContact: () => void;
}

/**
 * Customizable background media slides.
 * Easily add image or video items here.
 */
export interface BackgroundMediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt?: string;
}

export const HERO_BACKGROUNDS: BackgroundMediaItem[] = [
  {
    id: 'slide-1',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80',
    alt: '3D Precision Engineering & Prototyping',
  },
  {
    id: 'slide-2',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80',
    alt: 'Bespoke 3D Sculptures & Sacred Art',
  },
  {
    id: 'slide-3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1920&q=80',
    alt: 'High-Detail SLA Resin & Precision Fabrication',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto slide every 6 seconds smoothly in the background without buttons
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeMedia = HERO_BACKGROUNDS[currentIdx];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-x-clip bg-[#0C0C0C] select-none pt-24 sm:pt-28 pb-12 sm:pb-16 px-4">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC AUTO-SLIDING BACKGROUND (IMAGES OR VIDEOS) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeMedia.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            {activeMedia.type === 'video' ? (
              <video
                src={activeMedia.src}
                poster={activeMedia.poster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={activeMedia.src}
                alt={activeMedia.alt || 'Purple Cube 3D Printing Studio'}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Lighter Cinematic Tint Overlays to keep background visible and lively */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/35 to-[#0C0C0C]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/35 via-transparent to-[#0C0C0C]/70" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#6A0DAD]/15 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* 2. MINIMALIST HERO CENTERPIECE: PURE HEADING, DESCRIPTION & BUTTONS */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto flex flex-col items-center justify-center pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full flex flex-col items-center"
        >
          {/* Refined Brand Heading */}
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none select-none text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            PURPLE CUBE
          </h1>

          {/* Clean, concise supporting description */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#D7E2EA]/85 font-light tracking-wide max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
            Precision additive manufacturing and physical fabrication for engineering prototypes,
            bespoke sacred art, and volume production.
          </p>

          {/* Clean Action Buttons */}
          <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-none">
            <ContactButton label="Contact Studio" onClick={onOpenContact} />

            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-[#D7E2EA] hover:text-white text-xs sm:text-sm font-medium uppercase tracking-widest transition-all backdrop-blur-md cursor-pointer text-center"
            >
              Explore Collection
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
