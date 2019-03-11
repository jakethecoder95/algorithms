function mergeSort(array) {
  // 1) Break down array into single values
  for (let i in array) array[i] = [array[i]];
  console.log(array);

  // 2) Build back up to one sorted array
  merge(array, 0, 0, 0);

  return array;
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

mergeSort(array);

function merge(array, startArrInd, first, second) {
  if (array.length === 1) {
    return array;
  }
  

}

// [1], 
