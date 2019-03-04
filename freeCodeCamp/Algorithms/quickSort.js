let sortLeft = true, sortRight = false;
let array1, cnt = 0;

const quickSort = (start, end, arr) => {
  const pivot = arr[array.length - 1];
  let itemFromLeft = arr[start],
    itemFromRight = arr[end];

    
    if (itemFromLeft >= pivot) {
      if (itemFromRight > pivot) {
        quickSort(start, end - 1, arr);
      } else {
        swap(start, end, arr);
        itemFromLeft = arr[start]
        itemFromRight = arr[end];
      }
    }

  if (itemFromRight <= pivot) {
    if (itemFromLeft < pivot) {
      quickSort(start+1, end, arr);
    } else {
      swap(start, end, arr);
      itemFromRight = arr[end];
      itemFromLeft = arr[start];
    }
  }

  if (end-1 > start+1) quickSort(start+1, end-1, arr);
  else {
      cnt += 1;
      console.log(cnt);
      console.log(arr);
    // const endToEnd = arr.splice(end, arr.length - 2);
    // arr.push(...endToEnd);
    // if (end - 2 === 0) {
    //   console.log('here')
    //   if (arr.indexOf(pivot) === 2) {
    //     swap(start, end-2, arr);
    //   }
    // }
    // if (sortLeft) {
    //   sortLeft = false
    //   quickSort(0, end-2, arr);
    // }
  }
  console.log("this comes first");
};

const array = [1, 4, 2, 8];

quickSort(0, array.length - 2, getPivot(0, array.length - 1, array));

function getPivot(start, end, arr) {
  let pivot;
  const first = arr[start];
  const last = arr[end];
  const mid = arr[Math.floor(end / 2)];
  if ((first <= last && first >= mid) || (first <= mid && first >= last)) {
    pivot = start;
  }
  if ((mid <= first && mid >= last) || (mid <= last && mid >= first)) {
    pivot = Math.floor(end / 2);
  }
  if ((last <= first && last >= mid) || (last <= mid && last >= first)) {
    pivot = end;
  }

  if (end !== pivot) {
    swap(pivot, end, arr);
  }

  return arr;
}

function swap(i1, i2, arr) {
  const holdin = array[i2];
  arr[i2] = arr[i1];
  arr[i1] = holdin;
}
