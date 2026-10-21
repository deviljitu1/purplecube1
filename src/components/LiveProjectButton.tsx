/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'Live Project',
  onClick,
  href,
  className = '',
}) => {
  const commonClasses = `inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:border-white hover:text-white cursor-pointer select-none ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
        onClick={onClick}
      >
        <span>{label}</span>
        <ExternalLink size={16} className="opacity-70" />
      </a>
    );
  }

  return (
    <button
      type="button"
      className={commonClasses}
      onClick={onClick}
    >
      <span>{label}</span>
      <ExternalLink size={16} className="opacity-70" />
    </button>
  );
};
