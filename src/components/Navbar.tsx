/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PurpleCubeLogo } from './Logo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '/#products' },
    { label: 'Personalise', href: '/#personalised' },
    { label: 'Print a File', href: '/#upload' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Corporate', href: '/#corporate' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 md:px-8 py-3 sm:py-4 pointer-events-none transition-all duration-300"
    >
      <nav
        aria-label="Main Navigation"
        className={`max-w-6xl mx-auto rounded-full px-2.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0C0C0C]/85 backdrop-blur-2xl border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'bg-[#0C0C0C]/65 backdrop-blur-xl border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
        }`}
      >
        {/* Official Purple Cube Logo Emblem with Think • Design • Print */}
        <a href="/" className="flex min-w-0 items-center gap-3 group select-none">
          <PurpleCubeLogo size={42} showText={true} />
        </a>

        {/* Desktop Navigation Pill Container (lg+) */}
        <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/75 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons: WhatsApp & Direct Contact */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          <a
            href="https://wa.me/919876543210?text=Hello%20Purple%20Cube!%20I%20am%20interested%20in%203D%20printing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 sm:h-auto sm:w-auto items-center justify-center gap-1.5 sm:px-3 sm:py-1.5 text-[#25D366] hover:opacity-80 text-xs font-mono font-medium tracking-wide transition-opacity"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon size={28} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white text-xs font-semibold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(157,78,221,0.4)] cursor-pointer"
          >
            <span>Contact</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Hamburger Toggle (Mobile & Tablet) */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#D7E2EA] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile & Small Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden mt-3 max-w-6xl mx-auto bg-[#0E0E14]/95 border border-white/[0.12] rounded-3xl p-5 sm:p-6 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-xs uppercase tracking-widest text-[#C77DFF] font-mono">
                Studio Directory
              </span>
              <span className="text-[11px] text-[#D7E2EA]/75 font-mono">
                Think &bull; Design &bull; Print
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl bg-white/[0.04] hover:bg-[#9D4EDD]/20 text-[#D7E2EA] hover:text-white text-xs sm:text-sm uppercase font-mono font-medium tracking-wider transition-colors text-center border border-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white font-medium uppercase tracking-widest text-center text-xs sm:text-sm shadow-[0_0_20px_rgba(157,78,221,0.5)] cursor-pointer"
              >
                Direct Studio Consultation
              </button>

              <a
                href="https://wa.me/919876543210?text=Hello%20Purple%20Cube!%20I%20am%20interested%20in%203D%20printing%20services."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/35 text-[#25D366] font-medium uppercase tracking-widest text-center text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp Studio</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
