/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FadeIn } from './FadeIn.tsx';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
  highlight: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Precision 3D Printing',
    description:
      'Industrial-grade FDM & 8K SLA resin printing with ultra-smooth 0.08mm layer heights across PLA+, PETG, Carbon Fiber, and UV resins.',
    highlight: 'Bambu Lab X1-C & Elegoo SLA',
  },
  {
    number: '02',
    name: 'Custom Miniatures & Sculptures',
    description:
      'Sculpting and fabricating lifelike 3D miniatures, sacred Ganpati idols, and customized personalized figurines directly from client photographs.',
    highlight: 'Photogrammetry & Hand-Finishing',
  },
  {
    number: '03',
    name: 'CAD Modeling & Prototyping',
    description:
      'Translating physical concepts, sketches, and 2D blueprints into manufacture-ready 3D CAD models, STL/3MF files, and rapid functional prototypes.',
    highlight: 'Parametric Design & Assemblies',
  },
  {
    number: '04',
    name: 'Batch Production & Corporate',
    description:
      'High-capacity production runs for schools, architects, and corporate gifting with custom branding, Pantone matching, and batch QA inspection.',
    highlight: 'Volume Runs & Custom Plinths',
  },
  {
    number: '05',
    name: 'Slicing & Reverse Engineering',
    description:
      'Topology optimization, infill shell engineering, watertight mesh repair, and precision slicing parameter tuning for maximum strength and surface fidelity.',
    highlight: 'Mesh Repair & G-Code Tuning',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#0C0C0C] text-white px-6 sm:px-8 md:px-12 py-24 sm:py-32 relative z-10 border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
            >
              Services
            </h2>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 font-light mt-3">
              End-to-end additive manufacturing from CAD inception to polished delivery.
            </p>
          </div>
        </FadeIn>

        {/* Clean Service Rows */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.08} y={20}>
              <div className="py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-white/[0.02] px-4 rounded-2xl transition-all duration-300">
                {/* Left: Number & Name */}
                <div className="flex items-start sm:items-center gap-6 sm:gap-8 max-w-md">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#9D4EDD]/60 group-hover:text-[#C77DFF] transition-colors shrink-0">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-bold uppercase tracking-tight text-white group-hover:text-[#C77DFF] transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-sm font-mono text-[#D7E2EA]/50 block mt-1">
                      {service.highlight}
                    </span>
                  </div>
                </div>

                {/* Right: Description & Action icon */}
                <div className="md:max-w-md flex items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-[#9D4EDD]/20 border border-white/10 group-hover:border-[#9D4EDD]/50 flex items-center justify-center text-white/50 group-hover:text-white shrink-0 transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
