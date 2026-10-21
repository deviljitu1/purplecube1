/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FadeIn } from './FadeIn.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import {
  GraduationCap,
  Building2,
  Briefcase,
  Trophy,
  Send,
  CheckCircle2,
  Sparkles,
  PackageCheck,
  ShieldCheck,
  Clock,
  Layers,
  Palette,
  FileCheck2,
  ArrowRight,
  Check,
} from 'lucide-react';

interface SectorItem {
  id: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  image: string;
}

export const CorporateBulkSection: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('corporate');
  const [volumeTier, setVolumeTier] = useState<string>('200-500');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [wantsNDA, setWantsNDA] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    timeline: 'Within 2 Weeks',
    notes: '',
  });

  const sectors: SectorItem[] = [
    {
      id: 'schools',
      title: 'Schools & STEM Labs',
      tagline: 'Education & Robotics',
      icon: GraduationCap,
      description:
        'Tactile biology models, modular robot chassis, customized learning kits, and university engineering lab parts.',
      deliverables: ['Custom STEM robot chassis', 'Molecule structures', 'Campus emblems'],
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'architects',
      title: 'Architects & Builders',
      tagline: 'Scale Topography & Facades',
      icon: Building2,
      description:
        'High-precision 1:50, 1:100, and 1:200 scale models for masterplans, luxury villas, and client presentations.',
      deliverables: ['Topographical contours', 'Parametric facade details', 'Modular floor layouts'],
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'corporate',
      title: 'Businesses & Corporate Gifting',
      tagline: 'Executive Swag & Trophies',
      icon: Briefcase,
      description:
        'Custom executive gifts, logo-embossed desk organizers, milestone trophies, and client onboarding packages.',
      deliverables: ['Embossed logo trophies', 'Bespoke card holders', 'Branded desk tidies'],
      image:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'events',
      title: 'Events & Exhibitions',
      tagline: 'Centerpieces & Medallions',
      icon: Trophy,
      description:
        'Unique custom trophies, event medallions, branded VIP badges, and interactive booth centerpieces.',
      deliverables: ['Hackathon trophies', 'Speaker commemorative awards', 'Exhibition scale models'],
      image:
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const volumeTiers = [
    {
      id: '50-200',
      label: '50 – 200 pcs',
      badge: 'Pilot & Small Runs',
      discount: '15% Volume Efficiency',
      perk: 'Standard Batch QA + 1 Master Sample',
    },
    {
      id: '200-500',
      label: '200 – 500 pcs',
      badge: 'Institutional Scale',
      discount: '25% Volume Advantage',
      perk: 'Priority Farm Allocation + Custom Pantone',
      popular: true,
    },
    {
      id: '500+',
      label: '500+ pcs',
      badge: 'Enterprise Bulk',
      discount: 'Up to 35% Bulk Tier',
      perk: 'Dedicated CAM Engineer + Custom Packaging',
    },
  ];

  const activeSectorData = sectors.find((s) => s.id === selectedSector) || sectors[2];
  const activeTierData = volumeTiers.find((t) => t.id === volumeTier) || volumeTiers[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openWhatsAppB2B = () => {
    const text = encodeURIComponent(
      `Hello Purple Cube B2B Desk! I am inquiring about Corporate & Bulk 3D Printing:\n` +
        `• Sector: ${activeSectorData.title}\n` +
        `• Volume Tier: ${volumeTier} Units (${activeTierData.discount})\n` +
        `• Organization: ${formData.orgName || 'Corporate Client'}\n` +
        `• Contact: ${formData.contactName || 'Inquirer'} (${formData.phone || 'Phone pending'})\n` +
        `• Desired Timeline: ${formData.timeline}\n` +
        `• NDA Required: ${wantsNDA ? 'Yes' : 'No'}\n` +
        `• Project Notes: ${formData.notes || 'Custom manufacturing discussion'}\n\n` +
        `Please share an official proposal & sample availability.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="corporate" className="py-28 px-4 sm:px-8 md:px-12 bg-[#0B0B0E] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6A0DAD]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#9D4EDD]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeIn y={25}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#180A26] border border-[#9D4EDD]/40 text-[#C77DFF] text-xs font-mono mb-4 shadow-[0_0_15px_rgba(157,78,221,0.25)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Enterprise &bull; Rapid Batch QA &bull; Pan-India Delivery</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Enterprise <span className="text-[#C77DFF]">Additive Manufacturing</span>
            </h2>

            <p className="text-[#D7E2EA]/75 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              High-throughput volume production with dedicated project engineering, ISO-grade dimensional
              inspections, custom Pantone finishes, and bespoke packaging for institutions, builders, and brands.
            </p>
          </div>
        </FadeIn>

        {/* 4 Interactive Sector Cards with Visual Previews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            const active = selectedSector === sector.id;

            return (
              <div
                key={sector.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedSector(sector.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedSector(sector.id);
                  }
                }}
                className={`group relative rounded-3xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden text-left outline-none ${
                  active
                    ? 'bg-gradient-to-b from-[#1C0F2C] via-[#140A20] to-[#0E0617] border-[#C084FC] shadow-[0_0_30px_rgba(168,85,247,0.35)] scale-[1.02]'
                    : 'bg-[#121217]/90 border-white/[0.08] hover:border-[#9D4EDD]/40 hover:bg-[#16161F]'
                }`}
              >
                {/* Sector Thumbnail Image Overlay */}
                <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-4 border border-white/10">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0617] via-[#0E0617]/50 to-transparent" />

                  {/* Icon badge */}
                  <div
                    className={`absolute bottom-2.5 left-2.5 p-2 rounded-xl backdrop-blur-md border ${
                      active
                        ? 'bg-[#9D4EDD] text-white border-white/30 shadow-lg'
                        : 'bg-black/60 text-[#C77DFF] border-white/10'
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Selection check indicator */}
                  {active && (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#25D366] text-black text-[10px] font-mono font-bold flex items-center gap-1 shadow-md">
                      <Check size={11} strokeWidth={3} />
                      <span>SELECTED</span>
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#C77DFF] mb-1">
                    {sector.tagline}
                  </div>
                  <h3 className="font-bold text-base text-white mb-2 group-hover:text-[#F0ABFC] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed mb-4">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/50 font-mono block">
                    Typical Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sector.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-[#D7E2EA]/80 border border-white/[0.05]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE B2B SPECIFICATION WORKBENCH & INQUIRY FORM */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-b from-[#14141C] to-[#0E0E14] border border-white/[0.12] p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          {/* Subtle glow accent */}
          <div className="absolute -top-24 right-10 w-96 h-96 bg-[#9D4EDD]/15 blur-[120px] pointer-events-none" />

          {/* Volume Tier Tab Bar */}
          <div className="pb-8 mb-8 border-b border-white/[0.08]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C77DFF] block mb-1">
                  Step 1: Select Manufacturing Volume
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Production Scale &amp; Tier Benefits
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#D7E2EA]/60">
                <Sparkles size={14} className="text-[#9D4EDD]" />
                <span>Tier discounts apply automatically to batch runs</span>
              </div>
            </div>

            {/* Volume Tier Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {volumeTiers.map((tier) => {
                const isSelected = volumeTier === tier.id;
                return (
                  <div
                    key={tier.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setVolumeTier(tier.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setVolumeTier(tier.id);
                      }
                    }}
                    className={`relative p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#1E0F30] to-[#160A24] border-[#C084FC] shadow-[0_0_20px_rgba(157,78,221,0.3)]'
                        : 'bg-black/40 border-white/[0.07] hover:border-white/20'
                    }`}
                  >
                    {tier.popular && (
                      <span className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-[#9D4EDD] text-white text-[9px] font-mono font-bold uppercase tracking-wider shadow">
                        Most Requested
                      </span>
                    )}

                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-base font-bold text-white">{tier.label}</span>
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? 'border-[#C084FC] bg-[#C084FC] text-black'
                            : 'border-white/20 bg-transparent'
                        }`}
                      >
                        {isSelected && <Check size={10} strokeWidth={3} />}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[#C77DFF] mb-1">
                      {tier.discount}
                    </div>

                    <div className="text-[11px] text-[#D7E2EA]/65 font-light">
                      {tier.perk}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form + Summary 2-Column Split */}
          {submitted ? (
            <div className="text-center py-16 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-5 text-emerald-400">
                <CheckCircle2 size={36} className="animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Corporate RFP Submitted!</h3>
              <p className="text-sm text-[#D7E2EA]/75 mb-6 font-light leading-relaxed">
                Thank you! Our dedicated additive manufacturing engineer will prepare an official batch
                fabrication quotation with material tolerances, Pantone matching details, and courier
                lead times within <strong className="text-white">2 business hours</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-8 text-xs font-mono text-[#D7E2EA]/70 text-left space-y-1.5">
                <div>&bull; Sector: <span className="text-white font-medium">{activeSectorData.title}</span></div>
                <div>&bull; Volume Tier: <span className="text-white font-medium">{volumeTier} Units ({activeTierData.discount})</span></div>
                <div>&bull; Organization: <span className="text-white font-medium">{formData.orgName || 'Corporate Client'}</span></div>
                <div>&bull; Contact: <span className="text-white font-medium">{formData.contactName} ({formData.phone})</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={openWhatsAppB2B}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <WhatsAppIcon size={16} color="#000000" />
                  <span>Connect with B2B Desk on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-colors"
                >
                  Submit Another RFP
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Form Fields (7 cols) */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C77DFF]">
                    Step 2: Project Specifications &amp; Contact
                  </span>
                  <span className="text-[11px] text-[#D7E2EA]/50 font-mono">
                    All CAD files protected under NDA
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1.5 font-medium">
                      Organization / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      placeholder="e.g. Apex Architecture Ltd."
                      className="w-full bg-[#181822] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#9D4EDD] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1.5 font-medium">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g. Procurement Lead / Project Manager"
                      className="w-full bg-[#181822] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#9D4EDD] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1.5 font-medium">
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#181822] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#9D4EDD] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1.5 font-medium">
                      Official Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="procurement@company.com"
                      className="w-full bg-[#181822] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#9D4EDD] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1.5 font-medium">
                      Desired Production Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#181822] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#9D4EDD] transition-colors cursor-pointer"
                    >
                      <option value="Urgent (1 Week)">Urgent (1 Week &bull; Express Farm Run)</option>
                      <option value="Within 2 Weeks">Within 2 Weeks (Standard Production)</option>
                      <option value="1 Month+">1 Month+ (Scheduled Phased Logistics)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1.5 font-medium">
                      Target Sector Focus
                    </label>
                    <div className="w-full bg-[#181822]/60 border border-white/[0.08] rounded-xl px-4 py-3 text-xs text-[#C77DFF] font-mono flex items-center justify-between">
                      <span>{activeSectorData.title}</span>
                      <span className="text-[10px] text-[#D7E2EA]/40">Click sector above to change</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1.5 font-medium">
                    Project Brief &amp; Customization Notes (Logos, Finishes, Packaging)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Specify dimensions, custom embossed logos, Pantone color codes, surface finish (matte, silk, SLA resin), or custom presentation boxes..."
                    className="w-full bg-[#181822] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#9D4EDD] transition-colors"
                  />
                </div>

                {/* NDA Protection Checkbox */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setWantsNDA(!wantsNDA)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setWantsNDA(!wantsNDA);
                    }
                  }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] cursor-pointer select-none"
                >
                  <div
                    className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                      wantsNDA
                        ? 'bg-[#9D4EDD] border-[#9D4EDD] text-white'
                        : 'border-white/30 bg-transparent'
                    }`}
                  >
                    {wantsNDA && <Check size={11} strokeWidth={3} />}
                  </div>
                  <div className="text-xs text-[#D7E2EA]/80 font-light">
                    <strong className="text-white font-medium">CAD Confidentiality &bull; Execute NDA:</strong>{' '}
                    Please provide an official Non-Disclosure Agreement before receiving proprietary STEP / STL models.
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white text-xs font-semibold uppercase tracking-wider hover:brightness-110 active:scale-98 shadow-[0_0_20px_rgba(157,78,221,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Submit RFP &amp; Request Pricing</span>
                  </button>

                  <button
                    type="button"
                    onClick={openWhatsAppB2B}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-mono font-medium tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon size={16} color="#25D366" />
                    <span>WhatsApp B2B Desk</span>
                  </button>
                </div>
              </form>

              {/* Right Column: Live RFP Summary & Enterprise Guarantees (5 cols) */}
              <div className="lg:col-span-5 bg-black/40 border border-white/[0.08] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08] mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#C77DFF] font-mono">
                      Live Configuration
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Tier Applied
                    </span>
                  </div>

                  {/* Summary details */}
                  <div className="space-y-3.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-[#D7E2EA]/60 font-light">Industry Sector:</span>
                      <span className="font-semibold text-white">{activeSectorData.title}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[#D7E2EA]/60 font-light">Production Batch:</span>
                      <span className="font-mono text-[#C77DFF] font-medium">{volumeTier} pcs</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[#D7E2EA]/60 font-light">Volume Pricing Benefit:</span>
                      <span className="font-mono text-emerald-400 font-semibold">{activeTierData.discount}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[#D7E2EA]/60 font-light">Turnaround Window:</span>
                      <span className="text-white">{formData.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Industrial Assurance Checklist */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#C77DFF] font-semibold">
                    Purple Cube Enterprise Guarantees
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-[#D7E2EA]/80 font-light">
                    <ShieldCheck size={15} className="text-[#9D4EDD] shrink-0" />
                    <span>Free pre-production physical prototype sample</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-[#D7E2EA]/80 font-light">
                    <Layers size={15} className="text-[#9D4EDD] shrink-0" />
                    <span>ISO tolerance report &amp; digital calliper batch QA</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-[#D7E2EA]/80 font-light">
                    <Palette size={15} className="text-[#9D4EDD] shrink-0" />
                    <span>Custom Pantone filament &amp; resin shade matching</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-[#D7E2EA]/80 font-light">
                    <PackageCheck size={15} className="text-[#9D4EDD] shrink-0" />
                    <span>Free Pan-India insured delivery &amp; custom branding boxes</span>
                  </div>
                </div>

                {/* Direct quote note */}
                <div className="pt-2 text-[11px] text-[#D7E2EA]/50 font-mono text-center">
                  Need an urgent quotation within 30 minutes? Call our enterprise lead directly at{' '}
                  <a href="tel:+919876543210" className="text-[#C77DFF] hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
