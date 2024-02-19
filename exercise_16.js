// Chunky Monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Original  
// function chunkArrayInGroups(arr, size) {
//     return arr;
//   }

//   chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Solution 1
function chunkArrayInGroups(arr, size) {
  let temp = []; // empty array which we will fill our chunk in
  const result = []; // empty array with all array chunks in as sub arrays yielding a 2d array

  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) // if i/size remainder is not equal to size - 1
      temp.push(arr[i]); // push to temp

    else {
      temp.push(arr[i]); // push to temp
      result.push(temp); // push temp to result
      temp = []; // reset temp to empty array. 
    }

  }

  if (temp.length !== 0) result.push(temp); // if temp is not an empty array, push to result.
  return result; // return result
}

// Another way to solve this:

// function chunkArrayInGroups(arr, size) { 
//   const newArr = []; // empty array which will be filled with our chunky chunks.
//   for (let i = 0; i < arr.length; i += size) { // loop starts at zero, increments by size, and ends at the array length
//     newArr.push(arr.slice(i, i + size)); // inside the loop, each chunk is created via (arr.slice(i, i + size)), where slice accepts two arguments (start, end), and is pushed to newArr.
//   }
//   return newArr; // once complete, we return newArr once complete.
// }


// function chunkArrayInGroups(arr, size) {
//     return arr;
//   }

//   chunkArrayInGroups(["a", "b", "c", "d"], 2);
