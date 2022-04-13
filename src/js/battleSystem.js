export const diceRoll = () => {
  return Math.floor(Math.random() * 10) + 1;
}


// attackPower = character.level + diceRoll();