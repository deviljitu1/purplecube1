/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FadeIn } from './FadeIn.tsx';
import { ShoppingBag, Eye, Star, Sparkles, Check, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export interface Product {
  id: string;
  name: string;
  category: 'ganpati' | 'desk' | 'vases' | 'fidgets' | 'miniatures' | 'architectural';
  categoryLabel: string;
  rating: number;
  reviewsCount: number;
  description: string;
  material: string;
  dimensions: string;
  colors: { name: string; hex: string }[];
  image: string;
  isBestseller?: boolean;
}

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'ganpati-silk-gold',
    name: 'Artisan Vinayaka Idol',
    category: 'ganpati',
    categoryLabel: 'Ganpati Idols',
    rating: 4.9,
    reviewsCount: 84,
    description: 'Intricately 3D-sculpted Lord Ganesha with micro-ornamentation, printed in dual-tone Silk Gold & Royal Purple PLA with satin finish.',
    material: 'Premium Silk PLA (Eco-friendly)',
    dimensions: '140 × 95 × 180 mm',
    colors: [
      { name: 'Silk Gold', hex: '#EAB308' },
      { name: 'Royal Purple', hex: '#6A0DAD' },
      { name: 'Marble White', hex: '#F1F5F9' },
    ],
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
  },
  {
    id: 'hex-desk-organizer',
    name: 'Hex Modular Desk Tidy & Pen Stand',
    category: 'desk',
    categoryLabel: 'Desk Organisers',
    rating: 4.8,
    reviewsCount: 42,
    description: 'Parametric honeycomb desktop system with angled slots for Apple Pencil, styluses, USB sticks, and phone dock.',
    material: 'Matte Tough PETG',
    dimensions: '160 × 140 × 95 mm',
    colors: [
      { name: 'Purple Cube Purple', hex: '#9D4EDD' },
      { name: 'Stealth Black', hex: '#1E1E24' },
      { name: 'Slate Grey', hex: '#64748B' },
    ],
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
  },
  {
    id: 'voronoi-spiral-vase',
    name: 'Parametric Voronoi Spiral Vase',
    category: 'vases',
    categoryLabel: 'Flower Vases',
    rating: 4.9,
    reviewsCount: 67,
    description: 'Breathtaking fluid mathematical spiral vase designed for dried florals or watertight with optional PETG seal.',
    material: 'Dual-Color Silk Rainbow PLA',
    dimensions: '110 × 110 × 220 mm',
    colors: [
      { name: 'Purple Shimmer', hex: '#7B2CBF' },
      { name: 'Emerald Silk', hex: '#059669' },
      { name: 'Pearl White', hex: '#FAFAFA' },
    ],
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
  },
  {
    id: 'kinetic-gyro-fidget',
    name: 'Planetary Gyroscope Kinetic Fidget',
    category: 'fidgets',
    categoryLabel: 'Fidgets',
    rating: 5.0,
    reviewsCount: 119,
    description: 'Print-in-place multi-axis gimbal rings with ultra-smooth rotational bearings for stress relief and focus.',
    material: 'High-Impact Polylite PLA',
    dimensions: '75 × 75 × 75 mm',
    colors: [
      { name: 'Neon Purple & Cyan', hex: '#9D4EDD' },
      { name: 'Carbon Black', hex: '#18181B' },
      { name: 'Glow in Dark', hex: '#86EFAC' },
    ],
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
  },
  {
    id: 'cyber-miniature-bust',
    name: 'Cyberpunk Samurai Miniature Bust',
    category: 'miniatures',
    categoryLabel: 'Miniatures',
    rating: 4.9,
    reviewsCount: 35,
    description: 'High-resolution SLA resin printed collector bust cured with UV precision down to 30 microns, hand-primed.',
    material: '8K Ultra Resin (SLA)',
    dimensions: '90 × 80 × 150 mm',
    colors: [
      { name: 'Grey Sculpt Primer', hex: '#94A3B8' },
      { name: 'Obsidian Black', hex: '#0F172A' },
    ],
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'modern-villa-model',
    name: 'Modernist Cantilever Villa Scale Model',
    category: 'architectural',
    categoryLabel: 'Architectural Models',
    rating: 4.9,
    reviewsCount: 18,
    description: '1:100 scale architectural presentation model with acrylic glass windows, removable roof, and site contours.',
    material: 'Architectural Matte White PLA + Acrylic',
    dimensions: '280 × 220 × 120 mm',
    colors: [
      { name: 'Architectural White', hex: '#FFFFFF' },
      { name: 'Concrete Grey', hex: '#64748B' },
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'ganpati', label: 'Ganpati Idols' },
  { id: 'desk', label: 'Desk Organisers' },
  { id: 'vases', label: 'Flower Vases' },
  { id: 'fidgets', label: 'Kinetic Fidgets' },
  { id: 'miniatures', label: 'Miniatures' },
  { id: 'architectural', label: 'Arch Models' },
];

