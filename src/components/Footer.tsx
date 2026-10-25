/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PurpleCubeLogo } from './Logo.tsx';
import { Phone, Mail, MapPin, Instagram, Globe, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-[#090909] border-t border-white/10 text-white pt-16 pb-12 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <PurpleCubeLogo size={42} showText={true} />
            <p className="text-sm text-[#D7E2EA]/70 font-light max-w-sm leading-relaxed">
              Purple Cube is a premier 3D printing and digital fabrication studio. From intricate
              sacred Ganpati idols and bespoke personal miniatures to industrial engineering prototypes
              and corporate scale production.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs text-[#D7E2EA]/80 font-mono">
                Studio Farm Online &bull; 18 High-Speed 3D Printers Active
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#9D4EDD] font-mono mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-[#D7E2EA]/70 font-medium">
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About Purple Cube Studio
                </a>
              </li>
              <li>
                <a href="/#products" className="hover:text-white transition-colors">
                  Ready-Made Products
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">
                  Services &amp; Capabilities
                </a>
              </li>
              <li>
                <a href="/#corporate" className="hover:text-white transition-colors">
                  Corporate &amp; Bulk
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Materials & Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#9D4EDD] font-mono mb-4">
              Materials
            </h4>
            <ul className="space-y-2 text-xs text-[#D7E2EA]/70 font-light">
              <li>&bull; PLA+ &amp; Silk Gold PLA</li>
              <li>&bull; Tough Impact PETG</li>
              <li>&bull; 8K High-Detail SLA Resin</li>
              <li>&bull; Flexible TPU 95A Rubber</li>
              <li>&bull; Carbon Fiber Reinforced Nylon</li>
              <li>&bull; Heat-Resistant ABS / ASA</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#9D4EDD] font-mono mb-4">
              Studio Connect
            </h4>
            <div className="space-y-3 text-xs text-[#D7E2EA]/70">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#9D4EDD] shrink-0 mt-0.5" />
                <span>Mowa, Raipur, Chhattisgarh, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <a href="tel:+919111190181" aria-label="Call Purple Cube" className="inline-flex min-h-11 items-center">
                <Phone size={15} className="text-[#9D4EDD] shrink-0" />
                </a>
              <a
                href="https://wa.me/919111190181?text=Hello%20Purple%20Cube!%20I%20am%20interested%20in%203D%20printing%20services."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Purple Cube"
                className="inline-flex min-h-11 items-center text-[#25D366] hover:text-[#25D366]/80 transition-colors"
              >
                <WhatsAppIcon size={15} />
              </a>
                <a href="tel:+919111190181" className="hover:text-white">+91 91111 90181</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#9D4EDD] shrink-0" />
                <a href="mailto:info@purplecube.in">info@purplecube.in</a>
              </div>
              <button
                type="button"
                onClick={onOpenContact}
                className="mt-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white text-xs font-semibold uppercase tracking-wider hover:brightness-110 shadow-md transition-all text-center"
              >
                Request Slicing Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/50 font-mono gap-4 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Purple Cube 3D &bull; All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-center">
            <a href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="/return-exchange-policy" className="hover:text-white transition-colors">
              Return &amp; Exchange Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
