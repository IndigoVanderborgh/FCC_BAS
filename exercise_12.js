// Slice and Splice

// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//     return arr2;
//   }
  
//   frankenSplice([1, 2, 3], [4, 5, 6], 1);
// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// function frankenSplice(arr1, arr2, n) {
//     return arr2;
//   }

//   frankenSplice([1, 2, 3], [4, 5, 6], 1);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// So we need to put arr1 in arr2, in order ie 1, 2, 3. n is the index where we start, so in this case, 1. We also cannot mutate the arrays, so no changing them, thus we must create a new array to house them in
// Topics to use: 
// slice(start, end)
//
// splice(start, deletecount, item1 to add, item2...)

// 1st step, we create a variable localArray to house the eventual finished product, and set it equal to arr2.slice(), therefor copying arr2 contents in localArray.
// 2nd step, create a for loop, with arr1.length the conditional statement. We will be splicing arr1 into localArray in this for loop.
// 3rd step, populate localArray with arr1. See below of line 20 of the first iteration.
// localArray.                  splice          (n,                                 0,                      arr1[i]);
// ^ name of target for splice  ^splice method   ^start index set to n, which is 0  ^delete count set to 0  ^add arr1 at position i, which is 0 at first

//n++;
// adding n++ at the end of the for loop ensures that every item from arr1 is inserted at the proper index as it increments index with each loop, thus giving it the order
// Finally, return localArray.