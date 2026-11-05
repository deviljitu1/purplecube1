/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { FadeIn } from './FadeIn.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const PersonalizedSection: React.FC = () => {
  const [subject, setSubject] = useState('Solo');
  const [height, setHeight] = useState('6 inches');
  const [photos, setPhotos] = useState<string[]>([]);
  const photoUrls = useRef<string[]>([]);
  const miniatureDetails = useRef<HTMLDetailsElement>(null);
  const productDetails = useRef<HTMLDetailsElement>(null);
  const [photoError, setPhotoError] = useState('');
  const [product, setProduct] = useState('Keychain');
  const [name, setName] = useState('YOUR NAME');
  const [colour, setColour] = useState('#9D4EDD');
  const [size, setSize] = useState('Standard');
  const colours = [
    { name: 'Violet', hex: '#9D4EDD' }, { name: 'Gold', hex: '#EAB308' },
    { name: 'Black', hex: '#27272A' }, { name: 'White', hex: '#F1F5F9' },
  ];

  useEffect(() => () => photoUrls.current.forEach((url) => URL.revokeObjectURL(url)), []);

  const choosePhotos = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const valid = files.filter((file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type) && file.size <= 10 * 1024 * 1024);
    setPhotoError(valid.length !== files.length ? 'Choose JPEG, PNG or WebP photos up to 10 MB each.' : '');
    photoUrls.current.forEach((url) => URL.revokeObjectURL(url));
    photoUrls.current = valid.slice(0, 4).map((file) => URL.createObjectURL(file));
    setPhotos(photoUrls.current);
  };

  const enquire = (text: string) => window.open(`https://wa.me/919111190181?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  const field = 'w-full rounded-xl border border-white/15 bg-[#18151F] px-3 py-3 text-sm text-white focus:border-[#C77DFF]';

  return (
    <section id="personalised" className="px-5 pb-4 pt-10 sm:px-8 sm:pb-5 sm:pt-12">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-7 max-w-3xl">
            <h2 className="hero-heading !text-2xl font-bold tracking-tight sm:!text-3xl">More Than Just 3D Printing.</h2>
            <p className="mt-2 text-base font-semibold text-[#C77DFF]">We Create Possibilities.</p>
          </div>
        </FadeIn>
        <div className="grid items-start gap-7 md:grid-cols-2 md:gap-8">
          <FadeIn>
            <button type="button" aria-label="Open miniature order form" onClick={() => { if (miniatureDetails.current) miniatureDetails.current.open = true; }} className="block w-full cursor-pointer rounded-2xl text-left"><img src="/images/showcase-miniature.webp" alt="Personalised miniature created from a portrait" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover transition-colors hover:border-[#C77DFF]/60" /></button>
            <h3 className="mt-5 min-h-7 !text-xl font-semibold leading-7 text-white"><button type="button" onClick={() => { if (miniatureDetails.current) miniatureDetails.current.open = true; }} className="cursor-pointer text-left hover:text-[#D9B4FA]">Your photo. Your miniature.</button></h3>
            <details ref={miniatureDetails} name="personalisation" className="group mt-4">
              <summary className="order-cta">Create a miniature <ChevronDown size={18} className="transition-transform group-open:rotate-180" /></summary>
              <form className="space-y-4 pt-5 pb-2" onSubmit={(event) => { event.preventDefault(); enquire(`Hello Purple Cube! I'd like a ${subject.toLowerCase()} miniature, ${height} tall. I have reference photos to attach in this chat. Please share finishes and a quotation.`); }}>
                <div className="grid grid-cols-2 gap-3">
                  <label className="text-xs text-[#D7E2EA]">Subject<select value={subject} onChange={(event) => setSubject(event.target.value)} className={`${field} mt-2`}><option>Solo</option><option>Couple</option><option>Family</option></select></label>
                  <label className="text-xs text-[#D7E2EA]">Height<select value={height} onChange={(event) => setHeight(event.target.value)} className={`${field} mt-2`}><option>4 inches</option><option>6 inches</option><option>8 inches</option><option>10 inches</option></select></label>
                </div>
                <label className="block text-xs text-[#D7E2EA]">Reference photos<input type="file" multiple accept="image/jpeg,image/png,image/webp" onChange={choosePhotos} className="block w-full mt-2 text-xs text-[#D7E2EA] file:mr-3 file:rounded-full file:border-0 file:bg-[#392348] file:px-4 file:py-3 file:text-[#E5CCFA]" /></label>
                <p className="text-xs leading-relaxed text-[#D7E2EA]/65">Up to 4 well-lit photos, 10 MB each; 1000px+ recommended. Attach them in WhatsApp to send.</p>
                {photoError && <p role="alert" className="text-xs text-rose-300">{photoError}</p>}
                {photos.length > 0 && <div className="flex gap-2">{photos.map((url, index) => <img key={url} src={url} alt={`Reference photo ${index + 1}`} className="h-14 w-14 object-cover rounded-lg" />)}</div>}
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#9D4EDD] px-5 py-3 text-sm text-white"><WhatsAppIcon size={15} /> Discuss my miniature</button>
              </form>
            </details>
          </FadeIn>
          <FadeIn delay={0.08}>
            <button type="button" aria-label="Open product personalisation form" onClick={() => { if (productDetails.current) productDetails.current.open = true; }} className="block w-full cursor-pointer rounded-2xl text-left"><img src="/images/showcase-lifestyle.webp" alt="3D printed sculptural lamp and pastel planter" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover transition-colors hover:border-[#C77DFF]/60" /></button>
            <h3 className="mt-5 min-h-7 !text-xl font-semibold leading-7 text-white"><button type="button" onClick={() => { if (productDetails.current) productDetails.current.open = true; }} className="cursor-pointer text-left hover:text-[#D9B4FA]">Everyday objects, your way.</button></h3>
            <details ref={productDetails} name="personalisation" className="group mt-4">
              <summary className="order-cta">Personalise a product <ChevronDown size={18} className="transition-transform group-open:rotate-180" /></summary>
              <form className="space-y-4 pt-5 pb-2" onSubmit={(event) => { event.preventDefault(); enquire(`Hello Purple Cube! I'd like a personalised ${product.toLowerCase()}.\nName: ${name}\nColour: ${colours.find((item) => item.hex === colour)?.name}\nSize: ${size}\nPlease share options and a quotation.`); }}>
                <div className="grid grid-cols-2 gap-3">
                  <label className="text-xs text-[#D7E2EA]">Product<select value={product} onChange={(event) => setProduct(event.target.value)} className={`${field} mt-2`}><option>Keychain</option><option>Desk plaque</option><option>Desk organiser</option><option>Photo frame</option></select></label>
                  <label className="text-xs text-[#D7E2EA]">Size<select value={size} onChange={(event) => setSize(event.target.value)} className={`${field} mt-2`}><option>Standard</option><option>Large</option></select></label>
                </div>
                <label className="block text-xs text-[#D7E2EA]">Your name or text<input required value={name} onChange={(event) => setName(event.target.value)} maxLength={16} className={`${field} mt-2`} /></label>
                <div role="group" aria-label="Product colour" className="flex gap-2">{colours.map((item) => <button key={item.hex} type="button" aria-label={item.name} aria-pressed={colour === item.hex} onClick={() => setColour(item.hex)} className={`h-10 w-10 rounded-full border-2 ${colour === item.hex ? 'border-[#C77DFF] ring-2 ring-[#C77DFF]/30 ring-offset-2 ring-offset-[#0C0C0C]' : 'border-white/25'}`} style={{ backgroundColor: item.hex }} />)}</div>
                <div className="flex min-h-24 items-center justify-center rounded-xl bg-[#16101F] p-5 [perspective:600px]" aria-label="Personalised text preview"><span className="max-w-full break-all text-center text-xl font-bold tracking-wider [transform:rotateX(12deg)_rotateY(-6deg)]" style={{ color: colour, textShadow: '1px 1px 0 #ddd, 3px 3px 0 #301D42, 5px 7px 12px #000' }}>{name || 'YOUR NAME'}</span></div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#9D4EDD] px-5 py-3 text-sm text-white">Enquire about this design <ArrowUpRight size={15} /></button>
              </form>
            </details>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
