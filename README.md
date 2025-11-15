# Laikoi Dromoi (Λαϊκοί Δρόμοι)

A comprehensive TypeScript library for Greek Bouzouki music scales (dromoi) with transposition utilities and helper functions.

## Features

- 📚 Complete collection of 19 Greek music scales (both minor and major)
- 🎵 Transpose scales to any root note
- 🎸 Transpose chords along with scales
- 🎯 Helper functions to get scales by type and root note
- 🔧 TypeScript support with full type definitions
- 📦 Zero dependencies (core library)
- � Tiny bundle size (5.6 KB)
- 📦 ESM module support

## Installation

```bash
npm install @panayiotis/laikoi-dromoi
```

or

```bash
yarn add @panayiotis/laikoi-dromoi
```

## Usage

### Basic Usage

```typescript
import { scales, transposeScale, transposeChords } from '@panayiotis/laikoi-dromoi';

// Get all scales
console.log(scales);

// Find a specific scale
const armoniko = scales.find(s => s.name === 'Armoniko');
console.log(armoniko);
// {
//   name: 'Armoniko',
//   type: 'minor',
//   notes: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C#', 'D'],
//   basicChords: ['Dm', 'Gm', 'A', 'A7', 'Bb'],
//   otherChords: ['C#dim', 'Edim', 'Faug']
// }
```

### Transposing Scales

```typescript
import { scales, transposeScale } from '@panayiotis/laikoi-dromoi';

const armoniko = scales.find(s => s.name === 'Armoniko');

// Transpose to E
const armonikoInE = transposeScale(armoniko.notes, 'E');
console.log(armonikoInE);
// ['E', 'F#', 'G', 'A', 'B', 'C', 'D#', 'E']

// Transpose to A
const armonikoInA = transposeScale(armoniko.notes, 'A');
console.log(armonikoInA);
// ['A', 'B', 'C', 'D', 'E', 'F', 'G#', 'A']
```

### Transposing Chords

```typescript
import { scales, transposeChords } from '@panayiotis/laikoi-dromoi';

const armoniko = scales.find(s => s.name === 'Armoniko');

// Transpose chords to E
const chordsInE = transposeChords(armoniko.basicChords, 'E');
console.log(chordsInE);
// ['Em', 'Am', 'B', 'B7', 'C']
```

### Using Helper Functions (New!)

```typescript
import { 
  getScaleWithRoot,
  getAllMajorScalesWithRoot,
  getAllMinorScalesWithRoot,
  getAllScalesWithRoot 
} from '@panayiotis/laikoi-dromoi';

// Get a specific scale transposed to a root note
const matzoreInE = getScaleWithRoot('Matzore', 'E');
console.log(matzoreInE);
// {
//   name: 'Matzore',
//   type: 'major',
//   transposedNotes: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'],
//   basicChords: ['A', 'D', 'E', 'E7', 'Bm'],
//   otherChords: [...]
// }

// Get all major scales in E
const majorScalesInE = getAllMajorScalesWithRoot('E');
console.log(majorScalesInE.length); // 9 major scales

// Get all minor scales in A
const minorScalesInA = getAllMinorScalesWithRoot('A');
console.log(minorScalesInA.length); // 10 minor scales

// Get all scales (both major and minor) in G
const allScalesInG = getAllScalesWithRoot('G');
console.log(allScalesInG.length); // 19 scales total
```

### TypeScript Support

```typescript
import { Scale, scales } from '@panayiotis/laikoi-dromoi';

const minorScales: Scale[] = scales.filter(s => s.type === 'minor');
const majorScales: Scale[] = scales.filter(s => s.type === 'major');

console.log(`Found ${minorScales.length} minor scales`);
console.log(`Found ${majorScales.length} major scales`);
```

## Available Scales

### Minor Scales (10)
- Armoniko
- Diatoniko
- Kartziyar
- Kiourdi
- Melodiko (Ascending & Descending)
- Niavent
- Ousak
- Poimeniko
- Sambah

### Major Scales (9)
- Hitzaz
- Hitzazkiar
- Houzam
- Matzore
- Peiraiotikos
- Rast (Ascending & Descending)
- Segiah
- Tabahaniotikos

## API Reference

### Types

#### `Scale`
```typescript
interface Scale {
  name: string;
  type: 'minor' | 'major';
  notes: string[];
  basicChords?: string[];
  otherChords?: string[];
}
```

### Functions

#### `getScaleWithRoot(scaleName: string, rootNote: string): TransposedScale | null`
Get a specific scale transposed to a root note.
- **scaleName**: Name of the scale (e.g., 'Armoniko', 'Matzore')
- **rootNote**: Target root note (e.g., 'E', 'A', 'G#')
- **returns**: Transposed scale object with all properties, or null if scale not found

#### `getAllMajorScalesWithRoot(rootNote: string): TransposedScale[]`
Get all major scales transposed to a specific root note.
- **rootNote**: Target root note
- **returns**: Array of all major scales transposed to the root note

#### `getAllMinorScalesWithRoot(rootNote: string): TransposedScale[]`
Get all minor scales transposed to a specific root note.
- **rootNote**: Target root note
- **returns**: Array of all minor scales transposed to the root note

#### `getAllScalesWithRoot(rootNote: string): TransposedScale[]`
Get all scales (major and minor) transposed to a specific root note.
- **rootNote**: Target root note
- **returns**: Array of all scales transposed to the root note

#### `transposeScale(notes: string[], root: string): string[]`
Transposes a scale to a new root note.
- **notes**: Array of note names representing the scale
- **root**: Target root note (e.g., 'E', 'A', 'G#')
- **returns**: Array of transposed notes

#### `transposeChords(chords: string[], root: string): string[]`
Transposes chord names to a new root note.
- **chords**: Array of chord names
- **root**: Target root note
- **returns**: Array of transposed chord names

### Constants

#### `scales`
An array containing all available Greek music scales with their properties.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Panayiotis Georgiou

## Acknowledgments

This library documents traditional Greek music scales used in Bouzouki, Laiko, and Rembetiko music.
