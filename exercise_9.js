
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
// review day:

// We are trying to look through the array for an even number. Once the even number is present we stop and state that even number. If the even number is not apparent, return undefined.

// function findElement(arr, func) { <-- function stated with two arguments (arr, func)
// let num = 0; <-- variable "num" = 0 as a placeholder/starter/initiator
// for (let i = 0; i < arr.length; i++) { <-- set to array length, as we're parsing through the entire index.
//     num = arr[i]; <-- num is equal to array index 0, which in the example would be 1
//     if (func(num)) { <-- if function, which is the check condition for even using num which is one is true then return num. If not, return line 44
//         return num; <--
//     } 
// }
// return undefined; <-- false output for the conditional 
// }
// findElement([1, 2, 3, 4], num => num % 2 === 0); <-- if num = num/2 = 0


// Challenge asks us to look through array. This is done using a for loop.
// The num variable is being passed into the function, so we set it to each index in our array.
// The pre-defined function already checks each number for us, so if it is “true”, we return that num.
// If none of the numbers in the array pass the function’s test, we return undefined.
