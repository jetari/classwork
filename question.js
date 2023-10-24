// Create a function that multiplies every element in an array by 2 and returns the first element of and the transformed array in another array without mutating the original array

function returnMainArray(arr) {
  let newArray = [arr[0] * 2];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }

  return newArray;
}
console.log(returnMainArray([2, 5, 3]));