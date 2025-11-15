/**
 * @license
 * Laikoi Dromoi - Greek Bouzouki Music Scales
 * Copyright (c) 2025 Panayiotis Georgiou
 * Licensed under the MIT License
 */
export const scales = [
    // Minor Scales
    {
        name: 'Armoniko',
        type: 'minor',
        notes: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C#', 'D'],
        basicChords: ['Dm', 'Gm', 'A', 'A7', 'Bb'],
        otherChords: ['C#dim', 'Edim', 'Faug']
    },
    {
        name: 'Diatoniko',
        type: 'minor',
        notes: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C', 'D'],
        basicChords: ['Dm', 'Gm', 'C', 'F', 'Bb', 'Am']
    },
    {
        name: 'Kartziyar',
        type: 'minor',
        notes: ['D', 'E', 'F', 'G', 'Ab', 'B', 'C', 'D']
    },
    {
        name: 'Kiourdi',
        type: 'minor',
        notes: ['D', 'E', 'F', 'G', 'A', 'B', 'C', 'D']
    },
    {
        name: 'Melodiko (Asc)',
        type: 'minor',
        notes: ['D', 'E', 'F', 'G', 'A', 'B', 'C#', 'D']
    },
    {
        name: 'Melodiko (Desc)',
        type: 'minor',
        notes: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C', 'D']
    },
    {
        name: 'Niavent',
        type: 'minor',
        notes: ['D', 'E', 'F', 'G#', 'A', 'Bb', 'C#', 'D']
    },
    {
        name: 'Ousak',
        type: 'minor',
        notes: ['D', 'Eb', 'F', 'G', 'A', 'Bb', 'C', 'D'],
        basicChords: ['Dm', 'Gm', 'Cm', 'Eb', 'F', 'Bb']
    },
    {
        name: 'Poimeniko',
        type: 'minor',
        notes: ['D', 'E', 'F', 'G#', 'A', 'B', 'C', 'D']
    },
    {
        name: 'Sambah',
        type: 'minor',
        notes: ['D', 'E', 'F', 'Gb', 'A', 'Bb', 'C', 'D'],
        basicChords: ['Dm', 'F', 'Gb', 'C'],
        otherChords: ['C7', 'Am', 'Bbm', 'Edim']
    },
    // Major Scales
    {
        name: 'Hitzaz',
        type: 'major',
        notes: ['D', 'Eb', 'F#', 'G', 'A', 'Bb', 'C', 'D'],
        basicChords: ['D', 'Gm', 'Cm', 'Eb']
    },
    {
        name: 'Hitzazkiar',
        type: 'major',
        notes: ['D', 'Eb', 'F#', 'G', 'A', 'Bb', 'C#', 'D']
    },
    {
        name: 'Houzam',
        type: 'major',
        notes: ['D', 'F', 'F#', 'G', 'A', 'B', 'C#', 'D']
    },
    {
        name: 'Matzore',
        type: 'major',
        notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'],
        basicChords: ['D', 'G', 'A', 'A7', 'Em'],
        otherChords: ['F#m', 'Bm', 'C#dim']
    },
    {
        name: 'Peiraiotikos',
        type: 'major',
        notes: ['D', 'Eb', 'F#', 'G#', 'A', 'Bb', 'C#', 'D']
    },
    {
        name: 'Rast (Asc)',
        type: 'major',
        notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D']
    },
    {
        name: 'Rast (Desc)',
        type: 'major',
        notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C', 'D']
    },
    {
        name: 'Segiah',
        type: 'major',
        notes: ['D', 'F', 'F#', 'G', 'A', 'Bb', 'C#', 'D']
    },
    {
        name: 'Tabahaniotikos',
        type: 'major',
        notes: ['D', 'E', 'F#', 'G', 'A', 'Bb', 'C#', 'D']
    }
];
