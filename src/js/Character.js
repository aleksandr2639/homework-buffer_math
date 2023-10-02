export default class Character {
  constructor(name) {
    this.name = name;
    this.attackValue = 0;
    this.stonedValue = false;
  }

  get attack() {
    return (cell) => { // стрелочная функция
      let attack = this.attackValue - 10 * (cell - 1);
      if (this.stoned) {
        attack -= Math.log2(cell) * 5;
      }
      return Math.trunc(attack);
    };
  }

  set attack(value) {
    this.attackValue = value;
  }

  get stoned() {
    return this.stonedValue;
  }

  set stoned(state) {
    this.stonedValue = state;
  }
}
