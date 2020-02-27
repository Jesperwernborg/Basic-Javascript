const startButton = document.getElementById('start-button');
const drawButton = document.getElementById('draw-button');
const stayButton = document.getElementById('stay-button');
const clearButton = document.getElementById('clear-scoreboard-button');
const playerContent = document.getElementById('player-content');
const dealerContent = document.getElementById('dealer-content');
const resultContent = document.getElementById('result-content');
const deckContent = document.getElementById('deck-content');
const scoreboardContent = document.getElementById('scoreboard-content');



clearTable = () => {
    playerContent.innerHTML = "";
    dealerContent.innerHTML = "";
    resultContent.innerHTML = "";
}



 disableButtons = (start, draw, stay) => {

    start = false;
    draw = true;
    stay = true;

    
     if (start != false) {
        startButton.disabled = true;
    } else {
        startButton.disabled = false;
    }
     if (draw != true) {
        drawButton.disabled = false;
    } else {
        drawButton.disabled = true;
    } 
    if (stay != true) {
        stayButton.disabled = false;
    } else {
        stayButton.disabled = true;
    }
}


startButton.addEventListener('click', clearTable(), disableButtons(start = true, draw = false, stay = false),console.log('start button clicked'));
console.log(start, draw, stay)


drawButton.addEventListener('click',console.log('draw button clicked'));

stayButton.addEventListener('click', disableButtons(),console.log('stay button clicked'));

clearButton.addEventListener('click',console.log('clear button clicked'));
