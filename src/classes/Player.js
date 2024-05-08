import GameBoard from './GameBoard';

export default class Player {
  constructor(name) {
    this.name = name;
    this.gameBoard = new GameBoard();
  }
  receiveAttack() {}
  areAllShipsSunk() {}
}
