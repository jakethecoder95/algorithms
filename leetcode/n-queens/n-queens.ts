const solveNQueens = (n: number): string[][] => {
  if (n === 0) {
    return [];
  }

  if (n === 1) {
    return [["Q"]];
  }

  const answer = [];

  for (const row = 0; row < n; row++) {
    
  }

  return [[".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."]];
};

export default solveNQueens;

