/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    let performOperation = function(operation) {
        // perform the operation
        let valueOne = Number(document.getElementById("op-one").value);
        let valueTwo = Number(document.getElementById("op-two").value);

        switch (operation) {
            case "addition": {
                alert(valueOne + valueTwo);
                break;
            }
            case "substraction": {
                alert(valueOne - valueTwo);
                break;
            }
            case "division": {
                alert(valueOne / valueTwo);
                break;
            }
            default: {
                alert(valueOne * valueTwo);
            }
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();


//input a number (=value)
//when you click the button ( addEventListener("click", function () {what needs to happen});)
//get the value of the input ( declare a variable = Number(document.getElementById("element-id").value);)
//get the calculation to work ((value1) (mathsign) (value2));
// use switch! (Switch statement uses the (operation) parameter from function to switch the performed operation between the two values)
//and show the result (alert();)

