function hourglassSum(arr) {
  let greatest = -Infinity;

  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 5; j++) {
      let cnt = 0;
      cnt += arr[i][j - 1] + arr[i][j] + arr[i][j + 1];
      cnt += arr[i + 1][j];
      cnt += arr[i + 2][j - 1] + arr[i + 2][j] + arr[i + 2][j + 1];
      if (cnt > greatest) {
        greatest = cnt;
      }
    }
  }

  return greatest;
}

const arr2d = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
];

hourglassSum(arr2d);

// greatest = -1
// loop through each first four
//  loop through middle four
//    look left one, right, down one, down 2 - center, left, right;
