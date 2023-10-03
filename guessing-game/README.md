[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/i-monl-L)
# 🤔 Guessing Game in Javascript

In this exercise, you'll implement the logic for a command-line game where the user tries to guess a randomly generated number.

## Objective:

Your task is to fill in the missing code for the game's logic in `guessingGame.js`. Look for the `TODO` comments to guide you on what parts you need to implement.

## Rules:

1. The game will randomly generate a number between 1 and 100 inclusive.
2. You will be prompted to enter a guess.
3. After each guess, the game will inform you if your guess is too high, too low, or correct.
4. You have a maximum of 10 tries to guess the correct number.
5. After 10 incorrect guesses, or upon guessing correctly, the game will end.
6. At the end of the game, whether you guessed the number or not, the game will display all of your guesses.

## Expected Output:

When a user makes a guess:

1. If the guess is correct:

```
Congrats! You guessed the correct number.
Your guesses: [list of guesses]
```

2. If they've run out of tries:

```
Sorry! You exhausted all your tries.
The correct number was: [actual number]
Your guesses: [list of guesses]
```

3. If the guess is too high:

```
Your guess is higher than the chosen number.
```

4. If the guess is too low:

```
Your guess is lower than the chosen number.
```

## Examples:

### Example 1:

**Command Line Interaction**:

```
Enter your guess: 50
Your guess is lower than the chosen number.
Enter your guess: 75
Your guess is higher than the chosen number.
Enter your guess: 63
Congrats! You guessed the correct number.
Your guesses: 50, 75, 63
```

### Example 2:

**Command Line Interaction**:

```
Enter your guess: 5
Your guess is lower than the chosen number.
Enter your guess: 3
Your guess is lower than the chosen number.
... [continues for 10 guesses]
Sorry! You exhausted all your tries.
The correct number was: 42
Your guesses: 5, 3, ... [list all 10 guesses]
```

## Instructions:

1. Before starting the coding, understand the flow and structure of the given template in `guessingGame.js`.
2. Make sure you use recursive functions for the game loop.
3. Always store the user's guesses and display them at the end of the game.
4. Ensure that the outputs from your code exactly match the expected outputs above.
5. Test your code frequently to ensure it's working as expected.
