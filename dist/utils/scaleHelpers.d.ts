/**
 * @license
 * Laikoi Dromoi - Greek Bouzouki Music Scales
 * Copyright (c) 2025 Panayiotis Georgiou
 * Licensed under the MIT License
 */
import type { Scale } from '../data/scales.js';
/**
 * Get a specific scale transposed to a root note
 * @param scaleName - Name of the scale (e.g., 'Armoniko', 'Matzore')
 * @param rootNote - Root note to transpose to (e.g., 'D', 'E', 'C#')
 * @returns The scale with transposed notes, or null if scale not found
 */
export declare function getScaleWithRoot(scaleName: string, rootNote: string): (Scale & {
    transposedNotes: string[];
}) | null;
/**
 * Get all major scales transposed to a specific root note
 * @param rootNote - Root note to transpose to (e.g., 'D', 'E', 'C#')
 * @returns Array of major scales with transposed notes
 */
export declare function getAllMajorScalesWithRoot(rootNote: string): (Scale & {
    transposedNotes: string[];
})[];
/**
 * Get all minor scales transposed to a specific root note
 * @param rootNote - Root note to transpose to (e.g., 'D', 'E', 'C#')
 * @returns Array of minor scales with transposed notes
 */
export declare function getAllMinorScalesWithRoot(rootNote: string): (Scale & {
    transposedNotes: string[];
})[];
/**
 * Get all scales (both major and minor) transposed to a specific root note
 * @param rootNote - Root note to transpose to (e.g., 'D', 'E', 'C#')
 * @returns Array of all scales with transposed notes
 */
export declare function getAllScalesWithRoot(rootNote: string): (Scale & {
    transposedNotes: string[];
})[];
//# sourceMappingURL=scaleHelpers.d.ts.map