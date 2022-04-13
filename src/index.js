


import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from '../src/js/character.js';
import Npc from '../src/js/npc.js'
import { attackNpc, diceRoll, findAttackPower, findNpcPower, ratNpc, knightNpc, minotaurNpc } from '../src/js/battleSystem.js';

$('#character-sheet').submit(function(e) {
  e.preventDefault();
  const charName = $('#character-name').val();
  const charClass = $('#character-class').val();
  let playerCharacter = new Character(charName, charClass);

});

// form input, input
// let newCharacter = new Character(input, input)
// newCharacter.classPicker();
// battleSystem(newCharacter);

