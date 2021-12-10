const btns = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
let playerScore = 0
let computerScore = 0

btns.forEach(btn =>{
    btn.addEventListener('click', e => {
        const btnName = btn.dataset.selection
        userSelection(btnName)
    })
})

function userSelection(selection) {
    let computerSelection = computerPlay()
    playRound(selection, computerSelection)
    
    addSelectionResult(computerSelection)
    addSelectionResult(selection)
}

function addSelectionResult(selection) {
    const div = document.createElement('div')
    div.innerText = selection
    finalColumn.after(div)

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

function playRound(selection, opponentSelection){
    let result = ""
    if ((selection == "rock" && opponentSelection == "scissors")||
    (selection == "paper" && opponentSelection == "rock")||
    (selection == "scissors" && opponentSelection == "paper")){
        playerScore++
        result = "Winner!"
    }else if (selection == opponentSelection){
        result = "Draw"
    }else {
        computerScore++
        result = "Loser!"
    }
    if (playerScore == 5){
        alert("you win");
        document.location.reload();
    }else if (computerScore == 5){
        alert('you lose');
        document.location.reload();
    }
    document.getElementById('yourScore').innerHTML = playerScore
    document.getElementById('computerScore').innerHTML = computerScore
    document.getElementById('result').innerHTML = result
    return
}
