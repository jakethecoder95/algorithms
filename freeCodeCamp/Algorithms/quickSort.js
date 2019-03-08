// CORRECT CODE
const arr = [
  1,
  4,
  2,
  8,
  345,
  123,
  43,
  32,
  5643,
  63,
  123,
  43,
  2,
  55,
  1,
  234,
  92
];

const quickSort = (arr, start, end) => {
  if (start < end) {
    let pivot = partition(arr, start, end);

    // Make sure to read the below comments to understand why pivot - 1 and pivot + 1 are used
    // These are the recursive calls to quickSort
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
  }
};

const partition = (arr, start, end) => {
  let pivot = end;
  // Set i to start - 1 so that it can access the first index in the event that the value at arr[0] is greater than arr[pivot]
  // Succeeding comments will expound upon the above comment
  let i = start - 1;
  let j = start;

  // Increment j up to the index preceding the pivot
  while (j < pivot) {
    // If the value is greater than the pivot increment j
    if (arr[j] > arr[pivot]) {
      j++;
    }

    // When the value at arr[j] is less than the pivot:
    // increment i (arr[i] will be a value greater than arr[pivot]) and swap the value at arr[i] and arr[j]
    else {
      i++;
      swap(arr, j, i);
      j++;
    }
  }

  //The value at arr[i + 1] will be greater than the value of arr[pivot]
  swap(arr, i + 1, pivot);

  //You return i + 1, as the values to the left of it are less than arr[i+1], and values to the right are greater than arr[i + 1]
  // As such, when the recursive quicksorts are called, the new sub arrays will not include this the previously used pivot value
  return i + 1;
};

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

quickSort(arr, 0, arr.length - 1);
console.log(arr);

// OLD CODE
// let pivot = -1,
//   pivotIndex = -1;

// // Completes a single partition: int start and int end and the array itself
// const partition = (start, end, arr) => {
//   let foundLeft, foundRight; // index of item
//   for (; start < end; start++) {
//     if (arr[start] > pivot) {
//       foundLeft = start;
//       break;
//     }
//   }
//   for (; end > start; end--) {
//     if (arr[end] < pivot) {
//       foundRight = end;
//       break;
//     }
//   }
//   if (foundRight && foundLeft) {
//     swap(foundRight, foundLeft, arr);
//   }
//   if (start < end) {
//     return partition(start, end, arr);
//   }

//   swap(pivotIndex, end, arr);
//   return end;
// };

// // Recursive call to partition to sort left first and then right.
// //  int start, int end, array
// function quickSort(array, start, end) {
//   if (start < end) {
//     let j = partition(start, end - 1, setPivot(start, end, array));
//     quickSort(array, start, j - 2);
//     quickSort(array, j + 1, end);
//   } else if (isSorted(array)) {
//     return array;
//   }
// }

// const array = [
//   1,
//   4,
//   2,
//   8,
//   345,
//   123,
//   43,
//   32,
//   5643,
//   63,
//   123,
//   43,
//   2,
//   55,
//   1,
//   234,
//   92
// ];

// quickSort(array, 0, array.length - 1);
// console.log(array);

// // HELPER FUNCTIONS

// // setPivot finds Pivot and moves it out of the way.
// function setPivot(start, end, arr) {
//   const first = arr[start];
//   const last = arr[end];
//   const mid = arr[Math.floor(end / 2)];
//   if ((first <= last && first >= mid) || (first <= mid && first >= last)) {
//     pivotIndex = start;
//   }
//   if ((mid <= first && mid >= last) || (mid <= last && mid >= first)) {
//     pivotIndex = Math.floor(end / 2);
//   }
//   if ((last <= first && last >= mid) || (last <= mid && last >= first)) {
//     pivotIndex = end;
//   }

//   pivot = arr[pivotIndex];
//   if (end !== pivotIndex) {
//     swap(pivotIndex, end, arr);
//     pivotIndex = end;
//   }

//   return arr;
// }

// // Swaps values: i1 = index value 1,
// //               i2 = index value 2
// function swap(i1, i2, arr) {
//   const holdin = array[i2];
//   arr[i2] = arr[i1];
//   arr[i1] = holdin;
// }

// function isSorted(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       swap(i, i + 1, arr);
//       return isSorted(arr);
//     }
//   }
//   return true;
// }
