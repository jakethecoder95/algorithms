function minMaxSum(arr) {

    var minSum = 0;
    var maxSum = 0;
    var arr = arr.sort();

    arr.forEach(function (cur) {
        if (cur != arr[arr.length - 1]) {
            minSum += cur;
        }
        if (cur > arr[0]) {
            maxSum += cur;
        }
    });
        

    console.log(maxSum);
    console.log(minSum);
    console.log(arr);
    return minSum + ' ' + maxSum;

}

var narr = [1, 9, 2, 4, 3, 0, 0, 0, -1, -2];
minMaxSum(narr);