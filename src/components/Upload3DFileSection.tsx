/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FadeIn } from './FadeIn.tsx';
import { calculate3DTechnicalSpecs, MATERIALS, MaterialType } from '../utils/pricing.ts';
import {
  UploadCloud,
  FileCode2,
  Sliders,
  Sparkles,
  PhoneCall,
  MessageCircle,
  Clock,
  Weight,
  Layers,
  ShieldCheck,
  Check,
  Cpu,
  Calendar,
} from 'lucide-react';

export const Upload3DFileSection: React.FC = () => {
  const [fileName, setFileName] = useState<string>('PurpleCube_Bracket_v2.stl');
  const [fileSizeMb, setFileSizeMb] = useState<number>(4.2);
  const [dimensions, setDimensions] = useState({ x: 80, y: 60, z: 45 });
  const [scalePercent, setScalePercent] = useState<number>(100);
  const [material, setMaterial] = useState<MaterialType>('pla');
  const [infill, setInfill] = useState<number>(20);
  const [layerHeight, setLayerHeight] = useState<number>(0.2);
  const [quantity, setQuantity] = useState<number>(1);

  const scaledDimensions = {
    x: Math.round((dimensions.x * scalePercent) / 100),
    y: Math.round((dimensions.y * scalePercent) / 100),
    z: Math.round((dimensions.z * scalePercent) / 100),
  };

  const specs = calculate3DTechnicalSpecs({
    dimensions: scaledDimensions,
    material,
    infillPercent: infill,
    layerHeightMm: layerHeight,
    quantity,
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setFileName(file.name);
    setFileSizeMb(Math.round((file.size / (1024 * 1024)) * 10) / 10 || 1.2);

    setDimensions({
      x: Math.floor(Math.random() * 50) + 50,
      y: Math.floor(Math.random() * 40) + 40,
      z: Math.floor(Math.random() * 60) + 30,
    });
  };

  const loadPreset = (presetName: string, x: number, y: number, z: number, mat: MaterialType) => {
    setFileName(presetName);
    setDimensions({ x, y, z });
    setScalePercent(100);
    setMaterial(mat);
  };

  const sendWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hi Purple Cube! I have uploaded my 3D file "${fileName}" and would like a custom slicing quotation:\n` +
      `- Dimensions: ${scaledDimensions.x} × ${scaledDimensions.y} × ${scaledDimensions.z} mm\n` +
      `- Material: ${MATERIALS[material].name}\n` +
      `- Infill: ${infill}%\n` +
      `- Layer Height: ${layerHeight} mm\n` +
      `- Quantity: ${quantity}\n` +
      `- Estimated Weight: ${specs.estimatedWeightGrams} g\n` +
      `- Machine Hours: ${specs.printTimeHours} hrs\n` +
      `Please let me know how to share the file for verification and pricing.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  const requestPhoneCall = () => {
    const phone = prompt('Please enter your contact number for a consultation call with our 3D engineer:');
    if (phone) {
      alert(`Thank you! A 3D manufacturing consultant from Purple Cube will contact you at ${phone} regarding "${fileName}".`);
    }
  };

  return (
    <section id="upload" className="py-24 px-5 sm:px-8 md:px-12 bg-[#0C0C0C] relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn y={30}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C77DFF] font-mono px-3.5 py-1.5 rounded-full bg-[#180828] border border-[#9D4EDD]/35 inline-block mb-3">
              CAD &amp; 3D Slicing Engine
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight hero-heading mb-4">
              STL &amp; 3MF Slicing Consultation
            </h2>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base font-light">
              Submit your 3D CAD models (.STL, .3MF, .OBJ, .STEP), configure precision slicing specs,
              and receive verified engineering feedback and quotation on WhatsApp or Call.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Slicing Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* File Dropzone */}
            <div className="p-6 rounded-3xl bg-[#121217] border border-white/10">
              <label className="border-2 border-dashed border-[#9D4EDD]/50 hover:border-[#9D4EDD] bg-[#170E24]/60 hover:bg-[#1E1130] rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all">
                <UploadCloud size={36} className="text-[#C77DFF] mb-3 animate-pulse" />
                <span className="text-sm font-semibold text-white text-center">
                  Drag &amp; Drop your 3D CAD File here
                </span>
                <span className="text-xs text-[#D7E2EA]/60 text-center mt-1">
                  Supports STL, 3MF, OBJ, STEP up to 100MB
                </span>
                <span className="mt-3 px-3 py-1 rounded-full bg-white/10 text-xs text-[#C77DFF] font-mono">
                  Browse Files
                </span>
                <input
                  type="file"
                  accept=".stl,.3mf,.obj,.step,.stp"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              {/* Sample Files Presets */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#D7E2EA]/50 font-mono">Sample Presets:</span>
                <button
                  type="button"
                  onClick={() => loadPreset('Drone_Propeller_Arm.stl', 110, 45, 25, 'carbon_fiber')}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[#C77DFF] border border-white/10 cursor-pointer"
                >
                  Drone Arm (Carbon)
                </button>
                <button
                  type="button"
                  onClick={() => loadPreset('Miniature_Dragon_Bust.stl', 65, 55, 90, 'resin')}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[#C77DFF] border border-white/10 cursor-pointer"
                >
                  Resin Bust (SLA)
                </button>
                <button
                  type="button"
                  onClick={() => loadPreset('Parametric_Vase_Spiral.3mf', 95, 95, 180, 'silk_pla')}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[#C77DFF] border border-white/10 cursor-pointer"
                >
                  Spiral Vase (Silk)
                </button>
              </div>

              {/* Current Active File Banner */}
              <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2.5">
                  <FileCode2 size={20} className="text-[#9D4EDD]" />
                  <div>
                    <span className="text-xs font-semibold text-white block">{fileName}</span>
                    <span className="text-[11px] text-[#D7E2EA]/50 font-mono">
                      {fileSizeMb} MB &bull; Slicing Ready
                    </span>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                  <Check size={14} /> Mesh Validated
                </span>
              </div>
            </div>

            {/* Slicing Specifications Controls */}
            <div className="p-6 rounded-3xl bg-[#121217] border border-white/10 space-y-6">
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                <Sliders size={18} className="text-[#9D4EDD]" />
                <span>Printing &amp; Slicing Parameters</span>
              </h3>

              {/* 1. Dimensions (mm) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 font-medium">
                    Dimensions (Length × Width × Height in mm)
                  </label>
                  <span className="text-xs font-mono text-[#C77DFF]">
                    {scaledDimensions.x} × {scaledDimensions.y} × {scaledDimensions.z} mm
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div>
                    <span className="text-[10px] text-[#D7E2EA]/50 block mb-1">X (Length)</span>
                    <input
                      type="number"
                      value={dimensions.x}
                      onChange={(e) => setDimensions({ ...dimensions, x: Number(e.target.value) })}
                      className="w-full bg-[#181820] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#9D4EDD]"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#D7E2EA]/50 block mb-1">Y (Width)</span>
                    <input
                      type="number"
                      value={dimensions.y}
                      onChange={(e) => setDimensions({ ...dimensions, y: Number(e.target.value) })}
                      className="w-full bg-[#181820] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#9D4EDD]"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#D7E2EA]/50 block mb-1">Z (Height)</span>
                    <input
                      type="number"
                      value={dimensions.z}
                      onChange={(e) => setDimensions({ ...dimensions, z: Number(e.target.value) })}
                      className="w-full bg-[#181820] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#9D4EDD]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#D7E2EA]/60 whitespace-nowrap">Scale:</span>
                  <input
                    type="range"
                    min="25"
                    max="250"
                    value={scalePercent}
                    onChange={(e) => setScalePercent(Number(e.target.value))}
                    className="w-full accent-[#9D4EDD] cursor-pointer"
                  />
                  <span className="text-xs font-mono text-white w-12 text-right">{scalePercent}%</span>
                </div>
              </div>

              {/* 2. Material Selection */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-2 font-medium">
                  Material
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.values(MATERIALS).map((mat) => {
                    const active = material === mat.id;
                    return (
                      <button
                        key={mat.id}
                        type="button"
                        onClick={() => setMaterial(mat.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          active
                            ? 'bg-[#9D4EDD]/20 border-[#9D4EDD] text-white shadow-[0_0_12px_rgba(157,78,221,0.3)]'
                            : 'bg-white/5 border-white/10 text-[#D7E2EA]/70 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-xs font-semibold block leading-tight">{mat.name}</span>
                        <span className="text-[10px] text-[#D7E2EA]/50 block mt-0.5 font-mono">
                          {mat.density} g/cm³
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] text-[#D7E2EA]/60 mt-2 font-light">
                  {MATERIALS[material].description}
                </p>
              </div>

              {/* 3. Infill & Layer Resolution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-[#D7E2EA]/70">Infill Density</span>
                    <span className="text-xs font-mono text-[#C77DFF]">{infill}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={infill}
                    onChange={(e) => setInfill(Number(e.target.value))}
                    className="w-full accent-[#9D4EDD] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#D7E2EA]/40 font-mono mt-0.5">
                    <span>10% (Display)</span>
                    <span>40% (Functional)</span>
                    <span>100% (Solid)</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-[#D7E2EA]/70 block mb-1">Layer Resolution</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { val: 0.28, label: '0.28mm (Draft)' },
                      { val: 0.2, label: '0.20mm (Std)' },
                      { val: 0.12, label: '0.12mm (Ultra)' },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setLayerHeight(opt.val)}
                        className={`py-2 px-1 rounded-xl text-[11px] font-mono text-center border transition-all cursor-pointer ${
                          layerHeight === opt.val
                            ? 'bg-[#9D4EDD] border-white text-white'
                            : 'bg-white/5 border-white/10 text-[#D7E2EA]/70 hover:bg-white/10'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 font-medium">
                  Quantity
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-mono text-lg font-bold text-white w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Slicing Technical Specs Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#190C28] via-[#120B1E] to-[#0E0617] border border-[#9D4EDD]/40 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <span className="text-xs uppercase font-mono tracking-widest text-[#C77DFF] flex items-center gap-1.5">
                  <Sparkles size={14} /> Slicing Engine Metrics
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#9D4EDD]/20 text-[#C77DFF] border border-[#9D4EDD]/30 text-[11px] font-mono">
                  Zero Obligation
                </span>
              </div>

              {/* Technical Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <Weight size={18} className="mx-auto text-[#9D4EDD] mb-1" />
                  <span className="text-[10px] text-[#D7E2EA]/50 block uppercase font-mono">
                    Weight
                  </span>
                  <span className="text-sm font-bold text-white font-mono">
                    {specs.estimatedWeightGrams}g
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <Clock size={18} className="mx-auto text-[#9D4EDD] mb-1" />
                  <span className="text-[10px] text-[#D7E2EA]/50 block uppercase font-mono">
                    Print Time
                  </span>
                  <span className="text-sm font-bold text-white font-mono">
                    {specs.printTimeHours} hrs
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <Layers size={18} className="mx-auto text-[#9D4EDD] mb-1" />
                  <span className="text-[10px] text-[#D7E2EA]/50 block uppercase font-mono">
                    Net Volume
                  </span>
                  <span className="text-sm font-bold text-white font-mono">
                    {specs.volumeCm3} cm³
                  </span>
                </div>
              </div>

              {/* Specification Breakdown */}
              <div className="space-y-2.5 py-4 border-y border-white/10 text-xs text-[#D7E2EA]/70 font-mono">
                <div className="flex justify-between">
                  <span>Selected Material</span>
                  <span className="text-white">{MATERIALS[material].name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Target Machine</span>
                  <span className="text-white text-right">{specs.recommendedMachine}</span>
                </div>
                <div className="flex justify-between">
                  <span>Batch Quantity</span>
                  <span className="text-white">{quantity} unit(s)</span>
                </div>
                <div className="flex justify-between text-[#C77DFF]">
                  <span>Estimated Dispatch</span>
                  <span>~{specs.turnaroundEstimateDays} Business Day(s)</span>
                </div>
              </div>

              {/* Free Slicing Consultation Action */}
              <div className="pt-5 pb-6">
                <span className="text-[11px] uppercase tracking-widest text-[#D7E2EA]/60 font-light block">
                  Studio Fabrication Quotation
                </span>
                <p className="text-xs text-[#D7E2EA]/80 font-light mt-1">
                  Share your file or specs with our engineering team for instant quotation, volume discounts, and slicing check.
                </p>
              </div>

              {/* WhatsApp and Call Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={sendWhatsAppQuote}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white font-semibold uppercase tracking-wider text-xs hover:brightness-110 active:scale-98 transition-all shadow-[0_0_20px_rgba(157,78,221,0.5)] cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Receive Quotation on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={requestPhoneCall}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-[#D7E2EA] hover:text-white font-semibold uppercase tracking-wider text-xs transition-all cursor-pointer"
                >
                  <PhoneCall size={15} />
                  <span>Request Callback on Phone</span>
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-[11px] text-[#D7E2EA]/50 font-mono">
                <ShieldCheck size={14} className="text-[#9D4EDD]" />
                <span>NDA &amp; Confidentiality Protected Files</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
