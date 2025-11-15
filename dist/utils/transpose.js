/**
 * @license
 * Laikoi Dromoi - Greek Bouzouki Music Scales
 * Copyright (c) 2025 Panayiotis Georgiou
 * Licensed under the MIT License
 */
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
// Map flat notes to their sharp equivalents
const FLAT_TO_SHARP = {
    'Db': 'C#',
    'Eb': 'D#',
    'Gb': 'F#',
    'Ab': 'G#',
    'Bb': 'A#'
};
export function transposeScale(notes, root) {
    const semitones = NOTES.length;
    const targetRootIndex = NOTES.indexOf(root);
    if (targetRootIndex === -1)
        throw new Error(`Invalid root note: ${root}`);
    // All scales are defined starting from D (index 2)
    const currentRootIndex = 2; // D is at index 2
    const offset = targetRootIndex - currentRootIndex;
    return notes.map(n => {
        // Convert flat notes to sharp equivalents for lookup
        const noteToFind = FLAT_TO_SHARP[n] || n;
        const idx = NOTES.indexOf(noteToFind);
        if (idx === -1)
            return n;
        let newIndex = (idx + offset) % semitones;
        if (newIndex < 0)
            newIndex += semitones;
        return NOTES[newIndex];
    });
}
export function transposeChords(chords, root) {
    const semitones = NOTES.length;
    const targetRootIndex = NOTES.indexOf(root);
    if (targetRootIndex === -1)
        throw new Error(`Invalid root note: ${root}`);
    // All scales are defined starting from D (index 2)
    const currentRootIndex = 2; // D is at index 2
    const offset = targetRootIndex - currentRootIndex;
    return chords.map(chord => {
        // Extract the root note from the chord (first part before any modifiers)
        const rootMatch = chord.match(/^([A-G][#b]?)/);
        if (!rootMatch)
            return chord;
        const chordRoot = rootMatch[1];
        const chordSuffix = chord.slice(chordRoot.length);
        // Convert flat notes to sharp equivalents for lookup
        const noteToFind = FLAT_TO_SHARP[chordRoot] || chordRoot;
        const idx = NOTES.indexOf(noteToFind);
        if (idx === -1)
            return chord;
        let newIndex = (idx + offset) % semitones;
        if (newIndex < 0)
            newIndex += semitones;
        const newRoot = NOTES[newIndex];
        return newRoot + chordSuffix;
    });
}
