/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { MarqueeSection } from './components/MarqueeSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ReadyMadeProducts } from './components/ReadyMadeProducts.tsx';
import { PersonalizedSection } from './components/PersonalizedSection.tsx';
import { Upload3DFileSection } from './components/Upload3DFileSection.tsx';
import { CorporateBulkSection } from './components/CorporateBulkSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { PolicyPage } from './components/PolicyPage.tsx';
import { POLICIES } from './data/policies.ts';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const policy = POLICIES.find((item) => item.path === window.location.pathname.replace(/\/+$/, ''));
  useEffect(() => {
    const section = document.getElementById(window.location.hash.slice(1));
    if (!section) return;
    const frame = requestAnimationFrame(() => section.scrollIntoView({ block: 'start', behavior: 'instant' }));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0C0C0C] text-white font-sans selection:bg-[#9D4EDD] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* Top Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {policy ? <PolicyPage policy={policy} onOpenContact={() => setIsContactOpen(true)} /> : <>
        {/* 1. HERO SECTION WITH 3-SLIDE SMOOTH SLIDER */}
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. MARQUEE SECTION */}
        <MarqueeSection />

        {/* 3. ABOUT SECTION */}
        <AboutSection onOpenContact={() => setIsContactOpen(true)} />

        {/* PURPLE CUBE CORE SECTION 1: Ready-made products */}
        <ReadyMadeProducts />

        <PersonalizedSection />

        <Upload3DFileSection />

        {/* 4. SERVICES SECTION */}
        <ServicesSection />

        {/* 5. PROJECTS SECTION */}
        <ProjectsSection />

        {/* PURPLE CUBE CORE SECTION 4: Corporate & bulk orders */}
        <CorporateBulkSection />
        </>}
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Contact & Instant Slicing Quote Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
