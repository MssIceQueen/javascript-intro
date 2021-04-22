/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function info() {
    alert ("Please provide us with the requested information to proceed.")
    let getAge = prompt("Type in your current age:");
    let getGender = prompt("Type in your gender:");
    let getTown = prompt("Type in the name of your hometown:");

    let getInfo = confirm(`Your responses:
Age: ${getAge}
Gender: ${getGender}
Town: ${getTown}
Is this information correct? Please press OK to continue.`);
    if (getInfo!== true) {
        info();
    }
})();

