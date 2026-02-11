import { getDailyMission, makeStarfield } from './cosmicMission.js';

const userName = process.argv[2] ?? process.env.USER ?? 'Developer';
const mission = getDailyMission(userName);

const header = `🚀 Cosmic Briefing for ${userName}`;
const line = '─'.repeat(header.length);

console.log(line);
console.log(header);
console.log(line);
console.log(makeStarfield(36, 8, `${userName}-${mission.dayStamp}`));
console.log('');
console.log(`Callsign: ${mission.codename}`);
console.log(`Today's mission: ${mission.mission}`);
console.log(`Lucky number: ${mission.luckyNumber}`);
console.log('');
console.log('Tip: run this again tomorrow for a brand new mission.');
