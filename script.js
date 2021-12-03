let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// Comparing guesses

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    if (Math.abs(userGuess - targetNumber) <= Math.abs(computerGuess - targetNumber)) {
        return true;
    } else {
        return false;
    };
};

// Updating score

const updateScore = (score) => {
    switch (score) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    };
};

// Advance round

const advanceRound = () => {
    currentRoundNumber++;
};

