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
    let answer = undefined;
    while (true){
        answer = prompt("Enter Rock, Paper or Scissors");
        if (answer === 'Rock' || answer === 'Paper' || answer === 'Scissors' ){
            break;
        }
    }
    return answer
}
//Write a function called playRound that uses computer's choice and player's choice as arguments
    //Function should output the winner
    //humanChoice should be case insensitive
function playRound(human, computer) {
    human = human.toLowerCase();
    if (human === computer){
        return 'Tie'
    }
    else if (human === 'rock') {
        if(computer === 'paper'){
            return 'Lose'
        }
        else if (computer === 'scissors'){
            return 'Win'
        }
    }
    else if (human === 'paper'){
        if (computer === 'rock'){
            return 'Win'
        }
        else if (computer === 'scissors'){
            return 'Lose'
        }
    }
    else if (human === 'scissors'){
        if (computer === 'paper'){
            return 'Win'
        }
        else if (computer === 'rock'){
            return 'Lose'
        }
    }
}

//Write a function called playGame that calls playRound to play 5 rounds
function playGame(){
    let result;
    for (let i = 1; i < 6; i++){
        result = playRound(getHumanChoice(), getComputerChoice())
        if (result === 'Tie'){
            console.log('Round ' + i + ' is a Tie!');
        }
        else if(result == 'Win'){
            humanScore += 1;
            console.log('You won round ' + i + '!');
        }
        else{
            computerScore += 1;
            console.log('You lost round ' + i + '!');
        }
    }
    if (humanScore > computerScore){
        console.log('You won!');
    }
    else if (computerScore > humanScore){
        console.log('You lost!');
    }
    else {
        console.log("It's a tie");
    }
    console.log('Your Score: ', humanScore, "Computer's Score: ", computerScore);
}

//Create humanScore variable and computerScore variable
let humanScore = parseInt(0);
let computerScore = parseInt(0);

//Create three buttons, ie. rock, paper, scissors

//Use 'addEventListener' to the button to launch playRound but the button will give the input to the function.
//Two buttons need to be pressed?
//Display results by adding 'div'
//Display running score and declare a winner if a player reaches 5 points

playGame();



