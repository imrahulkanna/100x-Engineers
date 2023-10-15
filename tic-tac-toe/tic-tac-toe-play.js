const {ticTacToe} = require("./tic-tac-toe.js");
const prompt = require('prompt-sync')();

const Xname = prompt("Enter X player name: ").toUpperCase();
const Oname = prompt("Enter O player name: ").toUpperCase();;
let playerNames = { X: Xname, O: Oname };
const play = ticTacToe(playerNames);
let currentPlayer = playerNames.X;
let gameStatus = "ongoing";

do {
  console.log(`Current Player: ${currentPlayer}`);
  const position = prompt("Enter a position: ");
  const playReturn = play(currentPlayer, position);
  currentPlayer = playReturn[0]; // Update currentPlayer
  gameStatus = playReturn[1]; // Update gameStatus
} while (gameStatus === "ongoing");

if(gameStatus === "draw") {
  console.log(`All positions are filled. It's a draw!`)
} else {
  console.log(`Congratulations! ${currentPlayer} won the game`)
}