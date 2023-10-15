# Tic-Tac-Toe

## Steps to setup and play
1. Clone the repo
2. Open the terminal to the current folder
3. Run `npm install` command to install the `prompt-sync` dependency
4. Enter `node tic-tac-toe-play.js` to run the file and you are ready to play the TIC-TAC-TOE game

## Board Design
  `_  _  _`<br>
  `_  _  _`<br>
  `_  _  _`<br>

## Rules
1. Two Players - {X,O}
2. Always X starts the game
3. Alternate turns
4. Can't mark their move in existing positions
5. Game Ending Posibilities
    1. Game win - X
    2. Game win - O
    3. Game draw - all positions filled
6. Game-winning combinations
    - [1,2,3]
    - [4,5,6]
    - [7,8,9]
    - [1,4,7]
    - [2,5,8]
    - [3,6,9]
    - [1,5,9]
    - [3,5,7]

## Game Requirements
1. Store the players' name
2. Store the board
3. Store the game status [ win | draw | ongoing ]
4. Store current player, nextPlayer
