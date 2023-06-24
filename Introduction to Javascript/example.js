console.log("My console statement");

/*  syntax and declaration   

        var score = 30;
        var result = 50;
        const PI = 3.14;

        console.log(score);
        console.log(result);
        console.log(PI);
*/

/*  Datatypes
        1. Number
        2. Strings
        3. Boolean
        4. Null
        5. Undefined
        6. Objects
        7. Symbols(es6)
*/

let score = 30;                     //Number
let result = "10";                  // String

// BEDMAS 
let finalScore = score + result;    // concatenation with strings
console.log(finalScore);            // 1010

let penality = score - result;      // Mathematical
console.log(penality);              // 1010 

console.log(typeof (penality));     // Number

let totalGames = 5;
let avgScore = finalScore / totalGames;
console.log(avgScore);
console.log(typeof (avgScore));     // Number



let value = (( finalScore ** 2 )*10/ (penality + totalGames))
console.log(value);       //2040200


/* if totalGames= 'five'
console.log(value);       //NAN

*/