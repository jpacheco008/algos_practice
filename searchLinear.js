//this function accepts an array and a value
//loop through the array and check if the current element is equal to the value
//if it is, return the index at which the element is found 
//if the value  is never found, return -1

function linearSearch(arr, val) {
  return  arr.indexOf(val)
}

linearSearch([1, 2, 36, 7, 5, 8, 33], 8)

//what indexOf is doing
// function linearSearch(arr, val){
//   for(var i = 0; i < arr.length; i++){
//       if(arr[i] === val) return i;
//   }
//   return -1;
// }

// linearSearch([34,51,1,2,3,45,56,687], 100)