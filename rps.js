for (i = 1;i <= 5;i++){
    function getComputerChoice(max) {
        return Math.floor(Math.random() * max);
    }
    let item=getComputerChoice(3)
    if (item===0){
        item='rock';
    }else if (item===1){
        item='paper';
    }else{
        item='scissors'
    }
    let computerSelection=item
    console.log(computerSelection)

    let playerSelection='nothing'
    let x = prompt('Choose rock, paper or scissors');
    x=x.toLowerCase()
        if (x==='rock'){
            playerSelection='rock'
        }else if (x==='paper'){
            playerSelection='paper'  
        }else if (x==='scissors'){
            playerSelection='scissors'   
        }
    console.log(playerSelection)
    
    console.log(playRound(playerSelection,computerSelection))
}

function playRound(playerSelection,computerSelection){
    if (computerSelection === 'rock' && playerSelection === 'rock'){
        return 'Tie game'
    }else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        return 'You Lose! Rock beats Scissors'
    }else if (computerSelection === 'rock' && playerSelection === 'paper'){
        return 'You Win! Paper beats Rock'
    }else if (computerSelection === 'paper' && playerSelection === 'paper'){
        return 'Tie game'
    }else if (computerSelection === 'paper' && playerSelection === 'rock'){
        return 'You Lose! Paper beats Rock'
    }else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        return 'You Win! Scissors beats Paper'
    }else if (computerSelection === 'scissors' && playerSelection === 'scissors'){
        return 'Tie game'
    }else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        return 'You Lose! Scissors beats Paper'
    }else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        return 'You Win! Rock beats Scissors'
    }
}


