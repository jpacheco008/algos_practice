function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  // console.log(res)
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
  // console.log(string)
  res.push(string);
  // console.log(res)1
  return res;
}
capitalizeFirst(['car','taco','banana'])