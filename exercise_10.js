// Boo who

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
function booWho(bool) {
    return typeof bool === "boolean";
}

  // test here
booWho(null);

// function booWho(bool) {
//     return bool;
// }

// booWho(null);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// Code Explanation

//     Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.
