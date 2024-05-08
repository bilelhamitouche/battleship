
import Ship from '../src/classes/Ship';

test('Testing if Ship class exists', () => {
  expect(Ship).toBeDefined();
}); 

test('Testing if calling with new works as intended', () => {
  expect(new Ship()).toEqual({
    length: 1,
    numberOfHits: 0,
    sunk: false,
  });
  expect(new Ship(5)).toEqual({
    length: 5,
    numberOfHits: 0,
    sunk: false,
  });
  expect(new Ship().hit).toBeDefined();
  expect(new Ship().isSunk).toBeDefined();
});

describe('Testing if the builtin methods works', () => {
  test('Testing if the hit() method works', () => {
    const ship1 = new Ship();
    expect(ship1.hit()).toBe(1);
    expect(ship1.hit()).toBe(2);
    expect(ship1.hit()).toBe(3);
  });

  test('Testing if the isSunk() method works', () => {
    const ship1 = new Ship(2);
    expect(ship1.isSunk()).toBe(false);
    ship1.hit();
    ship1.hit();
    expect(ship1.isSunk()).toBe(true);
  });
});
