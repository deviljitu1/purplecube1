/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FadeIn } from './FadeIn.tsx';
import { AnimatedText } from './AnimatedText.tsx';
import { ContactButton } from './ContactButton.tsx';
import { Layers, Cpu, Zap, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const aboutText =
    "Driven by precision engineering and creative craftsmanship, Purple Cube is a dedicated 3D printing and digital fabrication studio. From intricate sacred idols and personalized miniatures to engineering prototypes and corporate production runs, we bring ideas into tangible reality with industrial accuracy.";

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 py-16 sm:py-24 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Subtle atmospheric center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#6A0DAD]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Center Content Column */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-7 sm:gap-10">
        {/* Subtle Category Pill */}
        <FadeIn delay={0} y={30}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140822]/80 border border-[#9D4EDD]/30 text-[#C77DFF] text-xs font-mono uppercase tracking-widest backdrop-blur-md mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9D4EDD]" />
            <span>The Fabrication Philosophy</span>
          </div>

          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none mt-2"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            About Purple Cube
          </h2>
        </FadeIn>

        {/* Animated paragraph: character-by-character scroll reveal */}
        <div className="flex flex-col items-center gap-10 sm:gap-12">
          <AnimatedText
            text={aboutText}
            className="text-[#D7E2EA] font-light text-center leading-relaxed max-w-[680px] select-none text-base sm:text-xl md:text-2xl"
          />

          <FadeIn delay={0.15} y={20}>
            <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs sm:text-sm text-[#D7E2EA]/80">
              <span className="flex items-center gap-2"><Layers size={16} className="text-[#C77DFF]" /> Design support</span>
              <span className="flex items-center gap-2"><Cpu size={16} className="text-[#C77DFF]" /> Material guidance</span>
              <span className="flex items-center gap-2"><Zap size={16} className="text-[#C77DFF]" /> Custom finishes</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#C77DFF]" /> Small & bulk runs</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} y={20}>
            <ContactButton label="Consult Our Studio" onClick={onOpenContact} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
