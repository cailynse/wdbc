var movieDB = [
    {
        title: "Moulin Rouge",
        rating: "*****",
        hasWatched: true
    },
    {
        title: "The Green Mile",
        rating: "****",
        hasWatched: false
    },
    {
        title: "Patch Adams",
        rating: "*****",
        hasWatched: true
    },
    {
        title: "All Dogs go to Heaven",
        rating: "*****",
        hasWatched: true
    }
        ]

function movieReport(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]["hasWatched"] === true) {
            console.log("You have watched " + arr[i]["title"] + " - " + arr[i]["rating"]);
        } else {
            console.log("You have not watched " + arr[i]["title"] + " - " + arr[i]["rating"]);
        }
    }
}

//or
movieDB.forEach(function (movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not watched ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating;
    console.log(result);
})
