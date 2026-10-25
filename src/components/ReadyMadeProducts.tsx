/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { FadeIn } from './FadeIn.tsx';
import { ArrowRight, ChevronDown, ChevronLeft, Upload } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { PRODUCT_CATEGORIES, type CollectionDesign, type ProductCategoryId } from '../data/productCategories.ts';
import { CollectionImage } from './CollectionImage.tsx';
import { DesignPreview } from './DesignPreview.tsx';

export interface Product {
  id: string;
  name: string;
  category: ProductCategoryId;
  subcategory: string;
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
    category: 'idols',
    subcategory: 'ganesha',
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
    image: '/images/ganpati.webp',
    isBestseller: true,
  },
  {
    id: 'hex-desk-organizer',
    name: 'Hex Modular Desk Tidy & Pen Stand',
    category: 'home',
    subcategory: 'organisers',
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
    image: '/images/desk-organizer.webp',
    isBestseller: true,
  },
  {
    id: 'voronoi-spiral-vase',
    name: 'Parametric Voronoi Spiral Vase',
    category: 'home',
    subcategory: 'decor',
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
    image: '/images/spiral-vase.webp',
    isBestseller: true,
  },
  {
    id: 'kinetic-gyro-fidget',
    name: 'Planetary Gyroscope Kinetic Fidget',
    category: 'fidgets',
    subcategory: 'kinetic',
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
    image: '/images/gyro-fidget.webp',
    isBestseller: true,
  },
  {
    id: 'cyber-miniature-bust',
    name: 'Cyberpunk Samurai Miniature Bust',
    category: 'miniatures',
    subcategory: 'anime',
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
    image: '/images/miniature-bust.webp',
  },
  {
    id: 'modern-villa-model',
    name: 'Modernist Cantilever Villa Scale Model',
    category: 'models',
    subcategory: 'architecture',
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
    image: '/images/villa-model.webp',
  },
];

const CATEGORIES = [{ id: 'all', label: 'All Categories' }, ...PRODUCT_CATEGORIES];

