console.log = jest.fn();

const readline = require("readline");
const playGame = require("../guessingGame");

describe("Guessing Game", () => {
  let mockQuestion;

  beforeEach(() => {
    mockQuestion = jest.fn();
    readline.createInterface = jest.fn(() => ({
      question: mockQuestion,
      close: jest.fn(),
    }));
  });

  const simulateUserGuesses = (guesses) => {
    guesses.forEach((guess) => {
      mockQuestion.mock.calls.shift()[1](guess); // mock.calls[0][1] retrieves the callback, we invoke it with the guess.
    });
  };

  it("should congratulate user if guessed correctly", () => {
    playGame(50);
    simulateUserGuesses(["50"]);

    const successMsg = "Congrats! You guessed the correct number.";
    const guessesMsg = "Your guesses: 50";
    expect(console.log).toHaveBeenCalledWith(successMsg);
    expect(console.log).toHaveBeenCalledWith(guessesMsg);
  });

  it("should inform user if number is too high or too low", () => {
    playGame(50);
    simulateUserGuesses(["70", "35", "50"]);

    const highMsg = "Your guess is higher than the chosen number.";
    const lowMsg = "Your guess is lower than the chosen number.";
    const successMsg = "Congrats! You guessed the correct number.";
    const guessesMsg = "Your guesses: 70, 35, 50";
    expect(console.log).toHaveBeenCalledWith(highMsg);
    expect(console.log).toHaveBeenCalledWith(lowMsg);
    expect(console.log).toHaveBeenCalledWith(successMsg);
    expect(console.log).toHaveBeenCalledWith(guessesMsg);
  });

  it("should notify the user if they exhausted all tries", () => {
    playGame(50);
    simulateUserGuesses([
      "70",
      "71",
      "72",
      "73",
      "74",
      "75",
      "76",
      "77",
      "78",
      "79",
    ]);

    const failMsg = "Sorry! You exhausted all your tries.";
    const guessesMsg = "Your guesses: 70, 71, 72, 73, 74, 75, 76, 77, 78, 79";
    expect(console.log).toHaveBeenCalledWith(failMsg);
    expect(console.log).toHaveBeenCalledWith(guessesMsg);
  });
});
