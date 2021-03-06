function printReverse(arr) {
    //get the last index
    var i = arr.length - 1;

    //as long as the index is 0 or higher print the value of the index
    arr.forEach(function (reverse) {
        while (i >= 0) {
            console.log(arr[i]);
            i--
        }
    });
}

//or I could have used a for loop
// for (var i = arr.length - 1; i >= 0; i--)
//      console.log(arr[i]);

function isUniform(arr) {
    //check that all items are the same

    var lastIndex = arr.length - 1;

    for (var i = 0; i < lastIndex; i++) {
        if (arr[i] !== arr[i + 1]) {
            return false;
        }
    }
    return true;
}


function sumArray(arr) {

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

//I could have done a forEach
//var total = 0;
//arr.forEach(function(element){
//  total += element;
//});
//return total;
//


function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
