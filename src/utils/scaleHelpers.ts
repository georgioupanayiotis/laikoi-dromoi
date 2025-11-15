/**
 * @license
 * Laikoi Dromoi - Greek Bouzouki Music Scales
 * Copyright (c) 2025 Panayiotis Georgiou
 * Licensed under the MIT License
 */

import { scales } from '../data/scales.js';
import { transposeScale } from './transpose.js';
import type { Scale } from '../data/scales.js';

/**
 * Get a specific scale transposed to a root note
 * @param scaleName - Name of the scale (e.g., 'Armoniko', 'Matzore')
 * @param rootNote - Root note to transpose to (e.g., 'D', 'E', 'C#')
 * @returns The scale with transposed notes, or null if scale not found
 */
export function getScaleWithRoot(scaleName: string, rootNote: string): (Scale & { transposedNotes: string[] }) | null {
  const scale = scales.find(s => s.name === scaleName);
  if (!scale) return null;
  
  return {
    ...scale,
    transposedNotes: transposeScale(scale.notes, rootNote)
  };
}

/**
 * Get all major scales transposed to a specific root note
 * @param rootNote - Root note to transpose to (e.g., 'D', 'E', 'C#')
 * @returns Array of major scales with transposed notes
 */
export function getAllMajorScalesWithRoot(rootNote: string): (Scale & { transposedNotes: string[] })[] {
  return scales
    .filter(s => s.type === 'major')
    .map(scale => ({
      ...scale,
      transposedNotes: transposeScale(scale.notes, rootNote)
    }));
}

/**
 * Get all minor scales transposed to a specific root note
 * @param rootNote - Root note to transpose to (e.g., 'D', 'E', 'C#')
 * @returns Array of minor scales with transposed notes
 */
export function getAllMinorScalesWithRoot(rootNote: string): (Scale & { transposedNotes: string[] })[] {
  return scales
    .filter(s => s.type === 'minor')
    .map(scale => ({
      ...scale,
      transposedNotes: transposeScale(scale.notes, rootNote)
    }));
}

/**
 * Get all scales (both major and minor) transposed to a specific root note
 * @param rootNote - Root note to transpose to (e.g., 'D', 'E', 'C#')
 * @returns Array of all scales with transposed notes
 */
export function getAllScalesWithRoot(rootNote: string): (Scale & { transposedNotes: string[] })[] {
  return scales.map(scale => ({
    ...scale,
    transposedNotes: transposeScale(scale.notes, rootNote)
  }));
}
