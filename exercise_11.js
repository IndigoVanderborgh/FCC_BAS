// Title Case a Sentence

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}
titleCase("I'm a little tea pot");


function titleCase(str) {
    // Step 1. Lowercase the string
    str = str.toLowerCase();
    // str = "I'm a little tea pot".toLowerCase();
    // str = "i'm a little tea pot";
    
    // Step 2. Split the string into an array of strings
    str = str.split(' ');
    // str = "i'm a little tea pot".split(' ');
    // str = ["i'm", "a", "little", "tea", "pot"];
    
    // Step 3. Create the FOR loop
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    /* Here str.length = 5
    1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                    str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                    str[0] = "I"                            + "'m";
                    str[0] = "I'm";
    2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                    str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                    str[1] = "A"                            + "";
                    str[1] = "A";
    3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
                    str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                    str[2] = "L"                              + "ittle";
                    str[2] = "Little";
    4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                    str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                    str[3] = "T"                            + "ea";
                    str[3] = "Tea";
    5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                    str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                    str[4] = "P"                           + "ot";
                    str[4] = "Pot";                                                         
    End of the FOR Loop, still an array*/
    }
    
    // Step 4. Return the output
    return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

titleCase("I'm a little tea pot");


function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let i in newTitle) {
        updatedTitle[i] = newTitle[i][0].toUpperCase() + newTitle[i].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}


// GIVEN:
// function titleCase(str) {
//     return str;
// }

// titleCase("I'm a little tea pot");


// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------

// I am omitting the FCC answer as it glosses over core concepts and is a poorly written explanation.


// https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
// https://forum.freecodecamp.org/t/let-in-javascript/498672