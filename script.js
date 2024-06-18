document.addEventListener('DOMContentLoaded', function() {
    //Create humanScore variable and computerScore variable
    let humanScore = parseInt(0);
    let computerScore = parseInt(0);

    //Display results by adding 'div'
    //Display running score and declare a winner if a player reaches 5 points
    
    //addEventListener to get humanchoice function
    let answer;
    const humanchoice = document.querySelector('.humanchoice');
    const computerchoice = document.querySelector('.computerchoice');
    const humanscore = document.querySelector('.humanscore');
    const computerscore = document.querySelector('.computerscore');
    const outcome = document.querySelector('.outcome');
    const finaloutcome = document.querySelector('.finaloutcome');
    const restart = document.querySelector('#restart');
    restart.style.visibility = 'hidden';

    //Create three buttons, ie. rock, paper, scissors
    const all_buttons = document.querySelectorAll('.btn')

    //Use 'addEventListener' to the button to launch playRound but the button will give the input to the function.
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].addEventListener('click', function(){
            answer = this.id;
            humanchoice.textContent = 'Human: ' + answer;
            playGame(answer);
        })
    }
    
    // Write a function to get the Computer's Choice
    function getComputerChoice(){
    
        let num = Math.random();
        if (num >= 0 && num < 0.33){
            computerchoice.textContent = 'Computer: ' + 'Rock';
            return 'rock';
        }
        else if (num >= 0.33 && num < 0.67){
            computerchoice.textContent = 'Computer: ' + 'Paper';
            return 'paper';
        }
        else{
            computerchoice.textContent = 'Computer: ' + 'Scissors';
            return 'scissors';
        }

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
    function playGame(answer){
        let result;
        
        //for (let i = 1; i < 6; i++){
        result = playRound(answer, getComputerChoice())
        if (result === 'Tie'){
            outcome.textContent = "The round is a Tie!";
            humanscore.textContent = 'Your Score: ' + humanScore;
            computerscore.textContent = "Computer's Score: " + computerScore;
        }
        else if(result == 'Win'){
            humanScore += 1;
            outcome.textContent = "You won this round!";
            humanscore.textContent = 'Your Score: ' + humanScore;
            computerscore.textContent = "Computer's Score: " + computerScore;
        }
        else{
            computerScore += 1;
            outcome.textContent = "You lost this round!";
            humanscore.textContent = 'Your Score: ' + humanScore;
            computerscore.textContent = "Computer's Score: " + computerScore;
        }
        //}
        if (humanScore === 5){
            finaloutcome.textContent = "You won! Game Over";
            restart.style.visibility = 'visible';
            for (let i = 0; i < all_buttons.length; i++){
                all_buttons[i].style.visibility = 'hidden';
            }
            restart.addEventListener('click', resetGame);
            
        }
        else if (computerScore === 5){
            finaloutcome.textContent = "You lost! Game Over";
            restart.style.visibility = 'visible';
            for (let i = 0; i < all_buttons.length; i++){
                all_buttons[i].style.visibility = 'hidden';
            }
            restart.addEventListener('click', resetGame);
            
        }
        console.log('Your Score: ', humanScore, "Computer's Score: ", computerScore);
    }
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        humanchoice.textContent = '';
        computerchoice.textContent = '';
        outcome.textContent = '';
        finaloutcome.textContent = '';
        humanscore.textContent = '';
        computerscore.textContent = '';
        restart.style.visibility = 'hidden';
        for (let i = 0; i < all_buttons.length; i++){
            all_buttons[i].style.visibility = 'visible';
        }
    }
});



