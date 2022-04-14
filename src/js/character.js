export default class Character  {
  constructor(name, classType) {
    this.name = name;
    this.classType = classType;
    this.attribute = "";
    this.health = 20;
    this.level = 1;
    this.xp = 0;
    this.potions = 3; 
  }

  classPicker() {
    if (this.classType === "Mage") {
      this.attribute = "Intelligence";
    } else if (this.classType === "Warrior") {
      this.attribute = "Strength";
    } else {
      this.attribute = "Stealth";
    }
  }

  usePotion(amount) {
    return (this.health += (amount * 3));
  }

  levelUp() {
    if (this.xp >= 5) {
      this.level += 1;
      this.xp -= 5;
    } else {
      this.level +=0;
    }
  }
}