let favNumber = 5;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
}
);

// 2.
let favNumbers = [7, 11, 22];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
  console.log(data);
}
);

// 3.
let facts = [];
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  facts.push(data.text);
  $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    facts.push(data.text);
    $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
      facts.push(data.text);
      $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
        facts.push(data.text);
        facts.forEach(fact => {
          $("body").append(`<p>${fact}</p>`);
        });
      });
    });
  });
});
