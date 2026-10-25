import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { PRODUCT_CATEGORIES } from './productCategories.ts';

test('categories and subcategories have distinct names and identifiers', () => {
  const collections = PRODUCT_CATEGORIES.flatMap((category) => [category, ...category.subcategories]);
  assert.equal(new Set(collections.map((item) => item.id)).size, collections.length);
  assert.equal(new Set(collections.map((item) => item.label)).size, collections.length);
});

test('each subcategory has a different image', () => {
  const images = PRODUCT_CATEGORIES.flatMap((category) => category.subcategories.map((item) => item.image));
  assert.equal(new Set(images).size, images.length);
});

test('all category images are local WebP assets', () => {
  const collections = PRODUCT_CATEGORIES.flatMap((category) => [category, ...category.subcategories]);
  for (const item of collections) {
    assert.match(item.image, /^\/images\/[a-z0-9-]+\.webp$/);
    assert.ok(existsSync(resolve('public', item.image.slice(1))), `Missing image for ${item.label}`);
    assert.ok(statSync(resolve('public', item.image.slice(1))).size < 60 * 1024, `Oversized thumbnail for ${item.label}`);
  }
});

test('every main category has four collections with multiple distinct designs', () => {
  for (const category of PRODUCT_CATEGORIES) {
    assert.equal(category.subcategories.length, 4, `${category.label} must have four collections`);
    for (const collection of category.subcategories) {
      assert.ok(collection.designs.length >= 2, `${collection.label} needs multiple designs`);
      assert.equal(new Set(collection.designs.map((design) => design.image)).size, collection.designs.length, `Repeated design image in ${collection.label}`);
      for (const design of collection.designs) {
        assert.match(design.image, /^\/images\/[a-z0-9-]+\.webp$/);
        const path = resolve('public', design.image.slice(1));
        assert.ok(existsSync(path), `Missing image for ${design.name}`);
        assert.ok(statSync(path).size < 60 * 1024, `Oversized image for ${design.name}`);
      }
    }
  }
});

test('the comic collection includes all nine supplied designs', () => {
  const collection = PRODUCT_CATEGORIES.find((category) => category.id === 'miniatures')?.subcategories.find((item) => item.id === 'marvel');
  assert.equal(collection?.designs.length, 9);
  assert.ok(collection.designs.every((design) => design.imageFit === 'contain'));
  assert.ok(collection.designs.some((design) => design.name === 'Doctor Doom'));
  assert.ok(collection.designs.some((design) => design.name === 'Moon Knight'));
});
