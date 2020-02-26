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
    div.innerHTML = "";
}
disableButtons = (start, draw, stay) => {
    start = false;
    draw = true;
    stay = true;

    if (start.value != false) {
        start.disable = true;
    } else {
        start.disable = false;
    }
    if (draw.value != true) {
        draw.disable = false;
    } else {
        draw.disable = true;
    }
    if (stay.value != true) {
        stay.disable = false;
    } else {
        stay.disable = true;
    }
}

startButton.addEventListener('click', clearTable, disableButtons(true, false, false), console.log('start button clicked'));

drawButton.addEventListener('click', console.log('Draw button clicked'));

stayButton.addEventListener('click', disableButtons(false, true, true), console.log('Stay button clicked'));

clearButton.addEventListener('click', console.log('Clear button clicked'));