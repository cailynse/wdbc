function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function factorial(num) {

    var product = 1;

    for (var i = num; i > 0; i--) {
        product = product * i;
    }
    return product;
}

function kebabToSnake(stringArg) {
    var snakeStr = stringArg.replace(/-/g, "_");
    return snakeStr;
}
