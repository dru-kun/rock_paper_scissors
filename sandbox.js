let userScore = 0
let computerScore = 0

function userPlay(){
    let userPlay = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    return userPlay;
}

function computerPlay(){
    let computerPlay = Math.random();
    
    if (computerPlay <= .33){
        computerPlay = "rock";
    } else if (computerPlay > .33 && computerPlay < .67){
        computerPlay = "paper";
    } else {
        computerPlay = "scissors";
    }

    return computerPlay;
} 

function playRound(userPlay, computerPlay){
    if (userPlay == computerPlay){
        return "Draw";
    } else if (userPlay == "rock" && computerPlay == "scissors"){
        userScore++;
        return "You Win";
    } else if (userPlay == "rock" && computerPlay == "paper"){
        computerScore++;
        return "You Lose";
    } else if (userPlay == "paper" && computerPlay == "rock"){
        userScore++;
        return "You Win";
    } else if (userPlay == "paper" && computerPlay == "scissors"){
        computerScore++;
        return "You Lose";
    } else if (userPlay == "scissors" && computerPlay == "paper"){
        userScore++;
        return "You Win";
    } else if (userPlay == "scissors" && computerPlay == "rock"){
        computerScore++;
        return "You Lose";
    } else{
        return "Something went wrong";
    }
    
} 

function game(){
    for (
        i = 0; i < 5; i++){
        console.log(playRound(userPlay(), computerPlay()));
    }
}

//console.log(playRound(userPlay(), computerPlay()));

console.log(game())

console.log(`player score: ${userScore} | computer score: ${computerScore}`);
