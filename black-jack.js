//document.getElementById('newGame').onclick = function () {
//  location.href = 'play.html'
//};

//All the characters

const outputArea = document.getElementById("output-area");

let deck = [];

const cards = [
  // Spades
  {
    name: "aceOfSpades",
    card: "🂡",
    value: 1
  },
  {
    name: "twoOfSpades",
    card: "🂢",
    value: 2
  },
  {
    name: "ThreeOfSpades",
    card: "🂣",
    value: 3
  },
  {
    name: "fourOfSpades",
    card: "🂤",
    value: 4
  },
  {
    name: "fiveOfSpades",
    card: "🂥",
    value: 5
  },
  {
    name: "sixOfSpades",
    card: "🂦",
    value: 6
  },
  {
    name: "sevenOfSpades",
    card: "🂧",
    value: 7
  },
  {
    name: "eightOfSpades",
    card: "🂨",
    value: 8
  },
  {
    name: "nineOfSpades",
    card: "🂩",
    value: 9
  },

  {
    name: "tenOfSpades",
    card: "🂪",
    value: 10
  },
  {
    name: "jackOfSpades",
    card: "🂫",
    value: 10
  },
  {
    name: "queenOfSpades",
    card: "🂭",
    value: 10
  },
  {
    name: "kingOfSpades",
    card: "🂮",
    value: 10
  },
  // Hearts
  {
    name: "aceOfHearts",
    card: "🂱",
    value: 1
  },
  {
    name: "twoOfHearts",
    card: "🂲",
    value: 2
  },
  {
    name: "ThreeOfHearts",
    card: "🂳",
    value: 3
  },
  {
    name: "fourOfHearts",
    card: "🂴",
    value: 4
  },
  {
    name: "fiveOfHearts",
    card: "🂵",
    value: 5
  },
  {
    name: "sixOfHearts",
    card: "🂶",
    value: 6
  },
  {
    name: "sevenOfHearts",
    card: "🂷",
    value: 7
  },
  {
    name: "eightOfHearts",
    card: "🂸",
    value: 8
  },
  {
    name: "nineOfHearts",
    card: "🂹",
    value: 9
  },

  {
    name: "tenOfHearts",
    card: "🂺",
    value: 10
  },
  {
    name: "jackOfHearts",
    card: "🂻",
    value: 10
  },
  {
    name: "queenOfHearts",
    card: "🂽",
    value: 10
  },
  {
    name: "kingOfHearts",
    card: "🂾",
    value: 10
  },
  // Diamonds
  {
    name: "aceOfDiamonds",
    card: "🃁",
    value: 1
  },
  {
    name: "twoOfDiamonds",
    card: "🃂",
    value: 2
  },
  {
    name: "ThreeOfDiamonds",
    card: "🃃",
    value: 3
  },
  {
    name: "fourOfDiamonds",
    card: "🃄",
    value: 4
  },
  {
    name: "fiveOfDiamonds",
    card: "🃅",
    value: 5
  },
  {
    name: "sixOfDiamonds",
    card: "🃆",
    value: 6
  },
  {
    name: "sevenOfDiamonds",
    card: "🃇",
    value: 7
  },
  {
    name: "eightOfDiamonds",
    card: "🃈",
    value: 8
  },
  {
    name: "nineOfDiamonds",
    card: "🃉",
    value: 9
  },

  {
    name: "tenOfDiamonds",
    card: "🃊",
    value: 10
  },
  {
    name: "jackOfDiamonds",
    card: "🃋",
    value: 10
  },
  {
    name: "queenOfDiamonds",
    card: "🃍",
    value: 10
  },
  {
    name: "kingOfDiamonds",
    card: "🃎",
    value: 10
  },
  // Clubs
  {
    name: "aceOfClubs",
    card: "🃒",
    value: 1
  },
  {
    name: "twoOfClubs",
    card: "🃒",
    value: 2
  },
  {
    name: "ThreeOfClubs",
    card: "🃓",
    value: 3
  },
  {
    name: "fourOfClubs",
    card: "🃔",
    value: 4
  },
  {
    name: "fiveOfClubs",
    card: "🂤",
    value: 5
  },
  {
    name: "sixOfClubs",
    card: "🂤",
    value: 6
  },
  {
    name: "sevenOfClubs",
    card: "🂤",
    value: 7
  },
  {
    name: "eightOfClubs",
    card: "🂤",
    value: 8
  },
  {
    name: "nineOfClubs",
    card: "🂤",
    value: 9
  },

  {
    name: "tenOfClubs",
    card: "🂤",
    value: 10
  },
  {
    name: "jackOfClubs",
    card: "🂤",
    value: 10
  },
  {
    name: "queenOfClubs",
    card: "🂤",
    value: 10
  },
  {
    name: "kingOfClubs",
    card: "🂤",
    value: 10
  }
];

function shuffleDeck() {
  let tmpDeck = cards;

  while (tmpDeck.length > 0) {
    let getCard = Math.ceil(Math.random() * tmpDeck.length - 1);
    let cards = tmpDeck.splice(getCard, 1);
    deck.push(cards);
  }
}

shuffleDeck();

/* deck.forEach(Element => {
    outputArea.innerHTML += deck.card
}); */
// let firstCard = deck.shift();

function drawCard() {
  let firstCard = deck.shift();

  console.log(firstCard);
  firstCard.map((card, index) => {
    return (outputArea.innerHTML += card.card);
  });
}

document.getElementById("new-game-button").addEventListener("click", () => {
  let x = 0;
  let intervalID = setInterval(function() {
    drawCard();
    if (++x === 2) {
      window.clearInterval(intervalID);
    }
  }, 500);
});

// firstCard.forEach(Element => {
//   outputArea.innerHTML += firstCard;
// });

//This shows the card
//document.getElementById("output-area").innerHTML = queenOfSpades.card, queenOfSpades.card;
