function bouncer(age) {
    var usrAge = prompt("What is your age?");

    if (usrAge < 0) {
        console.log("Error - age must be positive!");
    } else if (usrAge < 18) {
        console.log("Sorry, you are not old enough to enter");
    } else if (usrAge < 21) {
        console.log("You can enter but you cannot drink");
    } else {
        console.log("come on in and have a drink!");
    }

    if ((usrAge % 2) !== 0) {
        console.log("Your age is odd!!");
    } else if (usrAge === 21) {
        console.log("Happy 21st Birthday!!");
    }

}
