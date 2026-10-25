/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from './FadeIn.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

const sectors = [
  { name: 'Corporate gifting', image: '/images/desk-organizer.webp', description: 'Branded desk essentials and thoughtful gifts for your team and clients.' },
  { name: 'Schools', image: '/images/gear-prototype.webp', description: 'Hands-on learning models, project parts and creative classroom kits.' },
  { name: 'Architects', image: '/images/villa-model.webp', description: 'Scale models that make your next presentation tangible.' },
  { name: 'Events', image: '/images/ganpati.webp', description: 'Distinctive keepsakes, custom pieces and gifts for your next occasion.' },
];

export const CorporateBulkSection: React.FC = () => {
  const [sector, setSector] = useState(sectors[0]);
  const [organisation, setOrganisation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [brief, setBrief] = useState('');
  const field = 'w-full mt-2 rounded-xl border border-white/15 bg-[#18151F] px-3 py-3 text-sm text-white';

  const enquire = (event: React.FormEvent) => {
    event.preventDefault();
    const text = `Hello Purple Cube! I'd like to discuss a bulk order.\nFor: ${sector.name}\nOrganisation: ${organisation}\nQuantity: ${quantity || 'Please advise'}\nBrief: ${brief || 'Please help me explore the options.'}`;
    window.open(`https://wa.me/919111190181?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="corporate" className="px-5 sm:px-8 md:px-12 py-16 sm:py-20 border-t border-white/[0.06] bg-[#0F0C13]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        <FadeIn>
          <h2 className="hero-heading mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Make something<br />worth sharing.</h2>
          <div role="group" aria-label="Bulk order type" className="flex flex-wrap gap-2 mt-6">{sectors.map((item) => <button key={item.name} type="button" aria-pressed={sector.name === item.name} onClick={() => setSector(item)} className={`rounded-full border px-3.5 py-2.5 text-xs transition-colors ${sector.name === item.name ? 'border-[#C77DFF] bg-[#9D4EDD]/20 text-white' : 'border-white/15 text-[#D7E2EA]/75 hover:text-white'}`}>{item.name}</button>)}</div>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#D7E2EA]/80">{sector.description}</p>
          <details className="group mt-6 border-t border-white/15">
            <summary className="flex min-h-14 items-center justify-between cursor-pointer list-none text-sm font-medium text-[#D9B4FA]">Discuss a bulk order <ChevronDown size={17} className="transition-transform group-open:rotate-180" /></summary>
            <form onSubmit={enquire} className="space-y-4 pb-2">
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="text-xs text-[#D7E2EA]">Organisation<input required value={organisation} onChange={(event) => setOrganisation(event.target.value)} maxLength={100} placeholder="Your company or school" className={field} /></label>
                <label className="text-xs text-[#D7E2EA]">Quantity, if known<input type="number" min={1} step={1} value={quantity} onChange={(event) => setQuantity(event.target.value)} placeholder="e.g. 50" className={field} /></label>
              </div>
              <label className="block text-xs text-[#D7E2EA]">A little about your idea<textarea value={brief} onChange={(event) => setBrief(event.target.value)} maxLength={1000} rows={2} placeholder="Product, branding, date needed…" className={field} /></label>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#9D4EDD] px-5 py-3 text-sm text-white"><WhatsAppIcon size={15} /> Continue on WhatsApp</button>
            </form>
          </details>
        </FadeIn>
        <FadeIn delay={0.08}><img src={sector.image} alt={sector.name} loading="lazy" width={1000} height={1000} className="w-full aspect-[4/3] rounded-2xl object-cover" /></FadeIn>
      </div>
    </section>
  );
};
