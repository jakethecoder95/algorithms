/*
 ** sherlockAndAnagrams:
 **
 ** Two strings are anagrams of each other if the letters
 ** of one string can be rearranged to form the other string.
 ** Given a string, find the number of pairs of substrings
 ** of the string that are anagrams of each other.
 */

function sherlockAndAnagrams(s) {
  const map = {};

  substringCombinations(s, map);

  let matches = 0,
    cnt = 0;
  const mapKeys = Object.keys(map);
  for (const sub in map) {
    if (sub.length === 1) {
      matches += combinations(map[sub], 2);
    }
    if (sub.length > 1) {
      matches += map[sub] - 1;
      let test = "";
      for (const letter of sub) {
        test += `(?!.*${letter}.*${letter})`;
      }
      const regex = RegExp(`^${test}[${sub}]*$`);
      for (let i = cnt + 1; i < mapKeys.length; i++) {
        if (i !== cnt) {
          const isEqualLength = mapKeys[i].length === sub.length;
          if (regex.test(mapKeys[i]) && isEqualLength) {
            console.log(sub);
            console.log(mapKeys[i]);
            console.log(matches);
            matches += 1;
          }
        }
      }
    }
    cnt++;
  }
  console.log(matches);
  console.log(map);
}

function product_Range(a, b) {
  var prd = a,
    i = a;

  while (i++ < b) {
    prd *= i;
  }
  return prd;
}

function combinations(n, r) {
  if (n == r) {
    return 1;
  } else {
    r = r < n - r ? n - r : r;
    return product_Range(r + 1, n) / product_Range(1, n - r);
  }
}

function substringCombinations(s, map) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const sub = s.slice(i, j);
      map[sub] = !map[sub] ? (map[sub] = 1) : map[sub] + 1;
    }
  }
}

sherlockAndAnagrams("cdcd");

// cdcd
// c c
// d d
// cd cd
// dc cd
