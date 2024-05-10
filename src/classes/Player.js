import GameBoard from './GameBoard';

export default class Player {
  constructor(name, computer = false) {
    this.computer = computer;
    this.name = name;
    this.gameBoard = new GameBoard();
  }
}
