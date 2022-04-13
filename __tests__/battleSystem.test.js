import { diceRoll } from '../src/js/battleSystem.js';

describe('diceRoll', () => {
  
  test('should output a random number between 1 and 10', () => {
    let roll = diceRoll();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(10);
  });
});