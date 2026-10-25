/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn } from './FadeIn.tsx';
import { calculateCardScale } from '../utils/pricing.ts';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';

interface ProjectItem {
  number: string;
  name: string;
  category: string;
  tech: string;
  imageMain: string;
  imageDetail1: string;
  imageDetail2: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    number: '01',
    name: 'Architectural Scale Models',
    category: 'Ideas at Scale',
    tech: 'Architectural PLA & Model Making',
    imageMain:
      '/images/villa-model.webp',
    imageDetail1:
      '/images/hero-studio.webp',
    imageDetail2:
      '/images/desk-organizer.webp',
  },
  {
    number: '02',
    name: 'Sacred Mandir Idols',
    category: 'Artisan Sculptures',
    tech: 'Royal Silk Gold PLA & 8K SLA Resin',
    imageMain:
      '/images/ganpati.webp',
    imageDetail1:
      '/images/miniature-bust.webp',
    imageDetail2:
      '/images/spiral-vase.webp',
  },
  {
    number: '03',
    name: 'Kinetic Gear Assemblies',
    category: 'Functional Mechanisms',
    tech: 'Multi-Colour FDM & Print-in-Place Design',
    imageMain:
      '/images/gear-prototype.webp',
    imageDetail1:
      '/images/gyro-fidget.webp',
    imageDetail2:
      '/images/hero-studio.webp',
  },
];

const ProjectCard: React.FC<{
  project: ProjectItem;
  index: number;
  totalCards: number;
}> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const baseScale = calculateCardScale(index, totalCards);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, baseScale]);

  return (
    <div
      ref={containerRef}
      className="project-stack-card h-[80svh] last:h-auto md:h-[85vh] md:last:h-[85vh] flex items-start justify-center sticky"
      style={{
        top: `calc(${index * 24}px + 5.5rem)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-5xl rounded-3xl border border-white/[0.12] bg-[#111116] p-5 sm:p-7 md:p-8 shadow-2xl flex flex-col justify-between"
      >
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/[0.08] gap-3">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tighter"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <h3
                className="font-bold uppercase text-white tracking-tight leading-snug"

              >
                {project.name}
              </h3>
              <span className="mt-1 text-xs uppercase tracking-widest text-[#9D4EDD] font-mono font-medium">
                ({project.category})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#D7E2EA]/60 font-mono hidden md:inline">
              {project.tech}
            </span>
            <a
              href="#upload"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer"
            >
              <span>Explore Spec</span>
              <ArrowUpRight size={14} className="text-[#C77DFF]" />
            </a>
          </div>
        </div>

        {/* Visual Showcase: 2-column clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-5 items-stretch">
          {/* Left Column (40% width): 2 stacked detail images */}
          <div className="md:col-span-5 hidden md:flex flex-col gap-4">
            <div className="w-full h-32 sm:h-36 md:h-44 rounded-2xl overflow-hidden bg-[#181820] border border-white/[0.08]">
              <img
                src={project.imageDetail1}
                alt={`${project.name} Detail 1`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-36 sm:h-44 md:h-52 rounded-2xl overflow-hidden bg-[#181820] border border-white/[0.08]">
              <img
                src={project.imageDetail2}
                alt={`${project.name} Detail 2`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 large flagship image */}
          <div className="md:col-span-7">
            <div className="w-full h-[32svh] min-h-[180px] max-h-[300px] md:h-full md:max-h-none md:min-h-[380px] rounded-2xl overflow-hidden bg-[#181820] border border-white/[0.08] relative">
              <img
                src={project.imageMain}
                alt={`${project.name} Flagship Print`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/10">
                &bull; {project.tech}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] relative pt-20 sm:pt-28 pb-12 md:pb-28 px-4 sm:px-6 md:px-10 border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto mb-14 text-center">
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"

          >
            Projects
          </h2>
          <p className="text-sm sm:text-base text-[#D7E2EA]/70 font-light mt-3 max-w-xl mx-auto">
            Explore what you could create: scale models, detailed sculptures and functional mechanisms.
          </p>
        </FadeIn>
      </div>

      {/* Sticky stacking container */}
      <div className="relative md:pb-16">
        {PROJECTS_DATA.map((proj, idx) => (
          <ProjectCard
            key={proj.number}
            project={proj}
            index={idx}
            totalCards={PROJECTS_DATA.length}
          />
        ))}
      </div>
    </section>
  );
};
