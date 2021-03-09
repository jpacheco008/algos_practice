//1.Can I restate the problem in my own words
//2.What are the inputs that go into the problem
//3.What are the outputs that should come from the solution to the problem?
//4.Can the outputs be determiner from the inputs? in other words, do I have enough information to solve the problem
//5.How should I label the important pieces of data that are a  part of the problem?

//write a function which takes in a string and returns counts of each character in a string.
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
function charCount(str) {
  //do something
  //return an object with keys that are lowercase alphanumeric characters in the string; values should be in an object
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

charCount("aaaa"); //{a:4}
charCount("hello"); //{h:1, e:1, l:2, o:1}
charCount("Your PIN number is 1234!"); //{1:1, 2:1, 3:1, 4:1, b:1, e:1, i:2, m:1, n:2, o:1, p:1, r:2, s:1, u:2, y:1}
