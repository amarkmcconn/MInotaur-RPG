import Character from '../src/js/character.js';

describe('Character', () => {
let character;

beforeEach(() => {
  character = new Character ("Jack", "Mage");
});


  test('It should correctly create a Character object', () => {
    expect(character.name).toEqual("Jack");
    expect(character.classType).toEqual("Mage");
  });
  
  test('should receive Mage as class type and change attribute to Intelligence', () => {
    character.classPicker();
    expect(character.attribute).toEqual("Intelligence");
  });

  test('should receive Warrior as class type and change attribute to Strength', () => {
    let newCharacter = new Character("Mike", "Warrior")
    newCharacter.classPicker();
    expect(newCharacter.attribute).toEqual("Strength");
  });

});