let currentId = 0;
let moviesList = [];

$(function() {
  $("#movie-form").on("submit", function(evt) {
    evt.preventDefault();
    const title = $("#title").val();
    const rating = $("#rating").val();
    const currentMovie = { title, rating, currentId };
    moviesList.push(currentMovie);
    currentId++;
    const HTMLtoAppend = createMovieDataHTML(currentMovie);
    $("#movie-table-body").append(HTMLtoAppend);
    $("#movie-form").trigger("reset");
  });

  $("tbody").on("click", ".btn.btn-danger", function(evt) {
        const indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
        moviesList.splice(indexToRemoveAt, 1)
        $(evt.target).closest("tr").remove();
  });

  $(".fas").on("click", function(evt) {
        const direction = $(evt.target).hasClass("fa-sort-down") ? "down" : "up";
        const keyToSortBy = $(evt.target).attr("id");
        const sortedMovies = sortBy(moviesList, keyToSortBy, direction);
        $("#movie-table-body").empty();
        for (let movie of sortedMovies) {
            const HTMLtoAppend = createMovieDataHTML(movie);
            $("#movie-table-body").append(HTMLtoAppend);
        }
        $(evt.target).toggleClass("fa-sort-down");
        $(evt.target).toggleClass("fa-sort-up");
    });

});

function sortBy(moviesList, keyToSortBy, direction) {
    return moviesList.sort(function(a, b) {
        if (keyToSortBy === "rating") {
            a[keyToSortBy] = +a[keyToSortBy];
            b[keyToSortBy] = +b[keyToSortBy];
        }
        if (a[keyToSortBy] > b[keyToSortBy]) {
            return direction === "up" ? 1 : -1;
        } else if (b[keyToSortBy] > a[keyToSortBy]) {
            return direction === "up" ? -1 : 1;
        }
        return 0;
    });
}

function createMovieDataHTML(movie) {
    return `<tr>
    <td>${movie.title}</td>
    <td>${movie.rating}</td>
    <td><button class="btn btn-danger" data-delete-id="${movie.currentId}">Delete</button></td>
    </tr>`;
}
