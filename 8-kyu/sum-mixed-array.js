// Description:
// Given an array of integers as strings and numbers, return the sum of the array values as
// if all were numbers.

// Return your answer as a number.

function sumMix(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = result + Number(array[i]);
  }
  return result;
}
