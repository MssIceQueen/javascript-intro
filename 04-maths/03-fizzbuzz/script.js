/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
        let  a;
        for (a = 1; a <= 100; a++) {
        if (a % 3 === 0) {
            console.log("fizz");
        }
        else if (a % 5 === 0) {
            console.log("buzz");
        }
        else if (a % 3 === 0 && a % 5 === 0) {
            console.log("fizzbuzz");
        }
        else {
            console.log(a);
        }
    }


    })();

// Declare variable
// For each number (= variable) between 1 and 100 = set requirements for variable
// if the var is a multiple of 3 = fizz (=> every number that can be devided by 3 without having a remainder(=0))
// if the var is a multiple of 5 = buzz (=> every number that can be devided by 5 without having a remainder(=0))
// if var is multiple of 3 and 5 = fizzbuzz (=> the number needs to meet both requirements = use &&)
// if none of the above (=else) show only the number
// use console.log to show in the console