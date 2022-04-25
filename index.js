const resolution = {
  width: 256,
  height: 240,
}

const colors = [
  '#545454',
  '#989698',
  '#eceeec',
  '#eceeec',
  '#03220b',
  '#1b4ebd',
  '#5e9be5',
  '#aecbe9',
  '#03198a',
  '#2b3de3',
  '#777ee5',
  '#bcbde8',
  '#291182',
  '#5331db',
  '#a56be4',
  '#ceb5e8',
  '#3c0e60',
  '#7b2aaa',
  '#d463e5',
  '#e2b2e8',
  '#540d2f',
  '#932762',
  '#db64b1',
  '#e3b1d2',
  '#4d0d05',
  '#8c2d26',
  '#dd7169',
  '#e4b6b2',
  '#381a05',
  '#713d13',
  '#ca893a',
  '#dfc597',
  '#222906',
  '#555918',
  '#a2a835',
  '#cdd083',
  '#19380a',
  '#3e6f1d',
  '#86c03a',
  '#bddb84',
  '#183e0c',
  '#387920',
  '#72cc45',
  '#b4df98',
  '#163a0b',
  '#327332',
  '#68c876',
  '#a8dfb7',
  '#10313b',
  '#296576',
  '#5db2c9',
  '#abd5e2',
  '#000000',
  '#000000',
  '#3c3c3c',
  '#a0a2a0',
]

// Javascript values are 64-bit, if we wanted to compact the data we could use bit-vectors.
// I plan on storing this data in that format when not in use or when transferring it.
// Requires 2 bytes for the background (one per colour)
const backgrounds = [52, 52]

// Requires one byte per colour
// 12 bytes for all of the palettes
const backgroundPalettes = [
  [54, 55, 2],
  [5, 6, 7],
  [24, 25, 26],
  [35, 36, 37],
]

// Requires one byte per colour
// 12 bytes for all of the palettes
const spritePalettes = [
  [54, 55, 2],
  [5, 6, 7],
  [24, 25, 26],
  [35, 36, 37],
]

// Each sprite can use a background color and one color palette.
// Each 16x16 background section can use a background color and one palette.

// 256 different tiles in the game, 64 pixels per tile, all pixels default to the background color.
// Values can be 0 - 3 inclusive
const patternTable = new Array(256).fill(new Array(64).fill(0))

// Nametables are used for backgrounds, each tile stores a tile index.
const nametable = new Array(960).fill(0)
// stores the palette associated with 4 blocks
const attributeTable = new Array(240).fill(0)

// Sprites are 4 bytes.
// y position, tile index, attributes & x position
// Nes has a limit on how many sprites can be rendered per row but lets ignore that.
const sprites = []
