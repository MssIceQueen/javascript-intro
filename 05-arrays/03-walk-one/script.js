/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", function () {
        for (i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }
    });

})();

// click the button
// show value one after the other (loop)
// First we set a variable before the loop start : i=0
// Second we set a condition for the loop to run: as long as the value is lower than the length, it wil run
// Third we add value to the initial value: to display the next element in the loop