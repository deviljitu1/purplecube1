import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Box, Fingerprint, Layers3, Pause, Play, Upload } from 'lucide-react';
import { ContactButton } from './ContactButton.tsx';

interface HeroSectionProps { onOpenContact: () => void; }
export interface BackgroundMediaItem {
  id: string; type: 'image' | 'video'; src: string; poster?: string; alt?: string;
  label: string; detail: string;
}

export const HERO_BACKGROUNDS: BackgroundMediaItem[] = [
  {
    id: 'slide-1', type: 'image', src: '/images/hero-studio.webp',
    alt: 'A 3D printer creating a violet spiral vase in a workshop',
    label: 'Layer by layer. Idea to object.', detail: '3D printing & rapid prototyping',
  },
  {
    id: 'slide-2', type: 'image', src: '/images/ganpati.webp',
    alt: 'Silk gold 3D printed Ganpati idol with fine sculpted details',
    label: 'Small details. Personal meaning.', detail: 'Sculptures, miniatures & personalised gifts',
  },
  {
    id: 'slide-3', type: 'image', src: '/images/villa-model.webp',
    alt: 'White 3D printed architectural scale model of a modern villa',
    label: 'Big ideas. Brought to scale.', detail: 'Architectural models & custom projects',
  },
];

const journeys = [
  { href: '#products', icon: Box, title: 'Explore products', compactTitle: 'Browse gifts', detail: 'Objects for everyday life' },
  { href: '#personalised', icon: Fingerprint, title: 'Make it personal', compactTitle: 'Personalise', detail: 'Miniatures & custom gifts' },
  { href: '#upload', icon: Upload, title: 'Print your file', compactTitle: 'Print a file', detail: 'Share a model. Get a quote.' },
  { href: '#corporate', icon: Layers3, title: 'Create in bulk', compactTitle: 'Bulk orders', detail: 'For teams, brands & events' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(() => setCurrentIdx((prev) => (prev + 1) % HERO_BACKGROUNDS.length), 6500);
    return () => clearInterval(timer);
  }, [paused, reducedMotion, currentIdx]);

  const activeMedia = HERO_BACKGROUNDS[currentIdx];

  return (
    <section aria-label="Purple Cube 3D printing studio" className="studio-hero relative isolate overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-6 sm:pb-8">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <AnimatePresence initial={false}>
          <motion.div key={activeMedia.id}
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.025 }}
            animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.4, 0, 0.2, 1] }} className="absolute inset-0">
            {activeMedia.type === 'video' ? (
              <video src={activeMedia.src} poster={activeMedia.poster} autoPlay={!reducedMotion} muted loop playsInline className="hero-media" />
            ) : (
              <img src={activeMedia.src} alt={activeMedia.alt} fetchPriority={currentIdx === 0 ? 'high' : 'auto'} className={`hero-media ${currentIdx > 0 ? 'hero-media-product' : ''}`} />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="hero-shade absolute inset-0" />
        <div className="studio-grid absolute inset-0 opacity-20" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto flex flex-col justify-between flex-1">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hero-copy max-w-2xl">
          <h1 className="hero-heading-purple text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.045em] font-black uppercase">Purple Cube</h1>
          <h2 className="mt-5 text-2xl sm:text-4xl font-medium leading-tight tracking-tight text-white">Your ideas.<br />Made real in 3D.</h2>
          <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-[#E2DFE9]">3D printing, personalised miniatures, everyday objects and custom models. Designed with you. Printed with care.</p>
          <div className="mt-7 flex flex-col min-[400px]:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            <ContactButton label="Discuss your idea" onClick={onOpenContact} className="!px-6 !text-sm !py-3.5" />
            <a href="#products" className="inline-flex justify-center items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/10 transition-colors">Explore products <ArrowUpRight size={15} /></a>
          </div>
        </motion.div>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="text-[#C77DFF] font-mono text-sm tabular-nums">0{currentIdx + 1}<span className="text-white/40"> / 03</span></span>
            <div className="h-8 w-px bg-white/20" />
            <div><p className="text-sm font-medium text-white">{activeMedia.label}</p><p className="mt-1 text-[11px] text-[#C6C1D0]">{activeMedia.detail}</p></div>
          </div>
          <div role="group" aria-label="Hero slideshow controls" className="flex items-center gap-1">
            {HERO_BACKGROUNDS.map((slide, index) => (
              <button key={slide.id} type="button" aria-label={`Show slide ${index + 1}: ${slide.detail}`} aria-pressed={currentIdx === index} onClick={() => setCurrentIdx(index)} className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                <span className={`h-1 rounded-full transition-all duration-300 ${currentIdx === index ? 'w-7 bg-[#C77DFF]' : 'w-3 bg-white/40'}`} />
              </button>
            ))}
            {!reducedMotion && <button type="button" aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} onClick={() => setPaused(!paused)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10">{paused ? <Play size={13} /> : <Pause size={13} />}</button>}
          </div>
        </div>

        <div className="mt-4 sm:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {journeys.map(({ href, icon: Icon, title, compactTitle, detail }) => (
            <a key={href} href={href} className="journey-card group flex min-h-11 items-center sm:items-start gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/15 bg-[#15121D]/85 px-3 py-2.5 sm:p-5 backdrop-blur-xl transition-all hover:border-[#B879F2]/65 hover:bg-[#241630]">
              <Icon size={20} strokeWidth={1.5} className="hidden sm:block shrink-0 text-[#CF9DF8] mt-0.5" />
              <div className="min-w-0 flex-1"><span className="block text-xs sm:text-sm font-medium text-white"><span className="sm:hidden">{compactTitle}</span><span className="hidden sm:inline">{title}</span></span><span className="mt-1 hidden sm:block text-xs leading-relaxed text-[#C7C0D2]">{detail}</span></div>
              <ArrowUpRight size={14} className="shrink-0 text-[#C77DFF]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
