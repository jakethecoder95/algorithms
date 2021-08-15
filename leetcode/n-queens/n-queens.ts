const getEmptyRank = (n: number) => {
  let newRank = '';
  for (let i = 0; i < n; i++) {
    newRank += '.';
  }
  return newRank;
};

const moveQueenTo = (index: number, rank: string) => rank
  .replace('Q', '.')
  .substr(0, index) + 'Q' + rank.substr(index + 1);

export const containsCollisions = (board: string[]) => {
  if (board[1] === 'Q') board[1] = 'Q.';
  for (let rankOfQueenIndex = 0; rankOfQueenIndex < board.length - 1; ++rankOfQueenIndex) {
    const rankOfQueen = board[rankOfQueenIndex];
    const fileOfQueenIndex = rankOfQueen.indexOf('Q')!;

    for (let currentRow = rankOfQueenIndex + 1; currentRow < board.length; currentRow++) {
      const distanceFromQueen = currentRow - rankOfQueenIndex;

      // Check vertical line from queen
      if (board[currentRow][fileOfQueenIndex] === 'Q') {
        return true;
      }

      // Check diagonal forward
      const diagonalFrwIndex = fileOfQueenIndex + distanceFromQueen;
      if (board[currentRow][diagonalFrwIndex] === 'Q') {
        return true;
      }

      // Check diagonal backward
      const diagonalBackIndex = fileOfQueenIndex - distanceFromQueen;
      if (board[currentRow][diagonalBackIndex] === 'Q') {
        return true;
      }
    }
  }

  return false;
};

const getValidBoards = (
  n: number,
  rank: number,
  board: string[],
  validBoards: string[][]
) => {

  const newBoard = [ ...board, getEmptyRank(n) ];

  for (let file = 0; file < n; file++) {
    newBoard[rank] = moveQueenTo(file, newBoard[rank]);

    if (!containsCollisions(newBoard)) {
      rank === n - 1
        ? validBoards.push([ ...newBoard ])
        : getValidBoards(n, rank + 1, newBoard, validBoards);
    }
  }
};

export const solveNQueens = (n: number) => {
  const validBoards = [];
  getValidBoards(n, 0, [], validBoards);
  return validBoards;
};