export const ReadyMadeProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');

  const filteredProducts =
    selectedCategory === 'all'
      ? SAMPLE_PRODUCTS
      : SAMPLE_PRODUCTS.filter((p) => p.category === selectedCategory);

  const openWhatsAppOrder = (product: Product, colorName?: string) => {
    const color = colorName || product.colors[0].name;
    const text = encodeURIComponent(
      `Hi Purple Cube! I would like to inquire about the "${product.name}" in ${color}. Please share available finishes, custom dimensions, and dispatch timeline.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="products" className="py-24 px-5 sm:px-8 md:px-12 bg-[#0C0C0C] relative">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6A0DAD]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <FadeIn y={30}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#C77DFF] font-mono px-3.5 py-1.5 rounded-full bg-[#180828] border border-[#9D4EDD]/35 inline-block mb-3">
              Curated Creations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight hero-heading mb-4">
              Explore Our 3D Printed Collection
            </h2>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base font-light">
              Crafted in-house on high-precision Bambu Lab and Elegoo SLA machines. Finished with
              artisan care, ready for immediate dispatch across India &amp; worldwide.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white shadow-[0_0_15px_rgba(157,78,221,0.5)]'
                  : 'bg-[#18181E] text-[#D7E2EA]/70 hover:text-white hover:bg-[#25252E] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, idx) => (
            <FadeIn key={product.id} delay={idx * 0.08} y={30}>
              <div className="group h-full flex flex-col justify-between rounded-3xl bg-[#121217] border border-white/10 hover:border-[#9D4EDD]/60 transition-all duration-300 p-4 sm:p-5 hover:shadow-[0_10px_35px_-10px_rgba(157,78,221,0.3)]">
                <div>
                  {/* Image container */}
                  <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#181820] mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase font-mono tracking-wider text-[#C77DFF] border border-[#9D4EDD]/40">
                        {product.categoryLabel}
                      </span>
                      {product.isBestseller && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/90 text-black font-bold text-[10px] uppercase tracking-wider">
                          Bestseller
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProduct(product);
                        setSelectedColor(product.colors[0].name);
                      }}
                      className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-[#9D4EDD] transition-colors border border-white/20"
                      title="Quick View Specs"
                    >
                      <Eye size={16} />
                    </button>
                  </div>

                  {/* Header info */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-lg text-white group-hover:text-[#C77DFF] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#D7E2EA]/70 line-clamp-2 mb-3 font-light leading-relaxed">
                    {product.description}
                  </p>

                  {/* Material & specs badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-4 text-[11px] text-[#D7E2EA]/60 font-mono">
                    <span className="bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      {product.material}
                    </span>
                    <span className="bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      {product.dimensions}
                    </span>
                  </div>

                  {/* Color swatches */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[11px] text-[#D7E2EA]/50">Finishes:</span>
                    <div className="flex items-center gap-1.5">
                      {product.colors.map((c) => (
                        <span
                          key={c.name}
                          title={c.name}
                          className="w-4 h-4 rounded-full border border-white/30"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer status & enquiry action */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#C77DFF] uppercase tracking-widest block font-mono font-medium">
                      Status
                    </span>
                    <span className="text-sm font-semibold text-white">Made to Order</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openWhatsAppOrder(product)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white text-xs font-semibold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(157,78,221,0.4)] cursor-pointer"
                  >
                    <WhatsAppIcon size={14} />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-[#14141B] border border-[#9D4EDD]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              &times;
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden bg-black/40 h-64 sm:h-80">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#9D4EDD]">
                    {selectedProduct.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs text-[#D7E2EA]/80 mb-4 leading-relaxed font-light">
                    {selectedProduct.description}
                  </p>

                  <div className="space-y-2 mb-4 text-xs font-mono text-[#D7E2EA]/70">
                    <p>
                      <strong className="text-white font-sans">Material:</strong>{' '}
                      {selectedProduct.material}
                    </p>
                    <p>
                      <strong className="text-white font-sans">Dimensions:</strong>{' '}
                      {selectedProduct.dimensions}
                    </p>
                  </div>

                  {/* Choose Color */}
                  <div className="mb-6">
                    <span className="text-xs font-medium text-white mb-2 block">
                      Selected Finish: <span className="text-[#C77DFF]">{selectedColor}</span>
                    </span>
                    <div className="flex gap-2">
                      {selectedProduct.colors.map((c) => (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => setSelectedColor(c.name)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs transition-all ${
                            selectedColor === c.name
                              ? 'border-[#C77DFF] bg-[#9D4EDD]/20 text-white'
                              : 'border-white/10 bg-white/5 text-[#D7E2EA]/60'
                          }`}
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-white/20"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span>{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-xs text-[#C77DFF] font-mono block">Availability</span>
                    <span className="text-lg font-bold text-white">
                      Custom Fabrication
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      openWhatsAppOrder(selectedProduct, selectedColor);
                      setSelectedProduct(null);
                    }}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white text-xs uppercase tracking-wider font-semibold hover:brightness-110 shadow-lg cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>WhatsApp Enquiry</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
