// Complete the rotLeft function below.
function rotLeft(a, d) {
  const back = a.splice(0, 3);
  a.push(...back);
}

let a = [1, 2, 3, 4, 5, 6];
rotLeft(a, 3);
console.log(a);
