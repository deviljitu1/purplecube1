/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: 'button' | 'submit';
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Contact Me',
  onClick,
  className = '',
  href,
  type = 'button',
}) => {
  const buttonStyles = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
    outline: '2px solid #FFFFFF',
    outlineOffset: '-3px',
  };

  const commonClasses = `inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer select-none text-center ${className}`;

  if (href) {
    return (
      <a
        href={href}
        style={buttonStyles}
        className={commonClasses}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      type={type}
      style={buttonStyles}
      className={commonClasses}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
