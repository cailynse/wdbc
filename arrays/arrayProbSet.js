function printReverse(arr) {
    //get the last index
    var i = arr.length - 1

    //as long as the index is 0 or higher print the value of the index
    arr.forEach(function (reverse) {
        while (i >= 0) {
            console.log(arr[i]);
            i--
        }
    });
}
