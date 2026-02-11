const ADJECTIVES = [
  'luminous',
  'brave',
  'curious',
  'steady',
  'wild',
  'gentle',
  'bold',
  'electric'
];

const OBJECTIVES = [
  'ship one tiny feature',
  'refactor one messy function',
  'write one meaningful test',
  'learn one new JavaScript trick',
  'document one confusing part of your project',
  'delete one unnecessary line of code',
  'help one person in your dev circle',
  'take one focused deep-work sprint'
];

const CONSTELLATIONS = ['Orion', 'Lyra', 'Draco', 'Cassiopeia', 'Cygnus', 'Andromeda'];

function seededNumber(seedText) {
  let hash = 0;
  for (let i = 0; i < seedText.length; i += 1) {
    hash = (hash * 31 + seedText.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickFrom(seed, list, offset = 0) {
  return list[(seed + offset) % list.length];
}

export function getDailyMission(name = 'Developer', date = new Date()) {
  const dayStamp = date.toISOString().slice(0, 10);
  const seed = seededNumber(`${name.toLowerCase()}-${dayStamp}`);

  return {
    dayStamp,
    codename: `${pickFrom(seed, ADJECTIVES)} ${pickFrom(seed, CONSTELLATIONS, 7)}`,
    mission: pickFrom(seed, OBJECTIVES, 13),
    luckyNumber: (seed % 97) + 3
  };
}

export function makeStarfield(width = 28, height = 8, seedText = 'cosmos') {
  const seed = seededNumber(seedText);
  const stars = ['·', '✦', '✧', '✶'];
  const rows = [];

  for (let y = 0; y < height; y += 1) {
    let row = '';
    for (let x = 0; x < width; x += 1) {
      const n = (seed + x * 17 + y * 43) % 23;
      row += n < 2 ? stars[(x + y + seed) % stars.length] : ' ';
    }
    rows.push(row);
  }

  return rows.join('\n');
}
