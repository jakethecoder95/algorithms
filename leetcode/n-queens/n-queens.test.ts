import { solveNQueens, containsCollisions } from './n-queens';

describe('n-queens problem', () => {

  it('should return correct answer when input is 1', () => {
    const correctAnswer = [['Q']];
    expect(solveNQueens(1)).toEqual(correctAnswer);
  });

  it('should return correct answer when input is 4', () => {
    const correctAnswer = [];
    expect(solveNQueens(2)).toEqual(correctAnswer);
  });

  it('should return correct answer when input is 4', () => {
    const correctAnswer = [['.Q..','...Q','Q...','..Q.'], ['..Q.','Q...','...Q','.Q..']];
    expect(solveNQueens(4)).toEqual(correctAnswer);
  });

});

describe('containsCollisions', () => {

  it('should not find collisions', () => {
    expect(containsCollisions(['.Q..','...Q','Q...','..Q.'])).toBe(false);
    expect(containsCollisions(['..Q.','Q...','...Q','.Q..'])).toBe(false);
  })

  it('should find collisions', () => {
    expect(containsCollisions([ '.Q', 'Q.' ])).toBe(true);
    expect(containsCollisions(['Q...','..Q.','Q...','..Q.'])).toBe(true);
    expect(containsCollisions(['..Q.','Q...','...Q','..Q.'])).toBe(true);
  })

});
