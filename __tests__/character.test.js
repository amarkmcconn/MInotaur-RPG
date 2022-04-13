import Character from '../src/js/character.js';

describe('Character', () => {

  test('It should correctly create a Character object', () => {
    const character = new Character ("Jack", "Mage", "Strength");
    expect(character.name).toEqual("Jack");
    expect(character.classType).toEqual("Mage");
    expect(character.attributes).toEqual("Strength");
  });
});