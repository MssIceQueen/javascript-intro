/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function () {
        fruits.shift();
        fruits.pop();
        fruits.unshift("banana");
        fruits.push("kiwi");
        console.log(fruits);
    });

    /*fruits [0] = "banana";
    fruits [9] = "kiwi";

    document.getElementById("run").addEventListener("click", function () {
        console.log(fruits); */


})();

// click the button = addeventlistener click

// removes first element: .shift()
// removes last element: .pop()
// add new element at the beginning: .unshift()
// add new element at the end: .push()

// or

// substitute the first element [0] with element banana
// substitute the last element with kiwi