function meanderingArray(unsorted) {
  // Write your code here
  // my futile attemp
  // let sorted = [];
  // let ordered = unsorted.sort((a, b) => a - b)
  // for (let i = 0; i < ordered.length; i++){
  //   if (ordered.length > 0) {
  //     sorted.push(ordered[ordered.length - 1])
  //     sorted.push(ordered[i])      
  //     ordered.pop()
  //     ordered.shift()
  //     console.log(sorted)    
  //   }
  //   }
    // console.log(sorted)
  
  // return sorted
  let n = unsorted.length;
  let arr = unsorted.sort((a, b) => a - b)
  let temp = []
  let small = 0
  let flag = true
  let large = n - 1
  for (let i = 0; i < n; i++) {
    if (flag) {
      temp[i] = arr[large--]
    }
    else {
      temp[i] = arr[small++]
    }
    flag = !flag
  }
  return temp
}
meanderingArray([7, 5, 2, 7, 15, 8, -2, 25, 25])
//-2, 2 ...... 
// function meanderingArray(unsorted) {
//   // Write your code here
//  Zac futile attemp 
//   let sorted = []
//   for (let i = 0; i < unsorted.length; i++) {
//     sorted.push(Math.max.apply(null, unsorted))
//     sorted.push(Math.min.apply(null, unsorted))
//     unsorted.splice(unsorted.indexOf(Math.max.apply(null, unsorted)), 1)
//     unsorted.splice(unsorted.indexOf(Math.min.apply(null, unsorted)), 1)
//     console.log(i)
//     console.log('inside for loop', unsorted)
//     if (unsorted.length < 2) {
//       sorted.push(unsorted)
//     }
//   }
//   console.log(sorted)
// }