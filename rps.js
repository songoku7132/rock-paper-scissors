let playerScore = 0
let computerScore = 0
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');   
const btnScissors = document.querySelector('.scissors');

function disableButtons() {
    btnRock.disabled = true   
    btnPaper.disabled = true   
    btnScissors.disabled = true   
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection){
    let computerSelection = getComputerChoice()
    let result=''
    if (computerSelection === 'rock' && playerSelection === 'rock'){
        result = ('Tie game. You both chose '+playerSelection+ '<br></br>Player score: '+playerScore+'<br>Computer score: '+computerScore)
        console.log(computerSelection)
    }else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        console.log(computerSelection)
    }else if (computerSelection === 'rock' && playerSelection === 'paper'){
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        console.log(computerSelection)
    }else if (computerSelection === 'paper' && playerSelection === 'paper'){
        result = ('Tie game. You both chose '+playerSelection+ '<br></br>Player score: '+playerScore+'<br>Computer score: '+computerScore)
        console.log(computerSelection)
    }else if (computerSelection === 'paper' && playerSelection === 'rock'){
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        console.log(computerSelection)
    }else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        console.log(computerSelection)
    }else if (computerSelection === 'scissors' && playerSelection === 'scissors'){
        result = ('Tie game. You both chose '+playerSelection+ '<br></br>Player score: '+playerScore+'<br>Computer score: '+computerScore)
        console.log(computerSelection)
    }else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        console.log(computerSelection)
    }else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        console.log(computerSelection)
    }
    if (playerScore == 5) {
        result += '<br><br>You won the game! Reload the page to play again'
        disableButtons()
    }
    if (computerScore == 5) {
        result += '<br><br>You lose the game! Reload the page to play again'
        disableButtons()
    }
    document.getElementById("result").innerHTML = result 
    return
} 

btnRock.addEventListener('click', function(){
    console.log('rock')
    console.log(playRound('rock'));
});
    
btnPaper.addEventListener('click', function(){
    console.log('paper')
    console.log(playRound('paper'));
})
    
btnScissors.addEventListener('click', function(){
    console.log('scissors')
    console.log(playRound('scissors'));
})

