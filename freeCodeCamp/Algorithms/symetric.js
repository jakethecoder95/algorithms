function sym(...args) {
  let result = [];
  let i = args.length;
  while (args.length > 1) {
    for (let el of args[0]) {
      if (args[1].indexOf(el) === -1) {
        if (result.indexOf(el) === -1) {
          result.push(el);
        }
      }
    }
    for (let el of args[1]) {
      if (args[0].indexOf(el) === -1) {
        if (result.indexOf(el) === -1) {
          result.push(el);
        }
      }
    }
    args.shift();
    args[0] = result;
    result = [];
  }
  console.log(args[0]);
  console.log(result);
  return args[0];
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
//  [1, 2, 4, 5, 6, 7, 8, 9]

// loop through args
// loop each element in cur
// loop each element in next
// unshift cur and change next to result
