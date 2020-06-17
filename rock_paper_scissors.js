const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if( userInput === 'rock'  ||  userInput === 'paper'  || userInput === 'scissors' || userInput === 'bomb' ) {
        return userInput;
    } else {
        console.log('Error!');
    }

};

function  getCopmputerChoice() {

    switch( Math.floor(Math.random() * 3) ){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

function determineWinner (userChoice, computerChoice){

    if (userChoice === 'bomb'){
        return console.log("The user win");
    }
    if( userChoice === computerChoice ){
        return console.log("Tie, then the game ends in a draw");
    }

    if( userChoice === 'rock' ){
        if (computerChoice == 'paper'){
            return console.log('The computer win')
        } else {
            return console.log('The user win')
        }
    }
    if( userChoice === 'paper' ){
        if (computerChoice == 'scissors'){
            return console.log('The computer win')
        } else {
            return console.log('The user win')
        }
    }
    if( userChoice === 'scissors' ){
        if (computerChoice == 'rock'){
            return console.log('The computer win')
        } else {
            return console.log('The user win')
        }
    }


}

function playGame(){
    const userChoice = getUserChoice("bomb");
    const computerChoice = getCopmputerChoice();
    console.log(`User choice: ${userChoice}`)
    console.log(`Computer choice: ${computerChoice}`)
    determineWinner(userChoice, computerChoice);

}

playGame();