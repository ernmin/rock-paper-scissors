// Write a function to get the Computer's Choice
function getComputerChoice(){
    let num = Math.random();
    if (num >= 0 && num < 0.33){
        return 'rock';
    }
    else if (num >= 0.33 && num < 0.67){
        return 'paper';
    }
    else{
        return 'scissors';
    }

}

//Write a function to get the player's input
function getHumanChoice(){
    return prompt("Enter Rock, Paper or Scissors")
}
//Create humanScore variable and computerScore variable
let humanScore = parseInt(0);
let computerScore = parseInt(0);

//Write a function called playRound that uses computer's choice and player's choice as arguments
    //Function should output the winner
    //humanChoice should be case insensitive
function playRound(human, computer) {
    if (human === computer){
        return 'Tie'
    }
    else if (human === 'Rock') {
        if(computer === 'Paper'){
            return 'You lose!'
        }
        else if (computer === 'Scissors'){
            return 'You win!'
        }
    }
    else if (human === 'Paper'){
        if (computer === 'Rock'){
            return 'You win!'
        }
        else if (computer === 'Scissors'){
            return 'You lose!'
        }
    }
    else if (human === 'Scissors'){
        if (computer === 'Paper'){
            return 'You win!'
        }
        else if (computer === 'Rock'){
            return 'You lose!'
        }
    }
}

console.log(playRound('Scissors', 'Paper'))
//Write a function called playGame that calls playRound to play 5 rounds
