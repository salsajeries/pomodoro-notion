/* GLOBAL VARIABLES */
var time;               // Time in seconds
var myInterval;         // setInterval variable
var elemID;             // ID of timer element


/* ACTIVATE TIMER WITH SPECIFIED TIME */
function activate_timer(numSec) {
  reset_timer(elemID);    // Reset previous timer
  
  time = numSec;                // Set new time
  elemID = numSec.toString();   // Set new element ID

  myInterval = setInterval(update_timer, 1000);     // Countdown timer every second
}


/* UPDATE TIMER EVERY SECOND */
function update_timer() {
  const timerElement = document.getElementById(elemID);   // HTML timer element
  
  if (time >= 0) {
    var min = Math.floor( (time / 60) % 60 );   // Calculate min
    var sec = Math.floor( time % 60 );          // Calculate sec

    // String time formatting
    if (min < 10)
        min = '0' + min.toString();
    if (sec < 10)
        sec = '0' + sec.toString();

    // Display updated time
    timerElement.innerHTML = min + ":" + sec;

    time -= 1;  // Decrement seconds
  }
  else {
    stop_timer();
  }
}


/* STOP TIMER COUNTDOWN */
function stop_timer() {
  clearInterval(myInterval);  // Stop setInterval function
}


/* RESET TIMER TO DEFAULT VALUE */
function reset_timer(elemID) {
  stop_timer();  // Stop previous timer

  // Reset to default value
  if (elemID == "1500")
    document.getElementById(elemID).innerHTML = "25:00";
  else if (elemID == "300")
    document.getElementById(elemID).innerHTML = "05:00";
}