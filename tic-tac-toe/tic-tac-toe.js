const getGameStatus = (board, emo, position) => {
  const winningCombos = [
    // rows
    [1,2,3],
    [4,5,6],
    [7,8,9],
    // columns
    [1,4,7],
    [2,5,8],
    [3,6,9],
    // diagonals
    [1,5,9],
    [3,5,7]
  ]

  // checking for draw
  let isDraw = true;
  for(let i=1; i<=9; i++) {
    if(board[i] === "_") {
      isDraw = false;
      break;
    }
  }

  if(isDraw) return 'draw';

  // checking for the win of currentPlayer
  const isWin = winningCombos.some(([i1, i2, i3]) => {
    return board[i1] === emo && board[i2] === emo && board[i3] === emo;
  });

  return isWin ? "win" : "ongoing";
}

const ticTacToe = (playerNames) => {
  console.log('\nTIC-TAC-TOE\n');
  let X = playerNames.X;
  let O = playerNames.O;

  let emo = {
    [X]: 'X',
    [O]: "O"
  };

  const board = [
    "",
    "_", "_", "_",
    "_", "_", "_",
    "_", "_", "_"
  ];

  return (currentPlayer, position) => {
    if (!(1 <= position && position <= 9) || board[position] !== "_") {
      console.log("\nInvalid move. Try again!\n");
      return [currentPlayer, "ongoing"];
    }

    const nextPlayer = (currentPlayer === X) ? O : X;
    board[position] = emo[currentPlayer];
    
    console.log(`\n${board[1]}  ${board[2]}  ${board[3]}
${board[4]}  ${board[5]}  ${board[6]}
${board[7]}  ${board[8]}  ${board[9]}\n`)

    const status = getGameStatus(board, emo[currentPlayer],position);

    if(status === 'win') {
      return [currentPlayer, status];
    }
    return [nextPlayer, status];
  };

}

module.exports = {ticTacToe};