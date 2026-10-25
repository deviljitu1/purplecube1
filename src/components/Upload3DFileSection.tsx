/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, X } from 'lucide-react';
import { FadeIn } from './FadeIn.tsx';
import { MATERIALS, MaterialType } from '../utils/pricing.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const Upload3DFileSection: React.FC = () => {
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const [material, setMaterial] = useState<MaterialType>('pla');
  const [quantity, setQuantity] = useState(1);
  const [dimensions, setDimensions] = useState('');
  const [referenceImages, setReferenceImages] = useState<{ name: string; url: string }[]>([]);
  const [imageError, setImageError] = useState('');
  const referenceUrls = useRef<string[]>([]);
  useEffect(() => () => referenceUrls.current.forEach((url) => URL.revokeObjectURL(url)), []);
  const field = 'w-full mt-2 rounded-xl border border-white/15 bg-[#18151F] px-3 py-3 text-sm text-white';

  const chooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) { setFileName(''); return; }
    if (!/\.(stl|3mf|obj|step|stp)$/i.test(file.name) || file.size > 50 * 1024 * 1024) {
      setFileError('Choose an STL, 3MF, OBJ or STEP file up to 50 MB.');
      setFileName('');
      event.target.value = '';
      return;
    }
    setFileError('');
    setFileName(file.name);
  };

  const enquire = (event: React.FormEvent) => {
    event.preventDefault();
    const text = `Hello Purple Cube! I'd like a 3D printing quote.\n3D file: ${fileName || (referenceImages.length ? 'Please help create a model from my reference images' : 'I will share a model or reference in this chat')}\nReference images: ${referenceImages.length ? referenceImages.map((image) => image.name).join(', ') : 'None selected'}\nMaterial: ${MATERIALS[material].name}\nQuantity: ${quantity}\nDimensions: ${dimensions || 'Please advise'}\nI will attach my selected files and reference images here for review.`;
    window.open(`https://wa.me/919111190181?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const chooseImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const valid = files.filter((file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type) && file.size <= 10 * 1024 * 1024);
    setImageError(files.length > 4 || valid.length !== files.length ? 'Choose up to 4 JPEG, PNG or WebP images, up to 10 MB each.' : '');
    referenceUrls.current.forEach((url) => URL.revokeObjectURL(url));
    const images = valid.slice(0, 4).map((file) => ({ name: file.name, url: URL.createObjectURL(file) }));
    referenceUrls.current = images.map((image) => image.url);
    setReferenceImages(images);
    event.target.value = '';
  };

  const removeImage = (url: string) => {
    URL.revokeObjectURL(url);
    referenceUrls.current = referenceUrls.current.filter((item) => item !== url);
    setReferenceImages((images) => images.filter((image) => image.url !== url));
  };

  return (
    <section id="upload" className="px-5 sm:px-8 md:px-12 py-16 sm:py-20 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        <FadeIn><img src="/images/hero-studio.webp" alt="3D printer producing a violet spiral vase" loading="lazy" width={1672} height={941} className="w-full aspect-[4/3] rounded-2xl object-cover object-[75%_center]" /></FadeIn>
        <FadeIn>
          <h2 className="hero-heading mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Have a 3D file?<br />Let's print it.</h2>
          <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-[#D7E2EA]/80">Share a 3D model or reference photo and a few details. We'll help with materials and send a quotation on WhatsApp.</p>
          <p className="mt-4 text-xs font-mono text-[#C4B3D4]">STL / 3MF / OBJ / STEP</p>
          <details className="group mt-6">
            <summary className="order-cta">Get a printing quote <ChevronDown size={18} className="transition-transform group-open:rotate-180" /></summary>
            <form onSubmit={enquire} className="space-y-4 pt-5 pb-2">
              <label className="block text-xs text-[#D7E2EA]">Your 3D file<input type="file" accept=".stl,.3mf,.obj,.step,.stp" onChange={chooseFile} className="block w-full mt-2 text-xs text-[#D7E2EA] file:mr-3 file:rounded-full file:border-0 file:bg-[#392348] file:px-4 file:py-3 file:text-[#E5CCFA]" /></label>
              {fileError && <p role="alert" className="text-xs text-rose-300">{fileError}</p>}
              <div className="grid grid-cols-2 gap-3">
                <label className="text-xs text-[#D7E2EA]">Material<select value={material} onChange={(event) => setMaterial(event.target.value as MaterialType)} className={field}>{Object.values(MATERIALS).map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
                <label className="text-xs text-[#D7E2EA]">Quantity<input type="number" required min={1} max={10000} step={1} value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} className={field} /></label>
              </div>
              <label className="block text-xs text-[#D7E2EA]">Dimensions, if known<input value={dimensions} onChange={(event) => setDimensions(event.target.value)} placeholder="e.g. 80 × 60 × 45 mm" maxLength={100} className={field} /></label>
              <label className="block text-xs text-[#D7E2EA]">Reference images (optional)<input type="file" multiple accept="image/jpeg,image/png,image/webp" onChange={chooseImages} className="block w-full mt-2 text-xs text-[#D7E2EA] file:mr-3 file:rounded-full file:border-0 file:bg-[#392348] file:px-4 file:py-3 file:text-[#E5CCFA]" /></label>
              <p className="text-xs leading-relaxed text-[#D7E2EA]/65">No 3D file? Send a photo of what you want to make. Up to 4 images, 10 MB each.</p>
              {imageError && <p role="alert" className="text-xs text-rose-300">{imageError}</p>}
              {referenceImages.length > 0 && <div className="flex flex-wrap gap-3">{referenceImages.map((image) => <div key={image.url} className="relative"><img src={image.url} alt={`Reference: ${image.name}`} className="h-20 w-20 rounded-lg object-cover border border-white/15" /><button type="button" aria-label={`Remove reference image ${image.name}`} onClick={() => removeImage(image.url)} className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#392348] border border-white/25 text-white"><X size={13} /></button></div>)}</div>}
              <p className="text-xs leading-relaxed text-[#D7E2EA]/65">3D files: up to 50 MB. Files and images stay on your device; attach them in WhatsApp to send.</p>
              <button type="submit" disabled={!!fileError} className="inline-flex items-center gap-2 rounded-full bg-[#9D4EDD] px-5 py-3 text-sm text-white disabled:opacity-50"><WhatsAppIcon size={15} /> Request quotation</button>
            </form>
          </details>
          <a href="tel:+919111190181" className="mt-3 inline-flex items-center gap-2 text-xs text-[#D7E2EA]/75 hover:text-white">Prefer to talk? Call the studio <ArrowUpRight size={13} /></a>
        </FadeIn>
      </div>
    </section>
  );
};
