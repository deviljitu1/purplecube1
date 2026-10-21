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
    name: 'Aerospace Drone Frame',
    category: 'Precision Engineering',
    tech: 'Carbon Fiber Nylon & Tough PETG',
    imageMain:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    imageDetail1:
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    imageDetail2:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    number: '02',
    name: 'Sacred Mandir Idols',
    category: 'Artisan Sculptures',
    tech: 'Royal Silk Gold PLA & 8K SLA Resin',
    imageMain:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    imageDetail1:
      'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=600&q=80',
    imageDetail2:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
  },
  {
    number: '03',
    name: 'Kinetic Gear Assemblies',
    category: 'Functional Mechanisms',
    tech: 'Multi-Color FDM & 0.08mm Tolerances',
    imageMain:
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
    imageDetail1:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
    imageDetail2:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
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
      className="h-[80vh] sm:h-[85vh] flex items-start justify-center sticky top-24 md:top-28"
      style={{
        top: `calc(${index * 24}px + 5.5rem)`,
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
              <span className="text-xs uppercase tracking-widest text-[#9D4EDD] font-mono font-medium">
                ({project.category})
              </span>
              <h3
                className="font-bold uppercase text-white tracking-tight leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}
              >
                {project.name}
              </h3>
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
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="w-full h-32 sm:h-36 md:h-44 rounded-2xl overflow-hidden bg-[#181820] border border-white/[0.08]">
              <img
                src={project.imageDetail1}
                alt={`${project.name} Detail 1`}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-36 sm:h-44 md:h-52 rounded-2xl overflow-hidden bg-[#181820] border border-white/[0.08]">
              <img
                src={project.imageDetail2}
                alt={`${project.name} Detail 2`}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 large flagship image */}
          <div className="md:col-span-7">
            <div className="w-full h-full min-h-[220px] sm:min-h-[280px] md:min-h-[380px] rounded-2xl overflow-hidden bg-[#181820] border border-white/[0.08] relative">
              <img
                src={project.imageMain}
                alt={`${project.name} Flagship Print`}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80';
                }}
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
      className="bg-[#0C0C0C] relative pt-20 sm:pt-28 pb-28 px-4 sm:px-6 md:px-10 border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto mb-14 text-center">
        <FadeIn delay={0} y={30}>
          <span className="text-xs uppercase tracking-widest text-[#9D4EDD] font-mono px-3.5 py-1.5 rounded-full bg-[#180828] border border-[#9D4EDD]/30 inline-block mb-3">
            Case Studies
          </span>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 120px)' }}
          >
            Projects
          </h2>
          <p className="text-sm sm:text-base text-[#D7E2EA]/70 font-light mt-3 max-w-xl mx-auto">
            From precision drone mechanics to sacred temple carvings, explore our recent studio fabrication deliveries.
          </p>
        </FadeIn>
      </div>

      {/* Sticky stacking container */}
      <div className="relative pb-16">
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
