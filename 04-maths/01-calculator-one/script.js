/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById("addition").addEventListener("click", function () {
        let valueOne_add = document.getElementById("op-one").value;
        let valueTwo_add = document.getElementById("op-two").value;
        let result_add = Number(valueOne_add) + Number(valueTwo_add);
        alert(result_add);
    });

    document.getElementById("substraction").addEventListener("click", function () {
            let valueOne_sub = document.getElementById("op-one").value;
            let valueTwo_sub = document.getElementById("op-two").value;
            let result_sub = Number(valueOne_sub) - Number(valueTwo_sub);
            alert(result_sub);
        });

    document.getElementById("multiplication").addEventListener("click", function () {
            let valueOne_multi = document.getElementById("op-one").value;
            let valueTwo_multi = document.getElementById("op-two").value;
            let result_multi = Number(valueOne_multi) * Number(valueTwo_multi);
            alert(result_multi);
        });

    document.getElementById("division").addEventListener("click", function () {
        let valueOne_div = document.getElementById("op-one").value;
        let valueTwo_div = document.getElementById("op-two").value;
        let result_div = Number(valueOne_div) / Number(valueTwo_div);
        alert(result_div);
    });
})();

// input a number (=value)
// when you click the button ( addEventListener("click", function () {what needs to be calculated} )
// get the value of the input ( declare a variable = document.getElementById("element-id").value)
// get the calculation to work (let result_elementid = Number (value1) (mathsign) (value2);
// and show the result (alert(result_elementid);)
