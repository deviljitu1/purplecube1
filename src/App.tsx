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
import { CursorGlow } from './components/CursorGlow.tsx';
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
      className="app-surface min-h-screen text-white font-sans selection:bg-[#9D4EDD] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      <CursorGlow />
      {/* Top Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {policy ? <PolicyPage policy={policy} onOpenContact={() => setIsContactOpen(true)} /> : <>
        {/* 1. HERO SECTION WITH 3-SLIDE SMOOTH SLIDER */}
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. MARQUEE SECTION */}
        <MarqueeSection />

        {/* 3. PERSONALISED GIFTS SECTION */}
        <div>
          <PersonalizedSection />
          <div className="px-5 pb-10 sm:px-8 sm:pb-12">
            <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-2 md:gap-8">
              <Upload3DFileSection compact />
              <CorporateBulkSection compact />
            </div>
          </div>
        </div>

        {/* 4. READY-MADE PRODUCTS */}
        <ReadyMadeProducts />

        {/* 5. ABOUT SECTION */}
        <AboutSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 4. SERVICES SECTION */}
        <ServicesSection />

        {/* 5. PROJECTS SECTION */}
        <ProjectsSection />

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
