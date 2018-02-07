console.log("Printing all numbers between -10 and 19");

for (var i = -10; i < 19; i++) {
    console.log(i);
}

console.log("Printing all even numbers between 10 and 40");

for (var h = 10; h < 40; h++) {
    if (h % 2 === 0) {
        console.log(h);
    }
}

console.log("Printing all odd numbers between 300 and 333");

for (var j = 300; j < 333; j++) {
    if (j % 2 === 1) {
        console.log(j);
    }
}

console.log("Printing all numbers between 5 and 50 that are divisible by 5 and 3");

for (var k = 5; k < 50; k++) {
    if (k % 5 === 0 && k % 3 === 0) {
        console.log(k);
    }
}
