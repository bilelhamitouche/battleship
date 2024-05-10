export default class Ship {
  constructor(length = 1, orientation = 'horizontal') {
    this.length = length;
    this.orientation = orientation;
    this.numberOfHits = 0;
  }
  hit() {
    return ++this.numberOfHits;
  }
  isSunk() {
    return this.numberOfHits === this.length;
  }
}
