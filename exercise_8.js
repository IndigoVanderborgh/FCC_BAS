// Truncate a String

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------


function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

// function truncateString(str, num) {
//     return str;
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// truncate means to shorten. Our goal here is to shorten the string (first argument) if it longer than the max allowed (second argument). And to add "..." at the end if the ocndition is met previously.

// function truncateString(str, num) { <-- function with two arguments 
//     if (str.length > num) { <-- if string length is greater than num, then proceed to line 28
//         return str.slice(0, num) + "...";  <-- return string.slice (where cut from x to y) starting index (0) to num (argument, target length), and add "..." at the end
//     } else { <-- otherwise we just return the str
//         return str; <-- 
//     }
// }
// truncateString("A-tisket a-tasket A green and yellow basket", 8);  <-- given example to test


// We start off with a simple if statement to determine one of two outcomes…
// If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
// However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.
