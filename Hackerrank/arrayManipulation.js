/**
 ** DESCRIPTION:
 ** Starting with a 1-indexed array of zeros and a list of operations,
 ** for each operation add a value to each of the array element
 ** between two given indices, inclusive. Once all operations have
 ** been performed, return the maximum value in your array.
 **/

function arrayManipulation(n, queries) {
  var arr = Array(n).fill(0);
  var max = 0;

  // for each sum operation in queries
  for (let i = 0; i < queries.length; i++) {
    // update arr with number to add at index=queries[i][0]  and number to remove at index=queries[i][0]+1 => this will allow us to build each element of the final array by summing all elements before it. The aim of this trick is to lower time complexity
    arr[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] < arr.length) {
      arr[queries[i][1]] -= queries[i][2];
    }
  }
  console.log(arr);
  for (let j = 1; j < n; j++) {
    arr[j] += arr[j - 1];
  }
  console.log(arr);
  for (let k = 0; k < arr.length; k++) {
    max = Math.max(max, arr[k]);
  }
  console.log(arr);
  //max = Math.max(...arr); // not working for big arrays
  console.log(max);
  return max;

  // for (let oper of queries) {
  //   for (let i = oper[0] - 1; i <= oper[1] - 1; i++) {
  //     arr[i] ? (arr[i] += oper[2]) : (arr[i] = oper[2]);
  //     console.log(arr);

  //     if (arr[i] > longest) {
  //       longest = arr[i];
  //     }
  //   }
  // }
}

arrayManipulation(12, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]);

// INPUT: 10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]

// START: 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//        3, 3, 3, 3, 3, 0, 0, 0, 0, 0,
//        3, 3, 3,10,10, 7, 7, 7, 0, 0,
//        3, 3, 3,10,10, 8, 8, 8, 1, 0,

//        [3, [0, 2]], [10, [3, 4], [8, [5, 7]], [1, [8, 8]], [0, [9, 9]]

// longest = 0;
// arr = [];

// for el of query
//   starting at el[0] loop through arr to el[1] adding el[2];
//     if current index > longest
//       longest = current;

// return longest;

//
