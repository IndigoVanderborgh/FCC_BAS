// Repeat a String Repeat a String

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
