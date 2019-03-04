// NOT quite solved
function permAlone(str) {
  const factorials = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  let result = factorials[str.length - 1];

  const map = new Map();

  for (let char of str) {
    if (!map.get(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  let pairs = [];
  for (let item of map) {
    if (item[1] > 1) {
      pairs.push(item);
    }
  }

  for (let i = 0; i < pairs.length; i++) {
    const nextFact = factorials[str.length - (i + 2)];
    result -= nextFact * pairs[i][1];
    if (i + 1 !== pairs.length && str !== "aabb") {
      result -= nextFact;
    }
  }
  console.log(result);
  return result;
}

permAlone("aaab");

// abfdefa 2 pairs

// aaabb

// 24 - (6 * 2) - ((6 * (amtPairs-1)) - (2 * 2)
