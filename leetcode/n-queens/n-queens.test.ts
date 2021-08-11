import _ from 'lodash';
import solveNQueens, { containsCollisions } from './n-queens';

describe('n-queens problem', () => {

  it('should return correct answer when input is "1"', () => {
    const correctAnswer = [["Q"]];
    expect(_.isEqual(solveNQueens(1), correctAnswer)).toBe(true);
  });

  it('should return correct answer when input is "4"', () => {
    const correctAnswer = [[".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."]];
    expect(_.isEqual(solveNQueens(4), correctAnswer)).toBe(true);
  });

});

describe('containsCollisions', () => {

  it('should not find collisions', () => {
    expect(containsCollisions([".Q..","...Q","Q...","..Q."])).toBe(false);
    expect(containsCollisions(["..Q.","Q...","...Q",".Q.."])).toBe(false);
  })

  it('should not find collisions', () => {
    expect(containsCollisions(["Q...","..Q.","Q...","..Q."])).toBe(true);
    expect(containsCollisions(["..Q.","Q...","...Q","..Q."])).toBe(true);
  })

});
