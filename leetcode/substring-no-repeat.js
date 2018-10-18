/* 
 * Brute force version
 * two for loops
*/

var str = "pwwkew";

lengthOfLongestSubstring(str);


function lengthOfLongestSubstring(str) {
    var subStrArr, subStr, test;

    subStrArr = str.split('');
    subStr = [];
    test = true;

    for (var cur = 0; test === true && subStrArr[cur] != null; cur++) {

        for (var i = 0; i < subStr.length && test !== false; i++) {
            if (subStrArr[cur] === subStr[i]) {
                test = false;
            }
        }

        if (test) {
            subStr.push(subStrArr[cur]);
        }

    }
    subStr = subStr.join('');

    console.log(subStr.length);
    return subStr.length;
}