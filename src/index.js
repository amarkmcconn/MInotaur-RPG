import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from '../src/js/character.js';
import Npc from '../src/js/npc.js';
import { attackNpc, diceRoll, findAttackPower, findNpcPower, ratNpc, knightNpc, minotaurNpc } from '../src/js/battleSystem.js';


  $('#character-sheet').submit(function(e) {
    e.preventDefault();
    const charName = $('#character-name').val();
    const classType = $('#character-class').val();
    let player = new Character(charName, classType);
    player.classPicker();
    console.log(player);
    $('#character-sheet').hide();
    $('#char-display').show();
    $('#character-name-display').text("Name: " + charName);
    $("#class-display").text("Class: " + classType);
    $('#hp-display').text("Health: " + player.health);
    $('#potion-count').text("Potions: " + player.potions);
    $('#level-display').text("Level: " + player.level);
    $('#xp-display').text("XP: " + player.xp);

    $('#potion-form').submit(function(e) {
      e.preventDefault();
      let potionAmount = $('#potions-to-be-used').val();
      if (player.potions === 0) {
        alert("You are out of potions :(");
      } else if (player.potions < potionAmount) {
        alert("You do not have that many potions!")
      } else {
      player.usePotion(potionAmount);
      player.potions -= potionAmount;
      $('#hp-display').text("Health: " + player.health);
      $('#potion-count').text("Potions: " + player.potions);
      }
    });

  });





