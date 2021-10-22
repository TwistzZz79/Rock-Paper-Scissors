



function computerPlay(){
   let value = Math.floor(Math.random()*3)+1;
   if(value===1){
       return "rock";
   } 
   else if(value===2){
       return "paper";
   }
   else {
       return "scissors";
   }
}



function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    if(computerSelection===playerSelection){
        return "Tie";
    }
    else if(computerSelection=="rock"&&playerSelection=="scissors"){
        return "Computer win,Player lost";
    }
    else if (computerSelection=="paper"&&playerSelection=="rock"){
        return "Computer win,Player lost";
    }
    else if(computerSelection=="scissors"&&playerSelection=="paper"){
        return "Computer win,Player lost";
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return "Player win,Computer lost";
    }else if
    (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "Player win,Computer lost";

    }else if
    (playerSelection === 'paper' && computerSelection === 'rock'){
        return "Player win,Computer lost";

    }
}

function game(){
    for (let i=0;i<=4;i++){
        let playerSelection =prompt("Player choice");
    console.log(playerSelection);
    let computerSelection=computerPlay();
    console.log(computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }
}