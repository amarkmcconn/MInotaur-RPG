import Character from './character.js';

export const usePotion = (amount) => {
  let playerHealth = newCharacter.health;
  for (let i = 0; i >= amount; i++) {
    playerhealth += 3;
    }
  newCharacter.health = playerHealth;
  }
  
  
  // const usePotion = (amount) => {
  // let potionCount = amount.length;
  // if (potionCount === 0) {
  //   alert("You don't have any potions!");
  // }
  // for (let i = 0; i >= potionCount; i++) {
  //   newCharacter.health += 3;
  //   }
  // return newCharacter.health;
  // }