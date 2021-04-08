function stringAnagram(dictionary, query) {
  // Write your code here
  //initiate count
  let counter = 0;
  //initiate result string
  let result = [];
  // iterate through query array
  for (let i = 0; i < query.length; i++) {
    //iterate though dictionary array
    for (let j = 0; j < dictionary.length; j++) {
      //check if query index has an anagram in all of dictionary
      validAnagram(query[i], dictionary[j]);
    }
    //save number of times an anagram was found
    result.push(counter);
    //reset counter
    counter = 0;
  }

  function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
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

    return counter++;
  }
  //return the number of times there was an anagram per query index
  return console.log(result);
}

stringAnagram(
  ["heater", "cold", "clod", "reheat", "docl"],
  ["codl", "heater", "abcd"]
);
