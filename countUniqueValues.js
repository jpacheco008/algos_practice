//Implement a function called countUniqueValues, which accepts 
//a sort array, and counts the unique values in the array. There 
//can be nagative numbers in the array, but it will always 
//be sorted.

//my falied attemp
// function countUniqueValues(arr) {
//   let i = 0
//   let j = 1
  
//   while (j < arr.length) {
//     if (arr[i] === arr[j]) {
//       j++
//     } else {
//        i++
//        arr[i] = arr[j]      
//     }
//   }
//   console.log(indexOf(i))
//   return indexOf(i)
// }
function countUniqueValues(arr){
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j]
      }
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99])
