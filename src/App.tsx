/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { MarqueeSection } from './components/MarqueeSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ReadyMadeProducts } from './components/ReadyMadeProducts.tsx';
import { CorporateBulkSection } from './components/CorporateBulkSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <div
      className="min-h-screen bg-[#0C0C0C] text-white font-sans selection:bg-[#9D4EDD] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* Top Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. HERO SECTION WITH 3-SLIDE SMOOTH SLIDER */}
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. MARQUEE SECTION */}
        <MarqueeSection />

        {/* 3. ABOUT SECTION */}
        <AboutSection onOpenContact={() => setIsContactOpen(true)} />

        {/* PURPLE CUBE CORE SECTION 1: Ready-made products */}
        <ReadyMadeProducts />

        {/* 4. SERVICES SECTION */}
        <ServicesSection />

        {/* 5. PROJECTS SECTION */}
        <ProjectsSection />

        {/* PURPLE CUBE CORE SECTION 4: Corporate & bulk orders */}
        <CorporateBulkSection />
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
