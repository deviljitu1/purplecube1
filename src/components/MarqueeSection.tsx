/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const CAPABILITIES_ROW_1 = [
  '0.08MM ULTRA-PRECISION',
  'BAMBU LAB X1-CARBON FLEET',
  '8K SLA UV RESIN',
  'RAPID 24H DISPATCH',
  'CARBON FIBER NYLON',
  'ROYAL SILK GOLD LUSTER',
  '±0.05MM TOLERANCE',
  'CONFIDENTIAL NDA GUARANTEE',
  'ENGINEERING TOUGH PETG',
  'WATERTIGHT STL REPAIR',
];

const CAPABILITIES_ROW_2 = [
  'BESPOKE VINAYAKA SACRED ART',
  'LIFELIKE 3D MINIATURES',
  'FUNCTIONAL CAD PROTOTYPES',
  'CORPORATE BULK FABRICATION',
  '16-COLOR MULTI-MATERIAL FARM',
  'TOPOLOGY OPTIMIZATION',
  'FLEXIBLE TPU 95A RUBBER',
  'HAND-PAINTED ARTISAN FINISHES',
];

export const MarqueeSection: React.FC = () => {
  return (
    <section
      className="bg-[#0C0C0C] py-10 sm:py-14 border-y border-white/[0.06] overflow-hidden relative select-none"
      aria-label="Studio Capabilities Ticker"
    >
      {/* Subtle fade edges for smooth gradient transition */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Row 1: Leftward infinite smooth scroll */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-6 sm:gap-8 animate-marquee">
            {[...CAPABILITIES_ROW_1, ...CAPABILITIES_ROW_1].map((text, idx) => (
              <div key={`r1-${idx}`} className="flex items-center gap-6 sm:gap-8 shrink-0">
                <span className="text-sm sm:text-base font-mono font-medium tracking-[0.2em] text-[#D7E2EA]/60 uppercase hover:text-white transition-colors">
                  {text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#9D4EDD] shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward infinite smooth scroll */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-6 sm:gap-8 animate-marquee-reverse">
            {[...CAPABILITIES_ROW_2, ...CAPABILITIES_ROW_2].map((text, idx) => (
              <div key={`r2-${idx}`} className="flex items-center gap-6 sm:gap-8 shrink-0">
                <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#D7E2EA]/40 uppercase hover:text-[#C77DFF] transition-colors">
                  {text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#9D4EDD]/40 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
