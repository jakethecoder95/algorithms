function minMaxSum(arr) {

    var minSum = 0;
    var maxSum = 0;
    var arr = arr.sort();

    arr.forEach(function (cur, i) {
        if (i != arr.length - 1) {
            minSum += cur;
        }
        if (i > 0) {
            maxSum += cur;
        }
    });
        

    console.log(minSum + ' ' + maxSum);
    return minSum + ' ' + maxSum;

}

var narr = [5, 5,5,5,5];
minMaxSum(narr);