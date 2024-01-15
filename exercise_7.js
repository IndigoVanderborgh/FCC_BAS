// Repeat a String

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. 

// For the purpose of this challenge, do not use the built-in .repeat() method.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
function repeatStringNumTimes(str, num) {
    let accumalatedStr = "";
    for (let i = 0; i < num; i++) {
        accumalatedStr += str;
    }
    return console.log(accumalatedStr); 
}

repeatStringNumTimes("abc", 3);

// function repeatStringNumTimes(str, num) {
//     return str;
// }

// repeatStringNumTimes("abc", 3);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// function repeatStringNumTimes(str, num) { <-- function declaration
//     let accumalatedStr = ""; <-- variable "accumalatedStr" is an empty string, which we will use to update to our new string.
//     for (let i = 0; i < num; i++) { <-- for loop, to multiple the amount of strings by num
//         accumalatedStr += str; <-- accumalatedStr = accumalatedStr + str, looped however many times stated by num.
//     }
//     return console.log(accumalatedStr);  <-- console logs once condition is complete.
// }

// repeatStringNumTimes("abc", 3);


// Create an empty string variable to store the repeated word.
// Use a for loop or for loop to repeat code as many times as needed according to num
// Then we add the string to the variable created on step one inside of the loop.
// At the end of the loop, return the variable for the repeated word.

