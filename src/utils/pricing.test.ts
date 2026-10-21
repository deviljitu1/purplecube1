import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate3DTechnicalSpecs, calculateCardScale, calculateMiniatureTimeline, MATERIALS } from './pricing.ts';

test('MATERIALS registry contains valid entries with positive densities', () => {
  assert.ok(MATERIALS.pla);
  assert.ok(MATERIALS.resin);
  assert.ok(MATERIALS.silk_pla);
  assert.equal(MATERIALS.pla.density > 1, true);
  assert.ok(MATERIALS.resin.recommendedUse.length > 0);
});

test('calculateCardScale scales down with earlier indices', () => {
  const scale0 = calculateCardScale(0, 3);
  const scale1 = calculateCardScale(1, 3);
  const scale2 = calculateCardScale(2, 3);

  assert.equal(scale0, 0.94);
  assert.equal(scale1, 0.97);
  assert.equal(scale2, 1.0);
});

test('calculate3DTechnicalSpecs computes positive volume, weight, and machine time without price system', () => {
  const specs = calculate3DTechnicalSpecs({
    dimensions: { x: 50, y: 50, z: 50 },
    material: 'pla',
    infillPercent: 20,
    layerHeightMm: 0.20,
    quantity: 1,
  });

  assert.ok(specs.volumeCm3 > 0);
  assert.ok(specs.estimatedWeightGrams > 0);
  assert.ok(specs.printTimeHours > 0);
  assert.ok(specs.turnaroundEstimateDays >= 1);
  assert.ok(specs.recommendedMachine.includes('Bambu'));
});

test('calculate3DTechnicalSpecs scales weight and print time with quantity', () => {
  const single = calculate3DTechnicalSpecs({
    dimensions: { x: 40, y: 40, z: 40 },
    material: 'pla',
    infillPercent: 20,
    layerHeightMm: 0.20,
    quantity: 1,
  });

  const batch10 = calculate3DTechnicalSpecs({
    dimensions: { x: 40, y: 40, z: 40 },
    material: 'pla',
    infillPercent: 20,
    layerHeightMm: 0.20,
    quantity: 10,
  });

  assert.ok(batch10.estimatedWeightGrams > single.estimatedWeightGrams);
  assert.ok(batch10.printTimeHours > single.printTimeHours);
});

test('calculateMiniatureTimeline adjusts days for complexity', () => {
  const solo4 = calculateMiniatureTimeline({
    type: 'solo',
    heightInches: 4,
    finish: 'monochrome_bronze',
  });

  const family8 = calculateMiniatureTimeline({
    type: 'family',
    heightInches: 8,
    finish: 'full_color',
  });

  assert.ok(family8.turnaroundDays > solo4.turnaroundDays);
  assert.equal(solo4.recommendedResolution.includes('SLA Resin'), true);
});
