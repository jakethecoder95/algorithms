export const containsCollisions = (board: string[]) => {
  for (let rowOfQueenIndex = 0; rowOfQueenIndex < board.length - 1; ++rowOfQueenIndex) {
    const rowOfQueen = board[rowOfQueenIndex];
    const fileOfQueen = rowOfQueen.indexOf('Q')!;

    for (let currentRow = rowOfQueenIndex + 1; currentRow < board.length; currentRow++) {

      // Check vertical line from queen
      if (board[currentRow][fileOfQueen] === 'Q') {
        return true;
      }

      // Check diagonal forward
      const rowsFrw = currentRow - rowOfQueenIndex;
      const diagonalFrwIndex = fileOfQueen + rowsFrw;
      if (diagonalFrwIndex >= board.length && board[currentRow][diagonalFrwIndex] === 'Q') {
        return true;
      }

      // Check diagonal backward
      const rowsBack = currentRow - rowOfQueenIndex;
      const diagonalBackIndex = fileOfQueen - rowsBack;
      if (diagonalBackIndex < 0 && board[currentRow][diagonalBackIndex] === 'Q') {
        return true;
      }
    }
  }

  return false;
};

const getBoardPosition = (startingIndexForQueen: number, n: number) => {
  const board: string[] = [];

  let indexForQueen = startingIndexForQueen;
  for (let row = 0; row < n; row++) {
    for (let file = 0; file < n; file++) {

      if (file === 0) board[row] = '';
      board[row] += file === indexForQueen ? 'Q' : '.';
    }

    indexForQueen = (indexForQueen + 2) % n;
  }

  return board;
};

const forEachBoardPosition = (n: number, cb: Function) => {
  for (let row = 0; row < n; row++) {
    const boardPosition = getBoardPosition(row, n);
    cb(boardPosition);
  }
};

const solveNQueens = (n: number): string[][] => {
  if (n === 0) {
    return [];
  }

  if (n === 1) {
    return [['Q']];
  }

  const validBoards: string[][] = [];
  forEachBoardPosition(n, (board: any) => {
    if (!containsCollisions(board)) {
      validBoards.push(board);
    }
  });

  return validBoards;
};

export default solveNQueens;

