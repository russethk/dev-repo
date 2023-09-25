let favNumber = 7;
let baseURL = "http://numbersapi.com";

// 1.
async function getnums1() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}
getnums1();

// 2.
const favNumbers = [7, 11, 22];
async function getnums2() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}
getnums2();

// 3.
async function getnums3() {
  let facts = await Promise.all(    // Promise.all() takes an array of promises and returns a single promise
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
getnums3();


