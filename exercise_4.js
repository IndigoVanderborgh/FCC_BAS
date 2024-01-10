// Find the Longest Word in a String

// Return the length of the longest word in the provided sentence.

// Your response should be a number.



// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// function findLongestWordLength(str) {
//     return str.length;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
//Code Explanation

// Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

// Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.