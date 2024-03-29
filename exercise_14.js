// Where do I Belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b) // - is for descending from a to b
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }
    return arr.length;
}

getIndexToIns([40, 60], 50);

// function getIndexToIns(arr, num) {
//     return num;
//   }

//   getIndexToIns([40, 60], 50);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// Arrow functions summary
// let myFunction = (a, b) => a * b;

// let myFunction = (a, b)       =>             a * b;
//                   ^parameters pass through   4 * 5;

// myFunction(4, 5);
// Output: 20

// Learning arrow functions today

// let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
    return a + b;
};
*/

// alert( sum(1, 2) ); // 3
