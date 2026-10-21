/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FadeIn } from './FadeIn.tsx';
import { Hero3DCanvas } from './Hero3DCanvas.tsx';
import { Magnet } from './Magnet.tsx';
import { Sparkles, Layers, Box, Cpu, Eye, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

interface Studio3DCanvasLabProps {
  onOpenContact?: () => void;
}

export const Studio3DCanvasLab: React.FC<Studio3DCanvasLabProps> = ({ onOpenContact }) => {
  return (
    <section id="3d-lab" className="py-24 px-5 sm:px-8 md:px-12 bg-[#0A0A0E] relative overflow-hidden border-y border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#6A0DAD]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#00F5D4]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn y={30}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C77DFF] font-mono px-3.5 py-1.5 rounded-full bg-[#180828] border border-[#9D4EDD]/40 inline-flex items-center gap-2 mb-3 shadow-[0_0_15px_rgba(157,78,221,0.3)]">
              <Sparkles size={13} className="text-[#9D4EDD]" />
              Interactive WebGL Simulation Lab
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight hero-heading mb-4">
              Real-Time 3D Slicing &amp; Material Studio
            </h2>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base font-light">
              Interact with real 3D printable CAD models in real-time. Inspect micro-layer resolution,
              toggle wireframe toolpaths, and test luxury filament finishes before fabrication.
            </p>
          </div>
        </FadeIn>

        {/* 2-Column Layout: Left interactive Three.js Canvas, Right technical capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Interactive Three.js 3D Canvas (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full rounded-3xl bg-gradient-to-b from-[#140E20] via-[#0E0916] to-[#0A0610] border border-[#9D4EDD]/40 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C77DFF]">
                  Live 3D Viewport &bull; 60 FPS
                </span>
              </div>

              {/* Magnet Interactive Canvas */}
              <div className="w-full flex items-center justify-center pt-6">
                <Magnet
                  padding={120}
                  strength={2}
                  activeTransition="transform 0.3s ease-out"
                  inactiveTransition="transform 0.6s ease-in-out"
                  className="w-full flex items-center justify-center"
                >
                  <Hero3DCanvas />
                </Magnet>
              </div>
            </div>
          </div>

          {/* Right: Studio Capabilities & Slicing Explanations (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn x={30} delay={0.2}>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#121217] border border-white/10 hover:border-[#9D4EDD]/50 transition-all shadow-lg">
                  <div className="flex items-center gap-3 mb-2 text-[#C77DFF]">
                    <div className="w-9 h-9 rounded-xl bg-[#6A0DAD]/30 flex items-center justify-center border border-[#9D4EDD]/40">
                      <Layers size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        0.08mm Layer Fidelity
                      </h4>
                      <span className="text-[11px] text-[#D7E2EA]/60 font-mono">
                        Microscopic Surface Smoothing
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed">
                    Our Bambu Lab X1-C and Elegoo 8K SLA resin printers eliminate noticeable layer lines,
                    yielding injection-mold quality parts straight off the build plate.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121217] border border-white/10 hover:border-[#9D4EDD]/50 transition-all shadow-lg">
                  <div className="flex items-center gap-3 mb-2 text-[#C77DFF]">
                    <div className="w-9 h-9 rounded-xl bg-[#6A0DAD]/30 flex items-center justify-center border border-[#9D4EDD]/40">
                      <Box size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        Multi-Filament &amp; Resin Library
                      </h4>
                      <span className="text-[11px] text-[#D7E2EA]/60 font-mono">
                        PLA+, Silk Gold, PETG, TPU, SLA, Carbon
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed">
                    Test metallic luster silk PLA, high-impact functional PETG, rubberized flexible TPU,
                    and carbon-fiber engineering composites with exact density calculations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121217] border border-white/10 hover:border-[#9D4EDD]/50 transition-all shadow-lg">
                  <div className="flex items-center gap-3 mb-2 text-[#C77DFF]">
                    <div className="w-9 h-9 rounded-xl bg-[#6A0DAD]/30 flex items-center justify-center border border-[#9D4EDD]/40">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        Zero File Leak NDA Guarantee
                      </h4>
                      <span className="text-[11px] text-[#D7E2EA]/60 font-mono">
                        100% Protected Client CAD Data
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed">
                    Your proprietary 3D geometry and inventions are handled on isolated, encrypted
                    slicing machines with standard mutual confidentiality agreements.
                  </p>
                </div>

                {/* Direct Action */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="#products"
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white text-xs font-semibold uppercase tracking-wider hover:brightness-110 shadow-lg cursor-pointer transition-all"
                  >
                    <span>Explore 3D Collection</span>
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="https://wa.me/919876543210?text=Hello%20Purple%20Cube!%20I%20am%20exploring%20your%203D%20Studio%20and%20would%20like%20a%20fabrication%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-3 px-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-[#D7E2EA] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <MessageSquare size={14} className="text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
