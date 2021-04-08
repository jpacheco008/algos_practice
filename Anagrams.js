//Given two strings, qrite a function to determine if the second
//string is a anagram of the first. An anagram is a word, phrase, 
//or name formed by rearranging the letters of another, such as 
//cinema, formed from iceman.

//My try
// function validAnagram(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   let firstWord = {}
//   let secondWord = {}
//   for (let val of arr1) {
//     firstWord[val] = (firstWord[val] || 0) + 1
//   }
//   for (let val of arr2) {
//     secondWord[val] = (secondWord[val] || 0) + 1
//   }
//   for (let key in firstWord) {
//     if (!(key in secondWord)) {
//       return false
//     }
//     if (secondWord[key] !== firstWord[key]) {
//       return false
//     }
//   }
//   return true
// }
validAnagram('qwerty', 'qeywrt')

//Solution
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  // console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return console.log('true');
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm')