/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn.tsx';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => (
  <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-12 py-14 sm:py-20">
    <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[.95fr_1fr] lg:gap-14">
      <FadeIn y={16} className="relative min-w-0">
        <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#16121C] p-2.5 sm:p-3">
          <img src="/images/hero-studio.webp" alt="3D printer creating a purple vase, alongside a detailed architectural model" loading="lazy" decoding="async" width={1672} height={941} className="aspect-[16/10] w-full rounded-xl object-cover object-[65%_center] lg:aspect-[5/4]" />
          <div className="flex items-center justify-between gap-3 px-1 pb-1 pt-3">
            <span className="text-xs text-[#D7E2EA]/65">From a digital idea to a physical object.</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B879F2]" />
          </div>
        </div>
      </FadeIn>

      <FadeIn y={16} delay={0.1} className="min-w-0">
        <h2 id="about-heading" className="text-2xl sm:text-[32px] font-semibold leading-tight tracking-tight text-white">About <span className="text-[#C77DFF]">Purple Cube</span></h2>
        <p className="mt-4 text-sm leading-7 text-[#D7E2EA]/80">
          We’re a 3D design and printing studio with a simple focus: making your ideas personal.
          From thoughtful gifts and photo miniatures to custom models, we create objects around what matters to you.
        </p>
        <p className="mt-3 text-sm leading-7 text-[#D7E2EA]/60">
          Bring us an idea, a reference photo or a ready-to-print file. We’ll help you work through the design,
          material and finish, whether you need one special piece or a complete gifting collection.
        </p>
        <div className="my-6 grid grid-cols-2 gap-x-5 gap-y-5">
          {['Personalised gifts & miniatures', 'Design & material guidance', 'Your photos, ideas or 3D files', 'Individual & bulk orders'].map((label, index) => (
            <div key={label} className="border-l border-[#B879F2]/40 pl-3">
              <span className="block text-xs font-mono text-[#C77DFF]">0{index + 1}</span>
              <span className="mt-1 block text-sm leading-relaxed text-[#D7E2EA]/85">{label}</span>
            </div>
          ))}
        </div>
        <button type="button" onClick={onOpenContact} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#B879F2]/50 bg-[#9D4EDD]/15 px-5 py-2.5 text-sm font-medium text-[#E9D3FF] transition-colors hover:bg-[#9D4EDD]/30">
          Talk to our studio <ArrowUpRight size={15} />
        </button>
      </FadeIn>
    </div>
  </section>
);
