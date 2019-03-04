/*
 * Using a hash table.
 * Hopefully a more elegant solution.
*/

console.log('working');

const lengthOfLongestSubstring = function (str) {
    let longest, strArr, count, most;

    longest = 0;
    strArr = str.split('');
    limit = -1;

    strArr.forEach((el, i) => {
        count = 0;
        for (let j = i; j > limit && strArr[j] !== undefined; j--) {
            if (el !== strArr[j] || j === i) {
                count++;
                if (count > longest) {
                    longest = count;
                }
            } else {
                limit = j;
                break;
            }
        }
    });

    console.log(longest);
};

str = 'abcabcbb';
lengthOfLongestSubstring(str);
