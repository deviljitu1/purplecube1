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
      className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 py-24 sm:py-32 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Subtle atmospheric center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#6A0DAD]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Center Content Column */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-10 sm:gap-14">
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

          {/* Clean Metric Pills */}
          <FadeIn delay={0.15} y={20}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl">
              <div className="p-4 rounded-2xl bg-[#121217]/80 border border-white/[0.08] text-center">
                <Layers size={18} className="mx-auto text-[#C77DFF] mb-1.5" />
                <span className="text-xs font-mono uppercase text-[#D7E2EA]/60 block">Layer Height</span>
                <span className="text-sm sm:text-base font-bold text-white block mt-0.5">0.08mm Ultra</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#121217]/80 border border-white/[0.08] text-center">
                <Cpu size={18} className="mx-auto text-[#C77DFF] mb-1.5" />
                <span className="text-xs font-mono uppercase text-[#D7E2EA]/60 block">Fleet Capacity</span>
                <span className="text-sm sm:text-base font-bold text-white block mt-0.5">18 Active Units</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#121217]/80 border border-white/[0.08] text-center">
                <Zap size={18} className="mx-auto text-[#C77DFF] mb-1.5" />
                <span className="text-xs font-mono uppercase text-[#D7E2EA]/60 block">Rapid Prototyping</span>
                <span className="text-sm sm:text-base font-bold text-white block mt-0.5">24h Dispatch</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#121217]/80 border border-white/[0.08] text-center">
                <ShieldCheck size={18} className="mx-auto text-[#C77DFF] mb-1.5" />
                <span className="text-xs font-mono uppercase text-[#D7E2EA]/60 block">Data Privacy</span>
                <span className="text-sm sm:text-base font-bold text-white block mt-0.5">Strict NDA</span>
              </div>
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
