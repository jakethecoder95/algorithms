/* 
 * Brute force version
 * two for loops
*/

var str = 'abcdefghij';

lengthOfLongestSubstring(str);


function lengthOfLongestSubstring(str) {
    var subStrArr, subStr, test;

    subStrArr = str.split('');
    subStr = [];
    test = true;

    for (var cur = 0; test === true && subStrArr[cur] != null; cur++) {

        for (var i = 0; i < subStr.length; i++) {
            if (subStrArr[cur] === subStr[i]) {
                test = false;
                i = subStr.length
            }
        }
        subStr.push(subStrArr[cur]);

    }
    subStr = subStr.join('');

    return (subStr.length);
}