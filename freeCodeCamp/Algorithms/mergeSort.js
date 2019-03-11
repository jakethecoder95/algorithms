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
console.log(array);

/**********************************************************************
 ** Function Name: mergeSort
 ** Parameters:    One array
 ** Description:   This is the primary function that calls the other
 **                functions, which are doing the work.
 ************************************************************************/
function mergeSort(array) {
  // 1) Break down array into single values
  for (let i in array) array[i] = [array[i]];

  // 2) Build back up to one sorted array
  merge(array, 0);
  let replacement = array[0];
  for (let i in replacement) {
    array[i] = replacement[i];
  }

  return array;
}

/**********************************************************************
 ** Function Name: merge
 ** Parameters:    array, int startArrInd: index of first array to be
 **                sorted
 ** Description:   Takes a divided array and merges them so their sorted.
 ************************************************************************/
function merge(array, startArrInd) {
  if (array.length === 1) {
    return array;
  }

  const firstArr = array[startArrInd];
  const secondArr = array[startArrInd + 1];

  const newArr = mergeOne(firstArr, secondArr);

  array[startArrInd + 1] = newArr;
  array.splice(startArrInd, 1);

  if (startArrInd + 1 === array.length - 1 || !array[startArrInd + 1]) {
    return merge(array, 0);
  }
  return merge(array, startArrInd + 1);
}

/**********************************************************************
 ** Function Name: mergeOne
 ** Parameters:    arr1: Array, arr2 Array
 ** Description:   This function does the work of merging two arrays.
 ************************************************************************/
function mergeOne(arr1, arr2) {
  const newArr = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i++]);
      if (i === arr1.length) {
        newArr.push(...arr2.slice(j, arr2.length));
        break;
      }
    }
    if (arr2[j] < arr1[i]) {
      newArr.push(arr2[j++]);
      if (j === arr2.length) {
        newArr.push(...arr1.slice(i, arr1.length));
        break;
      }
    }
    if (arr1[i] === arr2[j]) {
      newArr.push(arr1[i], arr2[j]);
      i++, j++;
    }
  }
  return newArr;
}
