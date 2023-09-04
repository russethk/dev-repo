"use strict";

const $allCupcakesListArea = $("#all-cupcakes");
const $addCupcakeForm = $("#add-new-cupcake");

/** TODO: make a global const for base url */


/** Display a single cupcake
 * Takes as input a single cupcake {id, flavor, size...}
*/

function displayOneCupcake(cupcake) {
  const $newCupcakeArea = $("<div>");

  const $newCupcake = $(`<li>
  <p><img class="Cupcake-img"
  src="${cupcake.image}"
  alt="(no image provided)"></p>
  ${cupcake.flavor} / ${cupcake.size} / ${cupcake.rating}
  </li>
  `)

  $newCupcakeArea.append(
    [$newCupcake]
  );

  $allCupcakesListArea.append($newCupcakeArea);
}

/** TODO: make the axios call (get cupcake data) and displaying data diff functions */

/** Queries the API to get the cupcakes and adds to the list on the homepage. */

async function displayAllCupcakes() {
  const response = await axios.get("/api/cupcakes");
  const cupcakes = response.data.cupcakes;

  for (let cupcake of cupcakes) {
    displayOneCupcake(cupcake);
  }
}


/** TODO: write a function for handling the form submit */

/** Handles form submission to let the API know about the new cupcake and
 * updates the list on the homepage to display it. */

$addCupcakeForm.on("submit", async function (event) {
  event.preventDefault();

  const flavor = $("#flavor").val();
  const size = $("#size").val();
  const rating = $("#rating").val();
  const image = $("#image").val();

  const new_cupcake = {
    flavor,
    size,
    rating,
    image
  };

  try {
    const response = await axios.post("/api/cupcakes", new_cupcake);

    displayOneCupcake(response.data.cupcake);
  }
  catch (error) {
    if (error.reponse) {
      /** TODO: add alert for the user -- can even add diff errors depending on status code */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }
});


displayAllCupcakes();

