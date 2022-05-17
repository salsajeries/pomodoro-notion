/* GLOBAL VARIABLES */
var time;              // Time in seconds
var myInterval;        // setInterval variable
var elemID;            // ID of timer element

var timerExists = false;  // Flag existing timer
var isOn = false;         // Flag timer status


/* TOGGLE TIMER ACTION */
function toggle_timer(numSec) {
  if (!timerExists)   // New timer
    new_timer(numSec);
  else if (!isOn)     // Start timer
    start_timer();
  else                // Pause timer
    pause_timer();
}


/* ACTIVATE NEW TIMER */
function new_timer(numSec) {
  time = numSec;
  elemID = numSec.toString();

  document.getElementById(elemID + "stop").style.display = "block";
  document.getElementById("tc" + elemID).checked = true;

  start_timer();
}


/* START TIMER AT CURRENT TIME */
function start_timer() {
  // "time" is at current pause time
  myInterval = setInterval(update_timer, 1000);

  document.getElementById(elemID + "pp").innerHTML = "pause";

  timerExists = true;
  isOn = true;
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
  else
    end_timer();
}


/* PAUSE COUNTDOWN */
function pause_timer() {
  clearInterval(myInterval);
  isOn = false;

  document.getElementById(elemID + "pp").innerHTML = "play_arrow";
}


/* STOP AND RESET TIMER */
function reset_timer() {
  pause_timer();
  timerExists = false;

  // Hide "stop", switch to "play" arrow
  document.getElementById(elemID + "stop").style.display = "none";
  document.getElementById(elemID + "ppB").style.display = "block";
  document.getElementById(elemID + "pp").innerHTML = "play_arrow";
  document.getElementById("tc" + elemID).checked = false;

  // Change inner HTML for timers
  if (elemID == "1500")
    document.getElementById(elemID).innerHTML = "25:00";
  else if (elemID == "300")
    document.getElementById(elemID).innerHTML = "05:00";
  else if (elemID == "900")
    document.getElementById(elemID).innerHTML = "15:00";
}


<<<<<<< HEAD
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
      this.sound.pause();
  }    
=======
/* END TIMER */
function end_timer() {
  pause_timer();
  document.getElementById(elemID + "ppB").style.display = "none";
>>>>>>> 811dba2d82449479b827dad1c2f48f7c33220807
}