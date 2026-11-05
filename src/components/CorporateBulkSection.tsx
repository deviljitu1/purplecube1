/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from './FadeIn.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const CorporateBulkSection: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [organisation, setOrganisation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [brief, setBrief] = useState('');
  const bulkDetails = useRef<HTMLDetailsElement>(null);
  const field = 'w-full mt-2 rounded-xl border border-white/15 bg-[#18151F] px-3 py-3 text-sm text-white';

  const enquire = (event: React.FormEvent) => {
    event.preventDefault();
    const text = `Hello Purple Cube! I'd like to discuss a bulk order.\nOrganisation: ${organisation}\nQuantity: ${quantity || 'Please advise'}\nBrief: ${brief || 'Please help me explore the options.'}`;
    window.open(`https://wa.me/919111190181?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="corporate" className={compact ? 'min-w-0' : 'px-5 sm:px-8 md:px-12 py-16 sm:py-20 border-t border-white/[0.06]'}>
      <div className={compact ? 'flex flex-col' : 'max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center'}>
        <FadeIn className={compact ? 'order-2' : ''}>
          <h2 className={compact ? 'mt-4 min-h-14 !text-xl font-semibold leading-7 text-white' : 'hero-heading mt-3 text-3xl font-bold tracking-tight sm:text-4xl'}><button type="button" onClick={() => { if (bulkDetails.current) bulkDetails.current.open = true; }} className="cursor-pointer text-left hover:text-[#D9B4FA]">Make something<br />worth sharing.</button></h2>
          <details ref={bulkDetails} className={compact ? 'group mt-4' : 'group mt-6 border-t border-white/15'}>
            <summary className={compact ? 'order-cta' : 'flex min-h-14 items-center justify-between cursor-pointer list-none text-sm font-medium text-[#D9B4FA]'}>Discuss a bulk order <ChevronDown size={17} className="transition-transform group-open:rotate-180" /></summary>
            <form onSubmit={enquire} className="space-y-4 pb-2">
              <div className="grid gap-3 pt-4 sm:grid-cols-2">
                <label className="text-xs text-[#D7E2EA]">Organisation<input required value={organisation} onChange={(event) => setOrganisation(event.target.value)} maxLength={100} placeholder="Your company or school" className={field} /></label>
                <label className="text-xs text-[#D7E2EA]">Quantity, if known<input type="number" min={1} step={1} value={quantity} onChange={(event) => setQuantity(event.target.value)} placeholder="e.g. 50" className={field} /></label>
              </div>
              <label className="block text-xs text-[#D7E2EA]">A little about your idea<textarea value={brief} onChange={(event) => setBrief(event.target.value)} maxLength={1000} rows={2} placeholder="Product, branding, date needed…" className={field} /></label>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#9D4EDD] px-5 py-3 text-sm text-white"><WhatsAppIcon size={15} /> Continue on WhatsApp</button>
            </form>
          </details>
        </FadeIn>
        <FadeIn delay={0.08} className={compact ? 'order-1' : ''}><button type="button" aria-label="Open bulk order form" onClick={() => { if (bulkDetails.current) bulkDetails.current.open = true; }} className="block w-full cursor-pointer rounded-2xl text-left"><img src="/images/showcase-corporate.webp" alt="Corporate and bulk gifting" loading="lazy" width={1000} height={1000} className="w-full aspect-[4/3] rounded-2xl border border-white/10 object-cover transition-colors hover:border-[#C77DFF]/60" /></button></FadeIn>
      </div>
    </section>
  );
};
