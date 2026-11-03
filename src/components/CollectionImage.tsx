import React from 'react';

export const CollectionImage: React.FC<{ src: string; alt?: string; fit?: 'contain' }> = ({ src, alt = '' }) => (
  <span className="relative block aspect-square w-full shrink-0 overflow-hidden bg-[#17121D]">
    <img src={src} alt={alt} loading="lazy" decoding="async" width={600} height={600} className="h-full w-full object-cover" />
  </span>
);
