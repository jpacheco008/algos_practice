// function addUpTo(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total
// }
// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now()
// console.log(`Time elapsed: ${(t2 - t1)/1000} seconds.`)


function addUp2(n) {
  return n * (n + 1) / 2;
}

let time3 = Date.now();
addUp2(1000000000);
let time4 = Date.now();
console.log(`Time Elapsed: ${(time4 - time3) } seconds.`)