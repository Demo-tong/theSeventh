function fibonacci_series(n) {
  var outArray = [0, 1];
  if (n === 1) {

    return outArray;
  }
  else {
    outArray = doFibonacciSeries(outArray, n);
  }

  return outArray;
}

function doFibonacciSeries(myArray, n) {
  for (var i = 2; i <= n; ++i) {
    myArray[i] = myArray[i - 2] + myArray[i - 1];
  }

  return myArray;
}

module.exports = fibonacci_series;
