/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click",  () => {
        let condition = fruits.includes("apple");
        if (condition === true){
            console.log ("yes");
        }
        else{
            console.log("no");
        }
    });
})();

// click button
// declare which condition the function needs to look for = let condition = fruits.includes("apple")
// if the condition is met log yes in the console =
//          if (condition === true){console.log ("yes");}
// if the condition is not met log no =
//         else{ console.log("no");}