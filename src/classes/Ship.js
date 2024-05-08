export default class Ship {
  constructor(length = 1) {
    this.length = length;
    this.numberOfHits = 0;
    this.sunk = false;
  }
  hit() {
    return ++this.numberOfHits;
  }
  isSunk() {
    return this.numberOfHits === this.length;
  }
}
