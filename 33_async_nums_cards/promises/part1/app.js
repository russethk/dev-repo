let favNumber = 20;
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
Promise.all(    // Promise.all() takes an array of promises and returns a single promise
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
    ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
    }
);


