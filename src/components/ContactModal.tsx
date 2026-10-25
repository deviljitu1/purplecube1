/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { ContactButton } from './ContactButton.tsx';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('3D Printing Prototype');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Purple Cube! My name is ${name || 'there'}.\nEmail: ${email}\nPhone: ${phone}\nI would like to consult on a ${projectType}: "${message || 'I have a 3D file/concept ready.'}"`
    );
    window.open(`https://wa.me/919111190181?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#14141B] border border-[#9D4EDD]/40 p-5 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {isSent ? (
          <div className="text-center py-10">
            <CheckCircle2 size={52} className="mx-auto text-emerald-400 mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-white mb-2">Your enquiry is ready</h3>
            <p className="text-xs text-[#D7E2EA]/70 mb-6 font-light leading-relaxed">
              Continue on WhatsApp to send your project details to the studio. Your enquiry has not been sent yet.
            </p>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Continue on WhatsApp Directly
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsSent(false);
                  onClose();
                }}
                className="w-full py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9D4EDD] font-mono block mb-1">
                Let&apos;s Build Together
              </span>
              <h3 className="text-2xl font-black text-white">Contact Purple Cube Studio</h3>
              <p className="text-xs text-[#D7E2EA]/60 font-light mt-1">
                Tell us about your 3D printing, CAD modeling, miniature, or bulk order needs.
              </p>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#9D4EDD]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1 font-medium">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your mobile number"
                  className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#9D4EDD]"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#9D4EDD]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1 font-medium">
                Project Category
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#9D4EDD]"
              >
                <option value="Ready-Made Product Order">Ready-Made Product Order</option>
                <option value="Personalised 3D Miniature">Personalised 3D Miniature</option>
                <option value="Custom 3D Slicing & Printing">Custom 3D Slicing &amp; Printing (STL/3MF)</option>
                <option value="Corporate / Institution Bulk Order">Corporate / Institution Bulk Order</option>
                <option value="3D CAD Design & Prototyping">3D CAD Design &amp; Prototyping</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1 font-medium">
                Brief / Message
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Provide dimensions, materials, or upload specifications..."
                className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#9D4EDD]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white text-xs font-semibold uppercase tracking-wider hover:brightness-110 shadow-lg cursor-pointer"
              >
                Prepare Enquiry
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full py-3.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold uppercase tracking-wider hover:bg-[#25D366]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon size={15} />
                <span>Quick WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
