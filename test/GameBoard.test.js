import GameBoard from '../src/classes/GameBoard';
import Ship from '../src/classes/Ship';

test('Testing if Gameboard class exists', () => {
  expect(GameBoard).toBeDefined();
});

test('Testing if calling with new works as intended', () => {
  expect(new GameBoard()).toEqual({
    ships: [],
    attacks: [],
  });
  expect(new GameBoard().fillArrays).toBeDefined();
  expect(new GameBoard().receiveAttack).toBeDefined();
  expect(new GameBoard().areAllShipsSunk).toBeDefined();
});

describe('Testing GameBoard methods as intended', () => {
  test('Testing if fillBoard method works as intended', () => {
    const board = new GameBoard();
    board.fillArrays();
    expect(board.ships[0][0]).toBe(null);
    expect(board.attacks[0][0]).toBe(null);
  });
  test('Testing if placeShip method works as intended', () => {
    const board = new GameBoard();
    board.fillArrays();
    const ship = new Ship(3, 'horizontal');
    board.placeShip(ship, [1, 2]);
    expect(board.ships[1][2]).toEqual({
      length: 3,
      orientation: 'horizontal',
      numberOfHits: 0,
    });
    expect(board.ships[1][3]).toEqual({
      length: 3,
      orientation: 'horizontal',
      numberOfHits: 0,
    });
    expect(board.ships[1][4]).toEqual({
      length: 3,
      orientation: 'horizontal',
      numberOfHits: 0,
    });
  });
  test('Testing if receiveAttack method works as intended', () => {
    const board = new GameBoard();
    board.fillArrays();
    const ships = [new Ship(1), new Ship(2), new Ship(3), new Ship(4)];
    const shipsCoordinates = [
      [0, 0],
      [3, 1],
      [2, 2],
      [5, 6],
    ];
    for (let i = 0; i < ships.length; i++) {
      board.placeShip(ships[i], shipsCoordinates[i]);
    }
    board.receiveAttack([0, 0]);
    board.receiveAttack([1, 0]);
    board.receiveAttack([3, 1]);
    board.receiveAttack([4, 0]);
    board.receiveAttack([2, 2]);
    board.receiveAttack([5, 6]);
    expect(board.attacks[1][0]).toBe('miss');
    expect(board.attacks[4][0]).toBe('miss');
    expect(ships[1].numberOfHits).toBe(1);
    expect(ships[2].numberOfHits).toBe(1);
    expect(ships[3].numberOfHits).toBe(1);
  });
  test('Testing if areAllShipsSunk method works as intended', () => {
    const board = new GameBoard();
    board.fillArrays();
    const ships = [new Ship(1), new Ship(2)];
    const shipsCoordinates = [
      [0, 0],
      [3, 1],
    ];
    board.placeShip(ships[0], shipsCoordinates[0]);
    board.placeShip(ships[1], shipsCoordinates[1]);
    board.receiveAttack([0, 0]);
    board.receiveAttack([3, 1]);
    expect(board.areAllShipsSunk()).toBe(false);
    board.receiveAttack([3, 2]);
    expect(board.areAllShipsSunk()).toBe(true);
  });
});
