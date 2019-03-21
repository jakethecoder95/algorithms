/*
 ** Check out the resources on the page's right side to learn more
 ** about hashing. The video tutorial is by Gayle Laakmann McDowell,
 ** author of the best-selling interview book Cracking the Coding
 ** Interview.
 **
 ** Harold is a kidnapper who wrote a ransom note, but now he is
 ** worried it will be traced back to him through his handwriting.
 ** He found a magazine and wants to know if he can cut out
 ** whole words from it and use them to create an untraceable
 ** replica of his ransom note. The words in his note are
 ** case-sensitive and he must use only whole words available in
 ** the magazine. He cannot use substrings or concatenation to create
 ** the words he needs.
 **
 ** Given the words in the magazine and the words in the ransom
 ** note, print Yes if he can replicate his ransom note exactly
 ** using whole words from the magazine; otherwise, print No.
 **
 ** For example, the note is "Attack at dawn". The magazine
 ** contains only "attack at dawn". The magazine has all the
 ** right words, but there's a case mismatch. The answer is No.
 */

function checkMagazine(magazine, note) {
  for (let word of note) {
    const wordFound = magazine.indexOf(word);
    if (wordFound === -1) {
      console.log("No");
      return;
    }
    magazine[wordFound] = null;
  }
  console.log("Yes");
}

checkMagazine(
  ["two", "times", "three", "is", "not", "four"],
  ["two", "times", "two", "is", "four"]
);
