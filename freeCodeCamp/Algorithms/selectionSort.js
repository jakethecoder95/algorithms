function selectionSort(array) {
  let lowest = 9007199254740991;
  let lowestI = -1;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < lowest) {
        lowest = array[j];
        lowestI = j;
      }
      if (j === array.length - 1) {
        let holdIn = array[i];
        array[i] = array[lowestI];
        array[lowestI] = holdIn;
        lowest = 9007199254740991;
      }
    }
  }
  return array;
}

testArr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
selectionSort(testArr);

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
