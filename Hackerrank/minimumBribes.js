/** 
** Any person in the queue can bribe the person directly in front of 
** them to swap positions. If two people swap positions, they still wear
** the same sticker denoting their original places in line. One person
** can bribe at most two others. For example, if and  bribes , the queue
** will look like this: .

** Fascinated by this chaotic queue, you decide you must know the minimum
** number of bribes that took place to get the queue into its current state!
**/

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let length = q.length - 1,
    result = 0;

  for (let i = length; i > 0; ) {
    if (q[i] < q[i - 1]) {
      swap(i, i - 1, q);
      result++;
      if (q[i] > q[i + 1]) {
        swap(i, i + 1, q);
        result++;
        if (q[i + 1] > q[i + 2]) {
          result = "Too chaotic";
          break;
        }
      }
    } else {
      i--;
    }
  }

  console.log(result);
}

function swap(i1, i2, q) {
  const hold = q[i1];
  q[i1] = q[i2];
  q[i2] = hold;
}

minimumBribes([2, 5, 1, 3, 4]);

// swaps: 4
// 1 2 5 3 4 7 6 8

// 1 2 5 3 4 6 7 8

// 1 2 3 5 4 6 7 8

// 1 2 3 4 5 6 7 8
