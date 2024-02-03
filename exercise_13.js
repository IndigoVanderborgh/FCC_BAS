// Falsy Bouncer

// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

// function bouncer(arr) {
//     return arr;
// }

// bouncer([7, "ate", "", false, 9]);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------

// Since we didn't learn filter, check out this answer instead:

// function bouncer(arr) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i])  {
//          filteredArr.push(arr[i]);
//        }
//     }
//     return filteredArr;
//   }

// Code Explanation

//     We create a new empty array (filteredArr).
//     We use a for cycle to iterate over all elements of the provided array (arr).
//     We use the if statement to check if the current element is truthy 699 or falsy 1.7k.
//     If the element is truthy, we push it to the new array (newArray). This result in the new array (filteredArr) containing only truthy elements.
//     We return the new array (filteredArr).

// we can dissect this as:

// let truthyArr = [];
// for (let item of arr){
//    if (Boolean(item)) === true) {
//      truthyArr.push(item);
//   }
// }
// return truthyArr;

//rest x2x2 Sick!!