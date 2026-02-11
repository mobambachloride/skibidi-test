import test from 'node:test';
import assert from 'node:assert/strict';

import { getDailyMission, makeStarfield } from '../src/cosmicMission.js';

test('getDailyMission is deterministic for same input', () => {
  const date = new Date('2026-01-01T12:00:00Z');
  const a = getDailyMission('Ada', date);
  const b = getDailyMission('Ada', date);

  assert.deepEqual(a, b);
});

test('getDailyMission changes when user changes', () => {
  const date = new Date('2026-01-01T12:00:00Z');
  const ada = getDailyMission('Ada', date);
  const grace = getDailyMission('Grace', date);

  assert.notEqual(ada.codename, grace.codename);
});

test('makeStarfield returns expected dimensions', () => {
  const output = makeStarfield(12, 4, 'demo-seed');
  const rows = output.split('\n');

  assert.equal(rows.length, 4);
  assert.ok(rows.every((row) => row.length === 12));
});
