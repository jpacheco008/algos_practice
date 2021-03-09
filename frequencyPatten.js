//1.Can I restate the problem in my own words
//2.What are the inputs that go into the problem
//3.What are the outputs that should come from the solution to the problem?
//4.Can the outputs be determiner from the inputs? in other words, do I have enough information to solve the problem
//5.How should I label the important pieces of data that are a  part of the problem?

//write a function called same, which accepts two arrays.
//the function should return true if every value in the array has
// it's corresponding value squared in the second array. The 
//frequency of values must be the same.

//Naive Solution
//O(n)^2 time complexity
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  } for (let i = 0; i < arr1.length; i++) {
    let  correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true 
}
same([1, 2, 3, 2], [9, 1, 4, 4])

//Refactored
//O(n) time complexity
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}

same([1,2,3,2,5], [9,1,4,4,11])