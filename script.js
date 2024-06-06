// Write a function to get the Computer's Choice
function getComputerChoice(){
    let num = Math.random();
    if (num >= 0 && num < 0.33){
        return 'Rock';
    }
    else if (num >= 0.33 && num < 0.67){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }

}

//Write a function to get the player's input
function getHumanChoice(){
    
}
//Create humanScore variable and computerScore variable

//Write a function called playRound that uses computer's choice and player's choice as arguments
    //Function should output the winner
    //humanChoice should be case insensitive

//Write a function called playGame that calls playRound to play 5 rounds
