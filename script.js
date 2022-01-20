//   Rock Paper scissors
function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return 'rock';
            break;
        case 1: return 'paper';
            break;
        case 2: return 'scissors';
            break;
    }
}

function winnerOfRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) return 'tie';
    else if (userSelection === 'rock') {
        if (computerSelection === 'paper') return 'computer';       
        else return 'user';
    }
    else if (userSelection === 'paper') {
        if (computerSelection === 'rock') return 'user';
        else return 'computer';
    }
    else if (userSelection === 'scissors') {
        if (computerSelection === 'rock') return 'computer';
        else return 'user';
    }
}


function playRound() {

    //Getting current scores of user and computer
    let userScoreElement = document.querySelector('.user-score');
    let computerScoreElement = document.querySelector('.computer-score');
    let userScore = parseInt(userScoreElement.textContent);
    let computerScore = parseInt(computerScoreElement.textContent);

    // Getting user's selection
    let userSelectionElement = this;
    let userSelection = userSelectionElement.getAttribute('data-key');
    
    // Getting computer's selection
    let computerSelection = computerPlay();

    //Computing winner of the round
    let roundWinner = winnerOfRound(userSelection, computerSelection);
    let result = document.querySelector('.result');

    //Getting the Button
    const button = document.querySelector('button');
    const btn = button.firstElementChild;

    if(userScore < 4 && computerScore < 4) {

        //Updating scores and displaying winner

        if(roundWinner === 'tie') {
            result.textContent = `It was a tie! You picked ${userSelection} and the Computer picked ${computerSelection}`;
        }
        else if(roundWinner === 'user') {
            userScore++;
            userScoreElement.textContent = userScore.toString();
            result.textContent = `You Won! You picked ${userSelection} and the Computer picked ${computerSelection}`;
        }
        else if(roundWinner === 'computer') {
            computerScore++;
            computerScoreElement.textContent = computerScore.toString();
            result.textContent = `You Lose! You picked ${userSelection} and the Computer picked ${computerSelection}`;
        }
    }

    else if(userScore === 4) {

        if(roundWinner === 'tie') {
            result.textContent = `It was a tie! You picked ${userSelection} and the Computer picked ${computerSelection}`;
        }
        else if(roundWinner === 'user') {
            userScore++;
            userScoreElement.textContent = userScore.toString();
            result.textContent = 'You Win the Game! Computer stood no chance ha-ha-ha-ha!';
            const options = document.querySelectorAll('.player-option');
            options.forEach(option => {
                option.removeEventListener('click', playRound);
            });
            button.classList.remove('none');
            btn.textContent = "Play Again"; 
        }
        else if(roundWinner === 'computer') {
            computerScore++;
            computerScoreElement.textContent = computerScore.toString();
            if(computerScore === 5) {
                result.textContent = 'You Lost the Game :( Better Luck Next Time!';
                const options = document.querySelectorAll('.player-option');
                options.forEach(option => {
                    option.removeEventListener('click', playRound);
                });
                button.classList.remove('none');
                btn.textContent = "Play Again";
            }
            else {
                result.textContent = `You Lose! You picked ${userSelection} and the Computer picked ${computerSelection}`;
            }   
        }
    }
    else if(computerScore === 4) {

        if(roundWinner === 'tie') {
            result.textContent = `It was a tie! You picked ${userSelection} and the Computer picked ${computerSelection}`;
        }
        else if(roundWinner === 'computer') {
            computerScore++;
            computerScoreElement.textContent = computerScore.toString();
            result.textContent = 'You Lost the Game :( Better Luck Next Time!';
            const options = document.querySelectorAll('.player-option');
            options.forEach(option => {
                option.removeEventListener('click', playRound);
            });
            button.classList.remove('none');
            btn.textContent = "Play Again";
        }
        else if(roundWinner === 'user') {
            userScore++;
            userScoreElement.textContent = userScore.toString();
            if(computerScore === 5) {
                result.textContent = 'You Win the Game! Computer stood no chance ha-ha-ha-ha!';
                const options = document.querySelectorAll('.player-option');
                options.forEach(option => {
                    option.removeEventListener('click', playRound);
                });
                button.classList.remove('none');
                btn.textContent = "Play Again";
            }
            else {
                result.textContent = `You Win! You picked ${userSelection} and the Computer picked ${computerSelection}`;
            }   
        }
    }
}

function playFiveRounds() {
    if(btn.textContent === 'Play Again') {
        document.querySelector('.user-score').textContent = '0';
        document.querySelector('.computer-score').textContent = '0';
    }

    //Adding Event Handler Function to all option buttons
    const options = document.querySelectorAll('.player-option');
    options.forEach(option => {
        option.addEventListener('click', playRound);
    });

    let result = document.querySelector('.result');
    //Displaying first turn message
    result.textContent = "Play the first turn!";
}


function game() {
    button.classList.add('none');
    playFiveRounds();
}

// Adding Button Event Handler
const button = document.querySelector('button');
const btn = button.firstElementChild;
button.addEventListener('click', game);