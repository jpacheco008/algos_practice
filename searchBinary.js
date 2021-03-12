function binarySearch(arr, val) {
  let start = 0
  let end = arr.length - 1
  let mid = Math.floor((start + end)/ 2)
  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
    mid = Math.floor((start + end)/2)
  }
  if (arr[mid] === val) {
    return mid
  }
  return - 1
}
// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}


binarySearch([1,2,3,4,5,6,7,8,9,10], 8)