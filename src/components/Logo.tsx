/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

/**
 * Official Purple Cube Studio Emblem (Think • Design • Print)
 * Using the high-resolution, pixel-perfect original emblem asset.
 */
export const PurpleCubeLogo: React.FC<LogoProps> = ({
  className = '',
  size = 40,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Authentic Studio Emblem */}
      <div
        className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0"
        style={{ width: size, height: size }}
      >
        <img
          src="/logo.png"
          alt="Purple Cube — Think • Design • Print"
          width={size}
          height={size}
          className="w-full h-full object-contain rounded-full shadow-[0_0_18px_rgba(168,85,247,0.55)]"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-black tracking-tight text-white uppercase text-base sm:text-lg group-hover:text-[#F0ABFC] transition-colors">
            Purple<span className="text-[#C084FC]">Cube</span>
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.24em] font-mono uppercase text-[#F1F5F9]/85 mt-0.5">
            Think &bull; Design &bull; Print
          </span>
        </div>
      )}
    </div>
  );
};
