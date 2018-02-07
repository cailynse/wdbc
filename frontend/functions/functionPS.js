function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

//more efficient
//function isEven(num){
//  return num % 2 === 0;
//}


function factorial(num) {
    var product = 1;

    for (var i = num; i > 0; i--) {
        product = product * i;
        //more efficient product *= i;
    }
    return product;
}

function kebabToSnake(stringArg) {
    var snakeStr = stringArg.replace(/-/g, "_");
    return snakeStr;
}
