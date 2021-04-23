/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();

  if(hours > 17 ) {
      document.getElementById('target').innerHTML = "good evening";
  }
  else if(hours === 17 && minutes >= 30){
      document.getElementById('target').innerHTML = "good evening";
  }
   else{
      document.getElementById('target').innerHTML = "hello";
  }

})();
//
//get value of the tag
//declare the time
//change content of the tag



