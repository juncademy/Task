function analyzeElements(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push({
      value: arr[i],
      index: i,
      type: typeof arr[i]
    });
  }

  return result;
}
console.log(analyzeElements([10, "hello", true]));
console.log(analyzeElements([1, 2, 3]));
