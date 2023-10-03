const { exit } = require("process");
const readline = require("readline");

let rl;
let number; // This variable will store the number the user needs to guess.

// This function asks the user for input.
function getInput(prompt, callback) {
  rl.question(prompt, callback);
}

function generateRandomNumber() {
  // TODO: Write a function to generate a random number between 1 and 100.
  // Your code here.
  let num = Math.floor(Math.random()*100) + 1;
  return num;
}

// This function contains the game's logic.
function playGame(chosenNumber = null) {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // This checks if a number was provided as an argument. If not, it generates a random number.
  number = chosenNumber || generateRandomNumber();

  /**
   * TODO: Declare and initialize the variables that are required to keep track of game state.
   */
  // Your code here.
  let guessArr = [];
  let guessCount = 0;

  // This is the core game loop where the user is prompted for guesses.
  const askForGuess = () => {
    guessCount+=1;
    if (guessCount <= 10) {
      getInput("Enter your guess: ", (guess) => {
        // TODO: Implement the logic inside this function using recursive functions to achieve the game loop.
        // Your code here.
        guessArr.push(guess);
        if(guess == number) {
          console.log("Congrats! You guessed the correct number.");
          console.log("Your guesses: "+guessArr.join(", "));
        } else if(guess < number) {
          console.log("Your guess is lower than the chosen number.");
          askForGuess();
        } else {
          console.log("Your guess is higher than the chosen number.");
          askForGuess();
        }
      });
    } else {
      console.log("Sorry! You exhausted all your tries.");
      console.log("The correct number was: " + number);
      console.log("Your guesses: " + guessArr.join(", "));
    }
    exit;
  };

  // This starts the game loop.
  askForGuess();
}

// If this file is run directly, execute the playGame function.
if (require.main === module) {
  playGame();
}

module.exports = playGame;
