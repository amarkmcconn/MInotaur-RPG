import Npc from '../src/js/npc.js';

describe('Npc', () => {

  test('should create a npc object', () => {
    let newNpc = new Npc("Rat", 10);
    expect(newNpc.type).toEqual("Rat");
    expect(newNpc.health).toEqual(10);
  });
});