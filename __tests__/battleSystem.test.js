import { attackNpc, diceRoll, findAttackPower } from '../src/js/battleSystem.js';
import Character from '../src/js/character.js';

describe('diceRoll', () => {
  
  test('should output a random number between 1 and 10', () => {
    let roll = diceRoll();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(10);
  });
});

describe('findAttackPower', () => {

  test('should add rolled dice number and level to equal new attack power',  () => {
    let newCharacter = new Character ("Jack", "Mage");
    let attackPower = findAttackPower(newCharacter);
    expect(attackPower).toBeGreaterThanOrEqual(2);
    expect(attackPower).toBeLessThanOrEqual(11);
  });
});

describe('attackNpc', () => {

  test('should return a random dice roll for npc power', () => {
    let newCharacter = new Character ("Jack", "Mage");
    let npcPower = attackNpc(newCharacter);
    expect(npcPower).toBeGreaterThanOrEqual(1);
    expect(npcPower).toBeLessThanOrEqual(10);
  });
});