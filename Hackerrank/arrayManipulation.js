/**
 ** DESCRIPTION:
 ** Starting with a 1-indexed array of zeros and a list of operations,
 ** for each operation add a value to each of the array element
 ** between two given indices, inclusive. Once all operations have
 ** been performed, return the maximum value in your array.
 **/

function arrayManipulation(n, queries) {
  let longest = -1;
  const arr = [];

  for (let oper of queries) {
    for (let i = oper[0] - 1; i <= oper[1] - 1; i++) {
      arr[i] ? (arr[i] += oper[2]) : (arr[i] = oper[2]);
      console.log(arr);

      if (arr[i] > longest) {
        longest = arr[i];
      }
    }
  }

  console.log(arr[(arr.length - 1) / 2]);
  return longest;
}

arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]);

// INPUT: 10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]

// START: 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//        3, 3, 3, 3, 3, 0, 0, 0, 0, 0,
//        3, 3, 3,10,10, 7, 7, 7, 0, 0,
//        3, 3, 3,10,10, 8, 8, 8, 1, 0,

// longest = 0;
// arr = [];

// for el of query
//   starting at el[0] loop through arr to el[1] adding el[2];
//     if current index > longest
//       longest = current;

// return longest;
