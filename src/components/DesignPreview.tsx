import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { CollectionDesign } from '../data/productCategories.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const DesignPreview: React.FC<{ design: CollectionDesign; collection: string; onClose: () => void }> = ({ design, collection, onClose }) => {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { element?.close(); document.body.style.overflow = previousOverflow; };
  }, []);

  const enquiry = encodeURIComponent(`Hello Purple Cube! I'm interested in ${design.name} from ${collection}. Please share size, colour and finish options, feasibility and a quotation.`);
  return (
    <dialog ref={dialog} aria-labelledby="design-preview-title" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} className="fixed inset-0 m-auto max-h-[90svh] w-[calc(100%_-_32px)] max-w-3xl overflow-y-auto rounded-2xl border border-[#B879F2]/40 bg-[#151019] p-0 text-white shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm">
      <div className="relative p-4 sm:p-6">
        <button type="button" aria-label="Close design preview" onClick={onClose} className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/75 text-white"><X size={20} /></button>
        <div className="grid items-center gap-5 sm:grid-cols-2">
          <div className="rounded-xl bg-[radial-gradient(ellipse_at_center,#47215D,#100D14)] p-2">
            <img src={design.image} alt={design.name} className="max-h-[52svh] sm:max-h-[65svh] w-full object-contain" />
          </div>
          <div>
            <span className="text-xs text-[#C77DFF]">{collection}</span>
            <h3 id="design-preview-title" className="mt-2 font-semibold leading-tight">{design.name}</h3>
            <p className="mt-3 leading-relaxed text-[#D7E2EA]/75">Discuss this design with the studio. We’ll confirm the size, material, finish and price before you order.</p>
            <a href={`https://wa.me/919111190181?text=${enquiry}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#9D4EDD] px-5 py-3 text-sm font-medium text-white hover:bg-[#AD63E8]"><WhatsAppIcon size={18} /> Enquire on WhatsApp</a>
          </div>
        </div>
      </div>
    </dialog>
  );
};
