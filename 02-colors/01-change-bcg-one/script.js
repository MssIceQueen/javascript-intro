/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//declare function
function changeColor(color){
    document.body.style.backgroundColor = color;
}

//get dom elements
let red = document.getElementById("red")
let green = document.getElementById("green")
let yellow = document.getElementById("yellow")
let blue = document.getElementById("blue")

//Add event listener to dom element and call the change color function
red.addEventListener("click", function (){
    changeColor("red")
});

green.addEventListener("click", function (){
    changeColor("green")
});
yellow.addEventListener("click", function (){
    changeColor("yellow")
});
blue.addEventListener("click", function (){
    changeColor("blue")
});


//click button
//change background color