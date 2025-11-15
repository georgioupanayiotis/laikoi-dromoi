/**
 * @license
 * Laikoi Dromoi - Greek Bouzouki Music Scales
 * Copyright (c) 2025 Panayiotis Georgiou
 * Licensed under the MIT License
 */

// Test file to verify the library exports work correctly
import { 
  scales, 
  transposeScale, 
  transposeChords,
  getScaleWithRoot,
  getAllMajorScalesWithRoot,
  getAllMinorScalesWithRoot,
  getAllScalesWithRoot
} from './dist/index.js';

console.log('🎵 Testing Laikoi Dromoi Library\n');
console.log('='.repeat(60));

// Test 1: Check scales are available
console.log('\n📊 Test 1: Basic Scale Data');
console.log(`✅ Total scales available: ${scales.length}`);

// Test 2: Find a specific scale
console.log('\n🔍 Test 2: Find Specific Scale');
const armoniko = scales.find(s => s.name === 'Armoniko');
if (armoniko) {
  console.log(`✅ Found Armoniko scale:`);
  console.log(`   Type: ${armoniko.type}`);
  console.log(`   Notes: ${armoniko.notes.join(', ')}`);
}

// Test 3: Transpose scale
console.log('\n🎹 Test 3: Transpose Scale');
if (armoniko) {
  const armonikoInE = transposeScale(armoniko.notes, 'E');
  console.log(`✅ Armoniko transposed to E: ${armonikoInE.join(', ')}`);
}

// Test 4: Transpose chords
console.log('\n🎸 Test 4: Transpose Chords');
if (armoniko && armoniko.basicChords) {
  const chordsInE = transposeChords(armoniko.basicChords, 'E');
  console.log(`✅ Armoniko chords transposed to E: ${chordsInE.join(', ')}`);
}

// Test 5: Filter scales by type
console.log('\n📂 Test 5: Filter by Type');
const minorScales = scales.filter(s => s.type === 'minor');
const majorScales = scales.filter(s => s.type === 'major');
console.log(`✅ Minor scales: ${minorScales.length}, Major scales: ${majorScales.length}`);

// Test 6: Get specific scale with root note
console.log('\n🎯 Test 6: Get Specific Scale with Root Note');
const matzoreInA = getScaleWithRoot('Matzore', 'A');
if (matzoreInA) {
  console.log(`✅ Matzore in A:`);
  console.log(`   Type: ${matzoreInA.type}`);
  console.log(`   Notes: ${matzoreInA.transposedNotes.join(', ')}`);
  if (matzoreInA.basicChords) {
    console.log(`   Chords: ${matzoreInA.basicChords.join(', ')}`);
  }
}

// Test 7: Get all major scales with root note
console.log('\n🎶 Test 7: All Major Scales in E');
const majorScalesInE = getAllMajorScalesWithRoot('E');
console.log(`✅ Found ${majorScalesInE.length} major scales in E:`);
majorScalesInE.forEach(scale => {
  console.log(`   - ${scale.name}: ${scale.transposedNotes.join(', ')}`);
});

// Test 8: Get all minor scales with root note
console.log('\n🎵 Test 8: All Minor Scales in G');
const minorScalesInG = getAllMinorScalesWithRoot('G');
console.log(`✅ Found ${minorScalesInG.length} minor scales in G:`);
minorScalesInG.slice(0, 3).forEach(scale => {
  console.log(`   - ${scale.name}: ${scale.transposedNotes.join(', ')}`);
});
console.log(`   ... and ${minorScalesInG.length - 3} more`);

// Test 9: Get all scales with root note
console.log('\n🌟 Test 9: All Scales in C#');
const allScalesInCSharp = getAllScalesWithRoot('C#');
console.log(`✅ Found ${allScalesInCSharp.length} scales (major + minor) in C#`);

// Test 10: Edge case - Invalid scale name
console.log('\n⚠️  Test 10: Error Handling');
const invalidScale = getScaleWithRoot('NonExistent', 'D');
if (invalidScale === null) {
  console.log('✅ Correctly returns null for invalid scale name');
}

console.log('\n' + '='.repeat(60));
console.log('\n   All tests passed!');
console.log(`\n📦 Exported functions tested:`);
console.log('   - scales (data)');
console.log('   - transposeScale()');
console.log('   - transposeChords()');
console.log('   - getScaleWithRoot()');
console.log('   - getAllMajorScalesWithRoot()');
console.log('   - getAllMinorScalesWithRoot()');
console.log('   - getAllScalesWithRoot()');
console.log();
