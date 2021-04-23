/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//declare function
function changeColor(col) {
    document.body.style.backgroundColor = col;
}

//Add event listener to dom element and call the change color function
run.addEventListener("click", function () {
    let input = document.getElementById("color").value;
    changeColor(input);
});


// click a button
// value input
// change background color