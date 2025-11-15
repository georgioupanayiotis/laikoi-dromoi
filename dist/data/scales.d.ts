/**
 * @license
 * Laikoi Dromoi - Greek Bouzouki Music Scales
 * Copyright (c) 2025 Panayiotis Georgiou
 * Licensed under the MIT License
 */
export interface Scale {
    name: string;
    type: 'minor' | 'major';
    notes: string[];
    basicChords?: string[];
    otherChords?: string[];
}
export declare const scales: Scale[];
//# sourceMappingURL=scales.d.ts.map