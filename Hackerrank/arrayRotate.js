// Complete the rotLeft function below.
function rotLeft(a, d) {
  a.push(...a.splice(0, d));
  return a;
}

let a = [1, 2, 3, 4, 5, 6];
console.log(rotLeft(a, 3));
// console.log(a);
