/*
On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.

When the rook moves, it chooses one of four cardinal directions (north, east, south, or west), then moves in that direction until it chooses to stop, reaches the edge of the board, captures a black pawn, or is blocked by a white bishop. A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn. The number of available captures for the white rook is the number of pawns that the rook is attacking.

Return the number of available captures for the white rook.

 
*/

const numRookCaptures = board => {
  const [rows, cols] = [new Array(8).fill(''), new Array(8).fill('')];
  let rookRow, rookCol;
  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++) {
      rows[i] += board[i][j];
      cols[i] += board[j][i];
      if ('R' === board[i][j]) [rookRow, rookCol] = [i, j];
    }
  let captures = 0;
  if (/p\.*R/.test(rows[rookRow])) captures++;
  if (/R\.*p/.test(rows[rookRow])) captures++;
  if (/p\.*R/.test(cols[rookCol])) captures++;
  if (/R\.*p/.test(cols[rookCol])) captures++;
  return captures;
};
