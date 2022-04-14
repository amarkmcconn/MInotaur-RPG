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
    $('#character-sheet').hide();
    $('#char-display').show();
    $('#npc-display').show();
    $('#character-name-display').text("Name: " + charName);
    $("#class-display").text("Class: " + classType);
    $('#hp-display').text("Health: " + player.health);
    $('#potion-count').text("Potions: " + player.potions);
    $('#level-display').text("Level: " + player.level);
    $('#xp-display').text("XP: " + player.xp);
    $('#npc-dispaly').show();
    $('#npc-name').text("Monster: " + ratNpc.type);
    $('#npc-health').text("Monster Health: " + ratNpc.health);

    $('#potion-form').submit(function(e) {
      e.preventDefault();
      let potionAmount = $('#potions-to-be-used').val();
      if (player.potions === 0) {
        alert("You are out of potions :(");
      } else if (player.potions < potionAmount) {
        alert("You do not have that many potions!");
      } else {
      player.usePotion(potionAmount);
      player.potions -= potionAmount;
      $('#hp-display').text("Health: " + player.health);
      $('#potion-count').text("Potions: " + player.potions);
      }
    });

    $('#fight').click(function() {
      attackNpc(player);
      $('#level-display').text("Level: " + player.level);
      player.levelUp();
      $('#npc-health').text("Monster Health: " + ratNpc.health);
      $('#hp-display').text("Health: " + player.health);
      $('#xp-display').text("XP: " + player.xp);
      
      if (ratNpc.health <= 0) {
        alert ("You killed a Rat!");
        ratNpc.health = 10;
      } else if (knightNpc.health <= 0) {
        alert ("You killed a Knight!");
        knightNpc.health = 20;
      } else if (minotaurNpc.health <= 0) {
        $('#char-display').hide();
        $('#npc-display').hide();
        $('#game-over-display').show();
        $('#game-over').text("YOU WIN! THANKS FOR PLAYING!");
      }

      if (player.level === 2) {
        $('#npc-name').text("Monster: " + knightNpc.type);
        $('#npc-health').text("Monster Health: " + knightNpc.health);
      } else if (player.level === 3) {
        $('#npc-name').text("Monster: " + minotaurNpc.type);
        $('#npc-health').text("Monster Health: " + minotaurNpc.health);
      }

      if (player.health <= 0) {
        $('#game-over-display').show();
        $('#game-over').text("YOU DIED! GAME OVER!");
        $('#char-display').hide();
        $('#npc-display').hide();
        $('#directions').hide();
      }

    });
  });





