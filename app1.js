// #1

let faveNub = 5;
const BaseUrl = "http://numbersapi.com";

$.getJSON(`${BaseUrl}/${faveNub}?json`).then((response) => {
  console.log(response);
});

// #2

let faveNubs = [5, 9, 11];
$.getJSON(`${BaseUrl}/${faveNubs}?json`).then((response) => {
  console.log(response);
});

// #3

let faveNumPromises = [];
for (let i = 1; i <= 4; i++) {
  faveNumPromises.push($.getJSON(`${BaseUrl}/${faveNub}?json`));
}

Promise.all(faveNumPromises).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
