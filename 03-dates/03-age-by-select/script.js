/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
 (function () {
        document.getElementById("run").addEventListener("click", function () {
            let dobDay = document.getElementById("dob-day").value;
            let dobMonth = document.getElementById("dob-month").value;
            let dobYear = document.getElementById("dob-year").value;

            let dateOfbirth = new Date(dobYear,dobMonth,dobDay);
            let dateToday = new Date();

            let age = dateToday.getTime() - dateOfbirth.getTime();
            age = Math.round(age/(1000*60*60*24*365));

            alert(`Congratulations, you have been on this planet for ${age} years.`);
        });
 })();




//click on the button
//declare input variables
//calculate age
//display text with age

