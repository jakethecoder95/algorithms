/*
 ** sherlockAndAnagrams:
 **
 ** Two strings are anagrams of each other if the letters
 ** of one string can be rearranged to form the other string.
 ** Given a string, find the number of pairs of substrings
 ** of the string that are anagrams of each other.
 */

function sherlockAndAnagrams(s) {
  map = {};
  for (let i = 0; i < s.length; i++) {
    console.log(i);
    end = (s.length - 1) / 2;
    for (let j = i; j - i <= end; j++) {
      sub = s.substring(i, j + 1);
      if (!map[sub]) {
        i !== j ? (map[sub] = [[i, j]]) : (map[sub] = [[i]]);
      } else {
        i !== j ? map[sub].push([i, j]) : map[sub].push([i]);
      }
    }
  }
  console.log(map);
}

sherlockAndAnagrams("cdcd");

// testing: cdcd;
// matches = 0
// for (i=0; i < arr.legnth; i++)
//   end = ((arr.length-1) / 2) - i
//   for (j=0; j < end; j++)
//     sub = s.substring(i, j);
//
