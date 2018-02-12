var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi There, welcome to my assignment!");
});

app.get("/speak/:animal/", function (req, res) {
    var animal = req.params.animal;
    var sound = findSound(animal);

    function findSound(animal) {
        if (animal === "pig") {
            return "'Oink'";
        } else if (animal === "cow") {
            return "'Moo'";
        } else if (animal === "dog") {
            return "'Woof Woof!'";
        } else {
            return null;
        }
    }


    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:amount", function (req, res) {
    var word = req.params.word;
    var amount = req.params.amount;
    var str = makeString(word, amount);

    function makeString(word, amount) {
        var str = ""
        for (var i = 0; i < amount; i++) {
            str += word + " ";

        }
        return str.trim();
    }

    res.send(str);
});

app.get("*", function (req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

//Tell Express to listen for requests (start Server)
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Assignment One Online");
});
