export default class GameBoard {
  constructor() {
    this.ships = [];
    this.attacks = [];
  }
  fillArrays() {
    for (let i = 0; i < 10; i++) {
      this.ships[i] = [];
      this.attacks[i] = [];
      for (let j = 0; j < 10; j++) {
        this.ships[i][j] = null;
        this.attacks[i][j] = null;
      }
    }
  }
  placeShip(ship, coordinates) {
    for (let i = 0; i < ship.length; i++) {
      if ((ship.orientation = 'horizontal')) {
        this.ships[coordinates[0]][coordinates[1] + i] = ship;
      } else {
        this.ships[coordinates[0] + i][coordinates[1]] = ship;
      }
    }
  }
  receiveAttack(coordinates) {
    this.ships[coordinates[0]][coordinates[1]] === null
      ? (this.attacks[coordinates[0]][coordinates[1]] = 'miss')
      : this.ships[coordinates[0]][coordinates[1]].hit();
  }
  areAllShipsSunk() {
    const ships = [];
    for (let i = 0; i < this.ships.length; i++) {
      for (let j = 0; j < this.ships.length; j++) {
        if (this.ships[i][j]) ships.push(this.ships[i][j].isSunk());
      }
    }
    return !ships.includes(false);
  }
}
