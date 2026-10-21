/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Dimensions {
  x: number; // mm
  y: number; // mm
  z: number; // mm
}

export type MaterialType = 'pla' | 'petg' | 'resin' | 'tpu' | 'abs' | 'silk_pla' | 'carbon_fiber';

export interface MaterialInfo {
  id: MaterialType;
  name: string;
  density: number; // g/cm³
  description: string;
  recommendedUse: string;
  colors: string[];
}

export const MATERIALS: Record<MaterialType, MaterialInfo> = {
  pla: {
    id: 'pla',
    name: 'PLA+ (Standard)',
    density: 1.24,
    description: 'Eco-friendly, rigid, great detail and surface finish. Ideal for prototypes and display pieces.',
    recommendedUse: 'Display models, prototypes, desk accessories',
    colors: ['Purple Cube Violet', 'Jet Black', 'Pure White', 'Slate Gray', 'Crimson Red'],
  },
  silk_pla: {
    id: 'silk_pla',
    name: 'Silk PLA (High Gloss)',
    density: 1.25,
    description: 'Shiny metallic luster finish perfect for Ganpati idols, vases, and trophies.',
    recommendedUse: 'Idols, artistic vases, decorative sculptures',
    colors: ['Silk Gold', 'Silk Purple', 'Silk Bronze', 'Silk Silver', 'Pearl White'],
  },
  petg: {
    id: 'petg',
    name: 'PETG (Durable & Weatherproof)',
    density: 1.27,
    description: 'Impact resistant, UV & heat tolerant up to 75°C. Great for functional parts and pen stands.',
    recommendedUse: 'Functional gadgets, outdoor items, heavy-use desk organizers',
    colors: ['Deep Purple', 'Translucent Smoke', 'Matte Black', 'Translucent Blue'],
  },
  resin: {
    id: 'resin',
    name: 'Tough SLA Resin (Ultra-Detail)',
    density: 1.15,
    description: 'Microscopic 0.05mm layer resolution, smooth like injection molded. Best for miniatures & jewelry.',
    recommendedUse: 'Collector miniatures, jewelry masters, fine character figurines',
    colors: ['Obsidian Black', 'Sculpt Grey', 'Clear Translucent', 'Ivory White'],
  },
  tpu: {
    id: 'tpu',
    name: 'TPU 95A (Flexible Rubber)',
    density: 1.21,
    description: 'Flexible, elastic, shock absorbing. Great for phone cases, dampers, and grip handles.',
    recommendedUse: 'Dampers, protective bumpers, flexible wearables',
    colors: ['Neon Purple', 'Onyx Black', 'Safety Orange'],
  },
  abs: {
    id: 'abs',
    name: 'ABS / ASA (Automotive Grade)',
    density: 1.05,
    description: 'High mechanical strength, heat resistant to 95°C, can be acetone vapour smoothed.',
    recommendedUse: 'Automotive components, heat-exposed fixtures',
    colors: ['Matte Black', 'Industrial Grey', 'Signal White'],
  },
  carbon_fiber: {
    id: 'carbon_fiber',
    name: 'Carbon Fiber Nylon (Engineering)',
    density: 1.30,
    description: 'Super stiff, lightweight, high tensile strength for drone arms and robotics.',
    recommendedUse: 'Drone frames, robotic mounts, high-load brackets',
    colors: ['Matte Carbon Black'],
  },
};

export interface QuoteInputs {
  dimensions: Dimensions;
  material: MaterialType;
  infillPercent: number; // 10 - 100
  layerHeightMm: number; // e.g. 0.12, 0.20, 0.28
  quantity: number;
}

export interface QuoteResult {
  volumeCm3: number;
  estimatedWeightGrams: number;
  printTimeHours: number;
  turnaroundEstimateDays: number;
  recommendedMachine: string;
}

export function calculateCardScale(index: number, totalCards: number): number {
  return 1 - (totalCards - 1 - index) * 0.03;
}

export function calculate3DTechnicalSpecs(inputs: QuoteInputs): QuoteResult {
  const { dimensions, material, infillPercent, layerHeightMm, quantity } = inputs;

  const clampedX = Math.max(1, dimensions.x);
  const clampedY = Math.max(1, dimensions.y);
  const clampedZ = Math.max(1, dimensions.z);
  const clampedQty = Math.max(1, Math.round(quantity));
  const clampedInfill = Math.min(100, Math.max(5, infillPercent));

  // Bounding box volume in cm³
  const boundingVolumeCm3 = (clampedX * clampedY * clampedZ) / 1000;
  
  // Object solid ratio based on infill & perimeter shells
  const effectiveSolidRatio = 0.18 + (clampedInfill / 100) * 0.22;
  const netObjectVolumeCm3 = boundingVolumeCm3 * effectiveSolidRatio;

  const mat = MATERIALS[material] || MATERIALS.pla;
  const singleWeightGrams = Math.round(netObjectVolumeCm3 * mat.density * 10) / 10;
  const totalWeightGrams = Math.round(singleWeightGrams * clampedQty * 10) / 10;

  // Print speed estimation
  const layerFactor = 0.20 / Math.max(0.05, layerHeightMm);
  const singlePrintTimeHours = Math.round((netObjectVolumeCm3 / (14 / layerFactor) + 0.35) * 10) / 10;
  const totalPrintTimeHours = Math.round(singlePrintTimeHours * clampedQty * 10) / 10;

  // Turnaround estimate
  let turnaroundEstimateDays = 1;
  if (totalPrintTimeHours > 40 || clampedQty > 20) {
    turnaroundEstimateDays = 4;
  } else if (totalPrintTimeHours > 15 || clampedQty > 5) {
    turnaroundEstimateDays = 2;
  }

  const recommendedMachine =
    material === 'resin'
      ? 'Elegoo Saturn 8K SLA Resin Printer'
      : material === 'carbon_fiber'
      ? 'Bambu Lab X1-Carbon (Hardened Nozzle)'
      : 'Bambu Lab P1S High-Speed Direct Drive';

  return {
    volumeCm3: Math.round(netObjectVolumeCm3 * 10) / 10,
    estimatedWeightGrams: totalWeightGrams,
    printTimeHours: totalPrintTimeHours,
    turnaroundEstimateDays,
    recommendedMachine,
  };
}

export function calculateMiniatureTimeline(options: {
  type: 'solo' | 'couple' | 'family';
  heightInches: number;
  finish: string;
}): { turnaroundDays: number; recommendedResolution: string } {
  let turnaroundDays = options.finish === 'full_color' ? 7 : 4;
  if (options.type === 'family') turnaroundDays += 2;
  if (options.heightInches >= 8) turnaroundDays += 1;

  return {
    turnaroundDays,
    recommendedResolution: '0.05mm 8K UV SLA Resin',
  };
}
