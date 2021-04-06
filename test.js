const tests = [
  'thequickbrownfoxjumpsoveralazydog', // 14
  'zabzcd', // 5
  'zabzcdthequickbrownfox', // 15
];

// console.log( tests.map( get_max_unique_substring_length ) );

// function get_max_unique_substring_length ( str ) {
//   let unique_str = '';
//   let max_length = 0;

//   for ( let i = 0; i < str.length; i++ ) {
//     const char = str[i];
//     const char_pos = unique_str.indexOf( char );
//     if ( char_pos >= 0 )
//       unique_str = unique_str.substr( char_pos + 1 );

//     unique_str += char;
//     max_length = Math.max( unique_str.length, max_length );
//   }

//   return max_length;
// }

function SearchingChallenge(str) {

  // code goes here
  // get k
  let k = str[0]
  let arr = str.substring(1)
  let temp = []
  let unique_str = '';
  let max_length = 0;

  for ( let i = 0; i < arr.length; i++ ) {
        const char = arr[i];
        const char_pos = unique_str.indexOf( char );
        if ( char_pos >= 0 )
          unique_str = unique_str.substr( char_pos + 1 );

    unique_str += char;
    max_length = Math.max(unique_str.length, max_length);
    console.log(max_length)
    if (max_length < k) {
      temp.push(char)
      console.log(temp)
    }
  }
  return temp
  // run through array
  // for(let i = 0; i < arr.length; i++){
  // //push to temp array
  //   temp.push(str[i])
  //   while(temp.length > k){
  //     for(let j = 0; j < temp.length; j++){

  //     }
  //   }
  // }
  //check for unique characters depending on k
  //stop if it goes over limit of k
  //save array
  //repeat and replace if new temp is longer

  return str;

}

console.log(SearchingChallenge('2aabbacbaa'))

// function ArrayChallenge(arr) {
//   // code goes here
//   //order largest to smallest
//   let sorted = arr.sort((a, b) => b - a);
//   // console.log(sorted)
//   //separate largest and rest of array
//   let largest = sorted[0];
//   let addingArr = sorted.slice(1);
//   let combunations = [];
//   let temp = [];
//   // console.log(largest)
//   // console.log(addingArr);
//   //add rest of array
//   // let sum = addingArr.reduce(function(a,c){return a + c}, 0)
//   // console.log(sum)
//   //compare to largest number
//   // if(sum !== largest){
//   //   return 'false'
//   // } else { return 'true'}
//   // return arr;
//   let combine = function (a) {
//     let fn = function (n, src, got, all) {
//       if (n == 0) {
//         if (got.length > 0) {
//           all[all.length] = got;
//         }
//         return;
//       }

//       for (let j = 0; j < src.length; j++) {
//         fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
//       }

//       return;
//     };

//     let all = [];

//     for (let i = 0; i < a.length; i++) {
//       fn(i, a, [], all);
//     }

//     all.push(a);
//     // let sum = all.reduce(function (a, c) { return a + c })
//     // console.log(sum)
//     return all;
//   };
//   console.log(combine('aabacbebebe',addingArr));
//   let sum = combine(addingArr).reduce(function (a, c) { return a + c })
//   console.log(sum)
// }

// keep this function call here
// console.log(ArrayChallenge([3, 5, -1, 8, 12]));
