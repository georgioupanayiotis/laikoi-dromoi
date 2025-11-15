/**
 * @license
 * Laikoi Dromoi - Greek Bouzouki Music Scales
 * Copyright (c) 2025 Panayiotis Georgiou
 * 
 * Licensed under the MIT License
 * You may obtain a copy of the License at:
 * https://github.com/panayiotisgeorgiou/laikoi-dromoi/blob/main/LICENSE
 */

// Export all scales data and types
export { scales, type Scale } from './data/scales.js';

// Export transpose utilities
export { transposeScale, transposeChords } from './utils/transpose.js';

// Export scale helper utilities
export {
  getScaleWithRoot,
  getAllMajorScalesWithRoot,
  getAllMinorScalesWithRoot,
  getAllScalesWithRoot
} from './utils/scaleHelpers.js';
