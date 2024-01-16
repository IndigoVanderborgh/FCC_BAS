
// Finders Keeper
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
// This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.



// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// function findElement(arr, func) {
//     let num = 0;
//     return num;
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0); 

// num % 2 === 0<--- This is to check if the value of n is an even number, so once the array has an even number it will stop and output that number.

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------



// Challenge asks us to look through array. This is done using a for loop.
// The num variable is being passed into the function, so we set it to each index in our array.
// The pre-defined function already checks each number for us, so if it is “true”, we return that num.
// If none of the numbers in the array pass the function’s test, we return undefined.
