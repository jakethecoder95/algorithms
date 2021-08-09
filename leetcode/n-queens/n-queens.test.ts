import _ from 'lodash';
import solveNQueens from './n-queens';  

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

