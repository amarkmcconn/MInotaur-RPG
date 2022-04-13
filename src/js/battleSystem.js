import Character from './character.js';
import Npc from './npc.js';

export const diceRoll = () => {
  return Math.floor(Math.random() * 10) + 1;
}

export const findAttackPower = (newCharacter) => {
  let level = newCharacter.level;
  const attackPower = level + diceRoll();
  return attackPower;
}

export const findNpcPower = () => {
  let npcPower = diceRoll();
  return npcPower;
}


  let ratNpc = new Npc("Rat", 10);
  let knightNpc = new Npc("Knight", 20);
  let minotaurNpc = new Npc("Minotaur", 30);

  export const attackNpc = (newCharacter) => {
    let level = newCharacter.level;
    let npcPower = findNpcPower();
    let playerPower = findAttackPower(newCharacter);
      if (level === 1) {
        if (playerPower > npcPower) {
          ratNpc.health -= power;
          return ratNpc.health;
        } else {
          newCharacter.health -= npcPower;
          return newCharacter.health;
        }
      } else {
      
      }
  }