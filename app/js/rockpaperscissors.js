////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

    /*
    computerMove = randomPlay();
    
    console.log("Computer move is  " + computerMove + "!");

    getWinner(playerMove,computerMove);
    return computerMove;  */

    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove === computerMove) {
        winner = 'tie';
    }
    else if(playerMove == "rock") {
        if(computerMove == "paper") {
            winner = 'computer';
        }
        else {
            winner = 'player';
        }
    }
    else if(playerMove == "paper") {
        if(computerMove == "scissors") {
            winner = 'computer';
        }
        else {
            winner = 'player';
        }
    }
    else {
        if(computerMove == "rock") {
            winner = 'computer';
        }
        else {
            winner = 'player';
        };
    };

/*if (playerMove === "rock" && computerMove === "scissors" || playerMove === "scissors" && computerMove === "paper" || playerMove === "paper" && computerMove === "rock")
    {
        
        console.log("Player wins");
        winner = "player";

    }
else if(playerMove === "scissors" && computerMove === "rock" || playerMove === "paper" && computerMove == "scissors" || playerMove === "rock" && computerMove === "paper")
{
   console.log("Computer wins");
   winner ="computer";

}
else if (playerMove === "rock" && computerMove === "rock" || playerMove === "scissors" && computerMove === "scissors" || playerMove === "paper" && computerMove === "paper")
 {
    console.log("It's a tie");
     winner = "tie";
 }*/

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */


    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        if(winner === "player") {
            playerWins += 1;
        }
        else if (winner === "computer") {
            computerWins += 1;
        }
        else if (winner === "tie") {
            console.log("It's a Tie!");
        };

        console.log("Player chose " + playerMove + " and computer chose " + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);

    };

    if(playerWins == 5) {
        console.log("PLAYER WINS!");
    }
    else if (computerWins == 5) {
        console.log("COMPUTER WINS");
    };


    return [playerWins, computerWins];
};

playToFive();

