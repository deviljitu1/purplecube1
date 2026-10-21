/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FadeIn } from './FadeIn.tsx';
import { calculateMiniatureTimeline } from '../utils/pricing.ts';
import {
  Upload,
  Users,
  User,
  Heart,
  Sparkles,
  MessageSquare,
  Clock,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export const PersonalizedSection: React.FC = () => {
  // Sub-section {a} Miniature state
  const [miniatureType, setMiniatureType] = useState<'solo' | 'couple' | 'family'>('solo');
  const [miniatureHeight, setMiniatureHeight] = useState<number>(6);
  const [miniatureFinish, setMiniatureFinish] = useState<string>('full_color');
  const [hasPlinth, setHasPlinth] = useState<boolean>(true);
  const [plinthText, setPlinthText] = useState<string>('Pallav & Family');
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);

  // Sub-section {b} Live Product Customizer state
  const [customProductType, setCustomProductType] = useState<'keychain' | 'plaque' | 'organizer' | 'lithophane'>('plaque');
  const [customName, setCustomName] = useState<string>('PURPLE CUBE');
  const [customColor, setCustomColor] = useState<{ name: string; hex: string; glow: string }>({
    name: 'Purple Cube Violet',
    hex: '#9D4EDD',
    glow: 'rgba(157, 78, 221, 0.6)',
  });
  const [customSize, setCustomSize] = useState<'standard' | 'large'>('standard');

  const miniTimeline = calculateMiniatureTimeline({
    type: miniatureType,
    heightInches: miniatureHeight,
    finish: miniatureFinish,
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const newUrls = files.map((file) => URL.createObjectURL(file));
    setUploadedPhotos((prev) => [...prev, ...newUrls].slice(0, 4));
  };

  const removePhoto = (idx: number) => {
    setUploadedPhotos((prev) => prev.filter((_, i) => i !== idx));
  };

  const orderMiniatureWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Purple Cube! I would like to inquire about a Custom 3D Miniature:\n` +
      `- Type: ${miniatureType.toUpperCase()}\n` +
      `- Height: ${miniatureHeight} Inches\n` +
      `- Finish: ${miniatureFinish}\n` +
      `- Plinth Engraving: ${hasPlinth ? plinthText : 'None'}\n` +
      `I have reference photos ready. Please share customization options and quotation.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  const orderCustomProductWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Purple Cube! I designed a personalised ${customProductType.toUpperCase()}:\n` +
      `- Embossed Text: "${customName}"\n` +
      `- Filament Color: ${customColor.name}\n` +
      `- Size: ${customSize.toUpperCase()}\n` +
      `Please let me know how to place the custom order.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="personalised" className="py-24 px-5 sm:px-8 md:px-12 bg-[#0C0C0C] relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn y={30}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C77DFF] font-mono px-3.5 py-1.5 rounded-full bg-[#180828] border border-[#9D4EDD]/35 inline-block mb-3">
              Bespoke Personalization
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight hero-heading mb-4">
              Personalised Miniatures &amp; Custom Products
            </h2>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base font-light">
              Transform your photographs into lifelike 3D miniature sculptures, or craft
              custom-embossed desk organizers and accessories with live interactive preview.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* ========================================================= */}
          {/* SUB-SECTION {a}: PERSONALISED 3D MINIATURES */}
          {/* ========================================================= */}
          <FadeIn x={-30} duration={0.8}>
            <div className="h-full flex flex-col justify-between rounded-3xl bg-[#121217] border border-white/10 p-6 sm:p-8 hover:border-[#9D4EDD]/40 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-[#6A0DAD]/30 text-[#C77DFF] flex items-center justify-center font-bold text-sm">
                      {'{a}'}
                    </span>
                    <div>
                      <h3 className="font-bold text-xl text-white">Custom 3D Miniatures</h3>
                      <p className="text-xs text-[#D7E2EA]/60">Sculpted from your photos</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    SLA Resin Precision
                  </span>
                </div>

                {/* 1. Miniature Type Selector */}
                <div className="mb-6">
                  <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-2 font-medium">
                    1. Choose Subject
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'solo', label: 'Solo Miniature', icon: User },
                      { id: 'couple', label: 'Couple Miniature', icon: Heart },
                      { id: 'family', label: 'Family / Pets', icon: Users },
                    ].map((item) => {
                      const Icon = item.icon;
                      const active = miniatureType === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setMiniatureType(item.id as any)}
                          className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                            active
                              ? 'bg-gradient-to-br from-[#6A0DAD]/40 to-[#9D4EDD]/20 border-[#9D4EDD] text-white shadow-[0_0_15px_rgba(157,78,221,0.3)]'
                              : 'bg-white/5 border-white/10 text-[#D7E2EA]/70 hover:bg-white/10'
                          }`}
                        >
                          <Icon size={18} className={active ? 'text-[#C77DFF]' : 'text-white/60'} />
                          <span className="text-xs font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Photo Upload Dropzone */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 font-medium">
                      2. Reference Photos (Front, Profile, Expression)
                    </label>
                    <span className="text-[11px] text-[#9D4EDD] font-mono">Max 4 photos</span>
                  </div>

                  <label className="border-2 border-dashed border-[#9D4EDD]/40 hover:border-[#9D4EDD] bg-[#161220]/60 rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-[#1f1730]">
                    <Upload size={24} className="text-[#9D4EDD] mb-2 animate-bounce" />
                    <span className="text-xs font-semibold text-white">
                      Click to upload photos for sculpting
                    </span>
                    <span className="text-[11px] text-[#D7E2EA]/60 mt-1">
                      Clear facial lighting &bull; JPEG, PNG or WebP
                    </span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>

                  {/* Photo Thumbnails */}
                  {uploadedPhotos.length > 0 && (
                    <div className="flex items-center gap-3 mt-3">
                      {uploadedPhotos.map((url, i) => (
                        <div key={i} className="relative w-16 h-16 rounded-xl overflow-hidden border border-white/20 group">
                          <img src={url} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removePhoto(i)}
                            className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. Height & Finish */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-2 font-medium">
                      Height
                    </label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[4, 6, 8, 10].map((h) => (
                        <button
                          key={h}
                          type="button"
                          onClick={() => setMiniatureHeight(h)}
                          className={`py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            miniatureHeight === h
                              ? 'bg-[#9D4EDD] border-white text-white'
                              : 'bg-white/5 border-white/10 text-[#D7E2EA]/70 hover:bg-white/10'
                          }`}
                        >
                          {h}&quot;
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-2 font-medium">
                      Finish Type
                    </label>
                    <select
                      value={miniatureFinish}
                      onChange={(e) => setMiniatureFinish(e.target.value)}
                      className="w-full bg-[#181820] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#9D4EDD]"
                    >
                      <option value="full_color">Full-Color Artisan Hand-Painted</option>
                      <option value="monochrome_bronze">Antique Bronze Patina</option>
                      <option value="monochrome_gold">Royal Silk Gold</option>
                      <option value="monochrome_white">Sculptor Ivory Marble</option>
                    </select>
                  </div>
                </div>

                {/* 4. Plinth Engraving */}
                <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-white">
                      <input
                        type="checkbox"
                        checked={hasPlinth}
                        onChange={(e) => setHasPlinth(e.target.checked)}
                        className="rounded border-white/20 text-[#9D4EDD] focus:ring-0"
                      />
                      <span>Include Custom Wooden / Acrylic Plinth Base with Engraving</span>
                    </label>
                  </div>
                  {hasPlinth && (
                    <input
                      type="text"
                      value={plinthText}
                      onChange={(e) => setPlinthText(e.target.value)}
                      placeholder="e.g. Rahul &amp; Priya &bull; 14.02.2026"
                      maxLength={32}
                      className="w-full bg-[#121217] border border-white/15 rounded-xl px-3 py-2 text-xs text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-[#9D4EDD]"
                    />
                  )}
                </div>
              </div>

              {/* Consultation Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#C77DFF] uppercase tracking-widest block font-mono">
                    Turnaround: ~{miniTimeline.turnaroundDays} Days
                  </span>
                  <span className="text-xs text-[#D7E2EA]/70 font-mono">
                    8K SLA UV Resin &bull; Hand-Painted
                  </span>
                </div>

                <button
                  type="button"
                  onClick={orderMiniatureWhatsApp}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white text-xs font-semibold uppercase tracking-wider hover:brightness-110 shadow-lg cursor-pointer"
                >
                  <MessageSquare size={14} />
                  <span>Consult on WhatsApp</span>
                </button>
              </div>
            </div>
          </FadeIn>

          {/* ========================================================= */}
          {/* SUB-SECTION {b}: LIVE 3D PRODUCT CUSTOMIZER & PREVIEWER */}
          {/* ========================================================= */}
          <FadeIn x={30} duration={0.8}>
            <div className="h-full flex flex-col justify-between rounded-3xl bg-[#121217] border border-white/10 p-6 sm:p-8 hover:border-[#9D4EDD]/40 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-[#6A0DAD]/30 text-[#C77DFF] flex items-center justify-center font-bold text-sm">
                      {'{b}'}
                    </span>
                    <div>
                      <h3 className="font-bold text-xl text-white">Live Product Previewer</h3>
                      <p className="text-xs text-[#D7E2EA]/60">Customize name, color &amp; preview</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#9D4EDD]/20 text-[#C77DFF] border border-[#9D4EDD]/30 flex items-center gap-1 font-mono">
                    <Sparkles size={12} />
                    Live 3D View
                  </span>
                </div>

                {/* Product Type Switcher */}
                <div className="mb-4">
                  <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-2 font-medium">
                    Select Product Template
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'plaque', label: 'Desk Plaque', sub: 'Executive' },
                      { id: 'keychain', label: '3D Keychain', sub: 'Custom Tag' },
                      { id: 'organizer', label: 'Desk Organiser', sub: 'Hex Tidy' },
                      { id: 'lithophane', label: 'Photo Frame', sub: 'Backlit' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setCustomProductType(p.id as any)}
                        className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                          customProductType === p.id
                            ? 'bg-[#9D4EDD] border-white text-white shadow-[0_0_10px_rgba(157,78,221,0.4)]'
                            : 'bg-white/5 border-white/10 text-[#D7E2EA]/70 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-xs font-semibold block">{p.label}</span>
                        <span className="text-[10px] opacity-75 font-mono">{p.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name / Text Input */}
                <div className="mb-4">
                  <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-2 font-medium">
                    Enter Name or Text to Emboss (Live 3D Preview)
                  </label>
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    maxLength={16}
                    placeholder="e.g. PALLAV or PURPLE CUBE"
                    className="w-full bg-[#181820] border-2 border-[#9D4EDD]/50 focus:border-[#C77DFF] rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-wider text-white focus:outline-none transition-colors shadow-inner"
                  />
                </div>

                {/* Filament Colors */}
                <div className="mb-5">
                  <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-2 font-medium">
                    Select Filament Color: <span className="text-[#C77DFF]">{customColor.name}</span>
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { name: 'Purple Cube Violet', hex: '#9D4EDD', glow: 'rgba(157, 78, 221, 0.6)' },
                      { name: 'Silk Royal Gold', hex: '#F59E0B', glow: 'rgba(245, 158, 11, 0.6)' },
                      { name: 'Stealth Onyx Black', hex: '#1E1E24', glow: 'rgba(30, 30, 36, 0.6)' },
                      { name: 'Glacier Pure White', hex: '#F8FAFC', glow: 'rgba(248, 250, 252, 0.6)' },
                      { name: 'Cyber Neon Cyan', hex: '#06B6D4', glow: 'rgba(6, 182, 212, 0.6)' },
                      { name: 'Crimson Lava Red', hex: '#EF4444', glow: 'rgba(239, 68, 68, 0.6)' },
                    ].map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setCustomColor(c)}
                        title={c.name}
                        className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                          customColor.name === c.name
                            ? 'border-white scale-125 shadow-lg'
                            : 'border-white/20 opacity-70 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                </div>

                {/* Real-time 3D Product Interactive Canvas Preview */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gradient-to-b from-[#1E122C] to-[#0A0512] border border-[#9D4EDD]/40 p-4 flex flex-col items-center justify-center shadow-inner group">
                  <div className="absolute inset-0 bg-[radial-gradient(#9D4EDD_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

                  <div
                    className="relative transition-all duration-300 transform group-hover:rotate-1 group-hover:scale-105"
                    style={{ perspective: '800px' }}
                  >
                    <div
                      className="px-8 py-5 rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: '#120B1E',
                        borderColor: customColor.hex,
                        boxShadow: `0 15px 35px -5px ${customColor.glow}, 0 0 15px inset ${customColor.hex}33`,
                        transform: 'rotateX(15deg) rotateY(-8deg)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full animate-ping"
                          style={{ backgroundColor: customColor.hex }}
                        />
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#D7E2EA]/70">
                          {customProductType.toUpperCase()} &bull; 3D PRINTED
                        </span>
                      </div>

                      <span
                        className="font-black text-2xl sm:text-3xl tracking-widest uppercase transition-all duration-200 select-none"
                        style={{
                          color: customColor.hex,
                          textShadow: `1px 1px 0px #fff, 2px 2px 0px ${customColor.hex}99, 3px 3px 0px #000, 4px 4px 10px ${customColor.glow}`,
                        }}
                      >
                        {customName || 'PURPLE CUBE'}
                      </span>

                      <span className="text-[9px] text-white/50 font-mono mt-1">
                        High-Precision Embossing &bull; 0.16mm Layering
                      </span>
                    </div>
                  </div>

                  <span className="absolute bottom-2 right-3 text-[10px] text-[#D7E2EA]/50 font-mono">
                    Live Extrusion Preview
                  </span>
                </div>
              </div>

              {/* Consultation Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[11px] text-[#C77DFF] uppercase tracking-widest block font-mono">
                    Fabrication Status
                  </span>
                  <span className="text-xs text-[#D7E2EA]/70 font-mono">
                    Custom Laser / 3D Embossed
                  </span>
                </div>

                <button
                  type="button"
                  onClick={orderCustomProductWhatsApp}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white text-xs font-semibold uppercase tracking-wider hover:brightness-110 shadow-lg cursor-pointer"
                >
                  <MessageSquare size={14} />
                  <span>Send Design to WhatsApp</span>
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
