const setBits = (num) => {
  const binaryNum = num.toString(2)
  const split = binaryNum.split('')
  console.log(split)
  return split.reduce((a, c) => {
    return a = Number(c) + a
  }, 0)
}


num = 45;
console.log(setBits(num)) 