export const ReadyMadeProducts: React.FC = () => {
  const [categoryNavigation, setCategoryNavigation] = useState({ id: 'all', subcategoryId: 'all', revision: 0 });
  const selectedCategory = categoryNavigation.id;
  const selectedSubcategory = categoryNavigation.subcategoryId;
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<CollectionDesign | null>(null);
  const [showAllCards, setShowAllCards] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const categoryView = useRef<HTMLDivElement>(null);
  const categoryHeading = useRef<HTMLHeadingElement>(null);
  const designPreviewUrl = useRef<string | undefined>(undefined);
  const [uploadedDesign, setUploadedDesign] = useState<{ name: string; image?: string; categoryId: string; subcategoryId: string; collection: string } | null>(null);
  const [designError, setDesignError] = useState('');
  useEffect(() => () => { if (designPreviewUrl.current) URL.revokeObjectURL(designPreviewUrl.current); }, []);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (!categoryNavigation.revision) return;
    const frame = requestAnimationFrame(() => {
      categoryHeading.current?.focus({ preventScroll: true });
      if (!categoryView.current) return;
      const header = document.querySelector<HTMLElement>('header:has(nav[aria-label="Main Navigation"])');
      const headerBottom = header ? header.offsetTop + header.offsetHeight : 88;
      window.scrollTo({
        top: Math.max(0, window.scrollY + categoryView.current.getBoundingClientRect().top - headerBottom - 8),
        behavior: reducedMotion ? 'instant' : 'smooth',
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [categoryNavigation, reducedMotion]);
  const activeCategory = PRODUCT_CATEGORIES.find((category) => category.id === selectedCategory);
  const activeSubcategory = activeCategory?.subcategories.find((subcategory) => subcategory.id === selectedSubcategory);
  const collections = activeSubcategory ? [] : activeCategory?.subcategories ?? PRODUCT_CATEGORIES;
  const visibleCollections = showAllCards ? collections : collections.slice(0, 3);
  const visibleDesigns = showAllCards ? activeSubcategory?.designs : activeSubcategory?.designs.slice(0, 3);
  const totalCards = activeSubcategory?.designs.length ?? collections.length;
  const activeUploadedDesign = uploadedDesign?.categoryId === selectedCategory && uploadedDesign.subcategoryId === selectedSubcategory ? uploadedDesign : null;

  const chooseDesign = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const isImage = ['image/jpeg', 'image/png', 'image/webp'].includes(file.type);
    if ((!isImage && !/\.(stl|3mf|obj|step|stp)$/i.test(file.name)) || file.size > (isImage ? 10 : 50) * 1024 * 1024) {
      setDesignError('Choose a JPEG, PNG or WebP image up to 10 MB, or an STL, 3MF, OBJ or STEP file up to 50 MB.');
      event.target.value = '';
      return;
    }
    setDesignError('');
    if (designPreviewUrl.current) URL.revokeObjectURL(designPreviewUrl.current);
    designPreviewUrl.current = isImage ? URL.createObjectURL(file) : undefined;
    setUploadedDesign({ name: file.name, image: designPreviewUrl.current, categoryId: selectedCategory, subcategoryId: selectedSubcategory, collection: [activeCategory?.label, activeSubcategory?.label].filter(Boolean).join(' / ') || 'Custom print' });
    event.target.value = '';
  };

  const removeDesign = () => {
    if (designPreviewUrl.current) URL.revokeObjectURL(designPreviewUrl.current);
    designPreviewUrl.current = undefined;
    setUploadedDesign(null);
  };

  const chooseCategory = (id: string) => {
    setShowAllCards(false);
    setCategoryNavigation((current) => ({ id, subcategoryId: 'all', revision: current.revision + 1 }));
    setDesignError('');
  };

  const chooseCollection = (subcategoryId: string) => {
    setShowAllCards(false);
    setCategoryNavigation((current) => ({ ...current, subcategoryId, revision: current.revision + 1 }));
    setDesignError('');
  };

  const openWhatsAppOrder = (product: Product, colorName?: string) => {
    const color = colorName || product.colors[0].name;
    const text = encodeURIComponent(
      `Hi Purple Cube! I would like to inquire about the "${product.name}" in ${color}. Please share available finishes, custom dimensions, and dispatch timeline.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="products" className="py-16 sm:py-24 px-5 sm:px-8 md:px-12 bg-[#0C0C0C] relative">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6A0DAD]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {!activeCategory && <FadeIn y={30}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="gift-collection-heading whitespace-nowrap tracking-tight hero-heading mb-4">
              Gifts with a personal touch.
            </h2>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base font-light">
              Personalised keepsakes, collectible miniatures and thoughtful gifts.
              Find a design you love, or share your own idea.
            </p>
          </div>
        </FadeIn>}

        <div ref={categoryView} role="region" aria-labelledby="category-view-heading" className="mb-10 scroll-mt-24 sm:scroll-mt-28">
        <div role="group" aria-label="Browse categories" className="flex flex-wrap items-center gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={selectedCategory === cat.id}
              onClick={() => chooseCategory(cat.id)}
              className={`min-h-11 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white shadow-[0_0_15px_rgba(157,78,221,0.5)]'
                  : 'bg-[#18181E] text-[#D7E2EA]/70 hover:text-white hover:bg-[#25252E] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

          {activeSubcategory && <button type="button" onClick={() => chooseCategory(selectedCategory)} className="inline-flex min-h-11 items-center gap-1.5 mb-2 text-sm text-[#D9B4FA] hover:text-white"><ChevronLeft size={16} /> {activeCategory?.label} collections</button>}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h2 id="category-view-heading" ref={categoryHeading} tabIndex={-1} className={`${activeCategory ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-semibold text-white focus:outline-none`}>{activeSubcategory?.label ?? activeCategory?.label ?? 'All Categories'}</h2>
              <p className="mt-2 text-xs sm:text-sm text-[#D7E2EA]/75">{activeSubcategory ? 'Choose a design, then discuss size, finish and pricing on WhatsApp.' : activeCategory ? 'Choose a collection to view designs, or add your own.' : 'Choose a category to discover what you can create.'}</p>
            </div>
            {activeSubcategory && <span className="shrink-0 text-sm text-[#C77DFF]">{activeSubcategory.designs.length} designs</span>}
          </div>
          <div id="collection-cards" key={`${selectedCategory}-${selectedSubcategory}`} role="group" aria-label={activeSubcategory ? `${activeSubcategory.label} designs` : activeCategory ? `${activeCategory.label} subcategories` : 'Product collections'} className="mx-auto grid max-w-5xl grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {visibleCollections.map((collection) => {
              const cardClass = `group relative flex min-w-0 w-full flex-col rounded-2xl overflow-hidden border-2 bg-[#151019] text-left transition-colors cursor-pointer ${activeCategory && selectedSubcategory === collection.id ? 'border-[#C77DFF]' : 'border-white/10 hover:border-[#9D4EDD]'}`;
              const content = <>
                <CollectionImage src={collection.image} fit={collection.imageFit} />
                <span className="flex h-[92px] flex-col items-start justify-between gap-2 p-2 sm:p-2.5">
                  <span className="block text-sm sm:text-base font-semibold text-white leading-tight">{collection.label}</span>
                  <span className="mt-1 inline-flex min-h-7 items-center gap-1 rounded-full border border-[#C77DFF]/40 bg-[#9D4EDD]/20 px-2 py-0.5 text-xs font-medium text-[#E9D3FF] group-hover:bg-[#9D4EDD]/40">
                    {activeCategory ? 'View designs' : 'Explore'}<ArrowRight size={12} className="shrink-0" />
                  </span>
                </span>
              </>;
              return <button key={collection.id} type="button" aria-label={activeCategory ? `View ${collection.label} designs` : `Explore ${collection.label}`} className={cardClass} onClick={() => activeCategory ? chooseCollection(collection.id) : chooseCategory(collection.id)}>{content}</button>;
            })}
            {visibleDesigns?.map((design) => (
              <button key={design.id} type="button" aria-label={`View ${design.name}`}
                onClick={() => {
                  const product = SAMPLE_PRODUCTS.find((item) => item.id === design.productId);
                  if (product) { setSelectedProduct(product); setSelectedColor(product.colors[0].name); }
                  else setSelectedDesign(design);
                }}
                className="group relative flex w-full flex-col overflow-hidden rounded-2xl border-2 border-white/10 bg-[#151019] text-left hover:border-[#9D4EDD] transition-colors">
                <CollectionImage src={design.image} alt={design.name} fit={design.imageFit} />
                <span className="flex h-[92px] flex-col items-start justify-between gap-2 p-2 sm:p-2.5">
                  <span className="line-clamp-2 text-sm sm:text-base font-semibold leading-tight text-white">{design.name}</span>
                  <span className="inline-flex min-h-7 items-center gap-1 rounded-full border border-[#C77DFF]/40 bg-[#9D4EDD]/20 px-2 py-0.5 text-xs font-medium text-[#E9D3FF]">View design <ArrowRight size={12} /></span>
                </span>
              </button>
            ))}
            <label className="relative block min-w-0 w-full self-stretch rounded-2xl border-2 border-dashed border-[#C77DFF]/50 bg-[#24142F] text-center cursor-pointer hover:bg-[#321D43] focus-within:outline-2 focus-within:outline-[#C77DFF] focus-within:outline-offset-2 overflow-hidden">
              <span aria-hidden="true" className="block aspect-square w-full" />
              <span aria-hidden="true" className="block h-[92px]" />
              {activeUploadedDesign?.image ? <img src={activeUploadedDesign.image} alt="Your selected design" className="absolute inset-0 h-full w-full object-contain opacity-35" /> : null}
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <Upload size={26} strokeWidth={1.5} className="text-[#D9B4FA]" />
                <span className="whitespace-nowrap text-sm sm:text-base font-semibold text-white">Add your design</span>
                <span className="whitespace-nowrap text-[11px] sm:text-xs text-[#D7E2EA]/70 px-1.5">Photo, sketch or 3D file</span>
              </span>
              <input type="file" aria-label={`Add your design to ${activeSubcategory?.label ?? activeCategory?.label ?? 'All Categories'}`} accept="image/jpeg,image/png,image/webp,.stl,.3mf,.obj,.step,.stp" onChange={chooseDesign} className="sr-only" />
            </label>
          </div>
          {totalCards > 3 && <div className="mt-5 flex justify-center">
            <button type="button" aria-controls="collection-cards" aria-expanded={showAllCards} aria-label={`${showAllCards ? 'Show fewer' : 'Show more'} ${activeSubcategory ? 'designs' : 'categories'}`} onClick={() => setShowAllCards((current) => !current)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#B879F2]/40 bg-[#9D4EDD]/10 px-6 py-2.5 text-sm font-medium text-[#E9D3FF] hover:bg-[#9D4EDD]/25">
              {showAllCards ? 'Less' : 'More'} <ChevronDown size={16} className={showAllCards ? 'rotate-180' : ''} />
            </button>
          </div>}
          {designError && <p role="alert" className="mt-4 text-xs text-rose-300">{designError}</p>}
          {activeUploadedDesign && <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-[#9D4EDD]/30 bg-[#1C1325] p-4">
            <div className="min-w-0"><p className="truncate text-sm text-white">{activeUploadedDesign.name}</p><p className="mt-1 text-xs leading-relaxed text-[#D7E2EA]/70">Selected for {activeUploadedDesign.collection}. Attach the file in WhatsApp to send.</p><button type="button" onClick={removeDesign} className="mt-2 text-xs text-[#D9B4FA] underline underline-offset-4">Remove design</button></div>
            <a href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello Purple Cube! I'd like a custom print for ${activeUploadedDesign.collection}.\nMy design: ${activeUploadedDesign.name}\nI will attach this file in the chat. Please share feasibility and a quotation.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#9D4EDD] px-5 py-3 text-sm font-medium text-white"><WhatsAppIcon size={16} /> Continue on WhatsApp</a>
          </div>}
        </div>

      </div>

      {selectedDesign && <DesignPreview design={selectedDesign} collection={[activeCategory?.label, activeSubcategory?.label].filter(Boolean).join(' / ')} onClose={() => setSelectedDesign(null)} />}

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div role="dialog" aria-modal="true" aria-label={selectedProduct.name} className="relative w-full max-w-2xl max-h-[90svh] overflow-y-auto bg-[#14141B] border border-[#9D4EDD]/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              aria-label="Close product preview"
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
