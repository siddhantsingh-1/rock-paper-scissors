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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie';
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return 'computer';
        }
        else {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return 'player';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return 'player';
        }
        else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return 'computer';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return 'computer';
        }
        else {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return 'player';
        }
    }
}


    if (playerScore == 3) {
        console.log('You Win the game! Your final score is: 3');
    } else {
        console.log(`You Lose the game! Your final score is: ${playerScore}`);
    }

game();