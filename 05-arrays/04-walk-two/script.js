/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function () {
        fruits.forEach(function (fruits) {
            console.log(fruits);
        });
    });
})();



// click on the button
// it executes a function
// the function makes sure that each value of the array is displayed
// => foreach element of fruits, we execute the function with the parameter the string fruits, so every element of fruits will be displayed (=console.log)