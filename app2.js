// #1

$.getJSON("https://deckofcardsapi.com/api/deck/new/draw/?count=1").then(
  (response) => {
    console.log(
      `Your card was a ${response.cards[0].value} of ${response.cards[0].suit}`
    );
  }
);

// #2

let cardPromises = [];
for (let i = 1; i <= 2; i++) {
  cardPromises.push(
    $.getJSON("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
  );
}

Promise.all(cardPromises).then((cardsArray) => {
  cardsArray.forEach((response) => {
    console.log(
      `Your card was a ${response.cards[0].value} of ${response.cards[0].suit}`
    );
  });
});

// #3

$drawButton = $("button");
let deckId = null;

$.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle`).then(
  (response) => {
    deckId = response.deck_id;
    $drawButton.show();
  }
);

$drawButton.click(function () {
  $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then(
    (response) => {
      deckId;
      $("#cardpile").append(`<img src="${response.cards[0].image}"></img>`);
      if (response.remaining == 0) {
        $drawButton.hide();
      }
    }
  );
});
