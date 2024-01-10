// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Factorialize a Number

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return num;

}

factorialize(5);

// function factorialize(num) {
//     return num;
// }

// factorialize(5);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// Lets break this down. Since we have on line 15 product = 1, we cannot start on one, as we want to include it into the factorial itself, because if we multiple by 0, it will return .
// And since factorials start with 1, we actually let i = 2 and the rest is easy.