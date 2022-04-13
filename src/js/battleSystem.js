import Character from './character.js';

export const diceRoll = () => {
  return Math.floor(Math.random() * 10) + 1;
}

export const findAttackPower = (newCharacter) => {
  let level = newCharacter.level;
  const attackPower = level + diceRoll();
  return attackPower;
}