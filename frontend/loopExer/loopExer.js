function evenWhile(first, last) {
    var i = first;
    while (i < last) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}

function evenFor(first, last) {
    for (var i = first; i < last; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function asciiArt(height) {
    var string = "$";
    for (var i = 1; i <= height; i++) {
        console.log(string);
        string = string + "$";
    }
}

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                console.log("FizzBuzz");
            } else {
                console.log("Fizz");
            }
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
