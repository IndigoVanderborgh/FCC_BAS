// Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
    results[i] = largestNumber;
    }
    return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// function largestOfFour(arr) {
//     return arr;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------

// Let's lok at this answer. 

// function largestOfFour(arr) { // name of the function
//     const results = []; // empty array results
//     for (let i = 0; i < arr.length; i++) { // simple for loop using the array length, so if the condition is true then move on to line 37
//         let largestNumber = arr[i][0]; // we make the largestNumber become the first value in the i sub array, so it will update as we go.
//         for (let j = 0; j < arr[i].length; j++) { // simple loop now for the sub array, we use [i] because its the first sub array still
//             if (arr[i][j] > largestNumber) { //  Now if the value in the subarray is more than the one previous, it will replace largestNumber. 
//                 largestNumber = arr[i][j]; // 
//             } // 
//         } // 
//     results[i] = largestNumber;  // 
//     } // 
//     return results; // 
// } // 
// 
// 