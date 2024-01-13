// Confirm the Ending

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.



// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "n"));

// function confirmEnding(str, target) {
//     return str;
// }

// confirmEnding("Bastian", "n");

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------


// PROCEDURAL APPROACH

// confirmEnding("He has to give me a new name", "name");


// First we use the slice method copy the string.
// In order to get the last characters in str equivalent to the target's length we use the slice method.
// The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
// For example str.slice(10, 17) would return "give me".
// In this case we only include one parameter which it will copy everything from the starting index.
// We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
// Finally we compare the return result of slice to target and check if they have the same characters.

// DECLARITIVE APPROACH

// function largestOfFour(arr) {
//     return arr.map(function(group) {
//       return group.reduce(function(prev, current) {
//         return current > prev ? current : prev;
//       });
//     });
//   }

//   Code Explanation

// we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
// within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
// the callback function passed to the reduce method takes the previous value and the current value and compares the two values
// if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it 
// to the map method callback if it’s the last item.

// Relevant Links

// Array.prototype.map()
// Array.prototype.reduce()
// Ternary Operators
