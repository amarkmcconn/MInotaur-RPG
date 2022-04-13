import Character from './character.js';
import Npc from './npc.js';

export const diceRoll = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export const findAttackPower = (newCharacter) => {
  let level = newCharacter.level;
  const attackPower = level + diceRoll();
  return attackPower;
};

export const findNpcPower = () => {
  let npcPower = diceRoll();
  return npcPower;
};


export let ratNpc = new Npc("Rat", 10);
export let knightNpc = new Npc("Knight", 20);
export let minotaurNpc = new Npc("Minotaur", 30);

export const attackNpc = (newCharacter) => {
  let level = newCharacter.level;
  let npcPower = findNpcPower();
  let playerPower = findAttackPower(newCharacter);
  if (level === 1) {
    if (playerPower > npcPower) {
      ratNpc.health -= playerPower;
      if (ratNpc.health < 0) {
        ratNpc.health = 0;
      }
      return ratNpc.health;
    } else {
      newCharacter.health -= npcPower;
      if (newCharacter.health < 0) {
        newCharacter.health = 0;
      }
      return newCharacter.health;
    }      
  } else if (level === 2) {
    if (playerPower > npcPower) {
      knightNpc.health -= playerPower;
      if (knightNpc.health < 0) {
        knightNpc.health = 0;
      }
      return knightNpc.health;
    } else {
      newCharacter.health -= npcPower;
      return newCharacter.health;
    }
  } else {
    if (playerPower > npcPower) {
      minotaurNpc.health -= playerPower;
      if (minotaurNpc.health < 0) {
        minotaurNpc.health = 0;
      }
      return minotaurNpc.health;
    } else {
      newCharacter.health -= npcPower;
      return newCharacter.health;
    }
  }
};