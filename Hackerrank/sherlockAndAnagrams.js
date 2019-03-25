function getAllSubstrings(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      arr.push(s.slice(i, j));
    }
  }
  console.log(arr);
  return arr;
}

function checkAllSubstrings(ss) {
  const dict = {};
  let count = 0;
  for (let str of ss) {
    const sortedStr = str
      .split("")
      .sort((a, b) => a.toLowerCase().localeCompare(b))
      .join("");
    if (dict[sortedStr]) {
      count += dict[sortedStr];
      dict[sortedStr] += 1;
    } else {
      dict[sortedStr] = 1;
    }
  }
  return count;
}

function sherlockAndAnagrams(s) {
  // Traverse all substrings within string
  const ss = getAllSubstrings(s);

  // Check if any two substrings of equal length are anagrams
  const count = checkAllSubstrings(ss);

  return count;
}

sherlockAndAnagrams("abba");
