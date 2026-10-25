/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = '', size = 18 }) => (
  <img
    src="/images/whatsapp.svg"
    width={size}
    height={size}
    className={`shrink-0 ${className}`}
    alt=""
    aria-hidden="true"
  />
);
