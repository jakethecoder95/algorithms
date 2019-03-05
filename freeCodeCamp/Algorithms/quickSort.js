
let pivot = -1,
  pivotIndex = -1;

// Completes a single partition: int start and int end and the array itself
const partition = (start, end, arr) => {
  let foundLeft, foundRight; // index of item
  for (; start < end; start++) {
    if (arr[start] > pivot) {
      foundLeft = start;
      break;
    }
  }
  for (; end > start; end--) {
    if (arr[end] < pivot) {
      foundRight = end;
      break;
    }
  }
  if (foundRight && foundLeft) {
    swap(foundRight, foundLeft, arr);
  }
  if (start < end) {
    return partition(start, end, arr);
  }
  swap(pivotIndex, end, arr);
  return end;
};

// Recursive call to partition to sort left first and then right.
//  int start, int end, array
function quickSort(start, end, arr) {
  if (start < end) {
    let j = partition(start, end - 1, setPivot(start, end, arr));
    console.log(arr);
    quickSort(start, j-2, arr);
    quickSort(j + 1, end, arr);
  }
}

const array = [
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

quickSort(0, array.length - 1, array);
console.log(array);

// HELPER FUNCTIONS

// setPivot finds Pivot and moves it out of the way.
function setPivot(start, end, arr) {
  const first = arr[start];
  const last = arr[end];
  const mid = arr[Math.floor(end / 2)];
  if ((first <= last && first >= mid) || (first <= mid && first >= last)) {
    pivotIndex = start;
  }
  if ((mid <= first && mid >= last) || (mid <= last && mid >= first)) {
    pivotIndex = Math.floor(end / 2);
  }
  if ((last <= first && last >= mid) || (last <= mid && last >= first)) {
    pivotIndex = end;
  }

  pivot = arr[pivotIndex];
  if (end !== pivotIndex) {
    swap(pivotIndex, end, arr);
    pivotIndex = end;
  }

  return arr;
}

// Swaps values: i1 = index value 1,
//               i2 = index value 2
function swap(i1, i2, arr) {
  const holdin = array[i2];
  arr[i2] = arr[i1];
  arr[i1] = holdin;
}
