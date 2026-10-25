import React from 'react';

export const CollectionImage: React.FC<{ src: string; alt?: string; fit?: 'contain' }> = ({ src, alt = '', fit }) => (
  <span className="relative block aspect-square w-full shrink-0 overflow-hidden bg-[#17121D]">
    {fit === 'contain' && <>
      <img src={src} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-xl" />
      <span className="absolute inset-0 bg-gradient-to-tr from-[#6A0DAD]/30 via-transparent to-[#B879F2]/15" />
    </>}
    <img src={src} alt={alt} loading="lazy" decoding="async" width={600} height={600} className={`relative h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`} />
  </span>
);
