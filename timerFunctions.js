var time;
var myInterval;
var elemID;

function activate_timer(numSec) {
  reset_timer(elemID);
  
  time = numSec;
  elemID = numSec.toString();

  myInterval = setInterval(update_timer, 1000);
}

function update_timer() {

  const timerElement = document.getElementById(elemID);
  
  if (time >= 0) {
    var min = Math.floor( (time / 60) % 60 );
    var sec = Math.floor( time % 60 );

    if (min < 10)
        min = '0' + min.toString();

    if (sec < 10)
        sec = '0' + sec.toString();

    timerElement.innerHTML = min + ":" + sec;

    time -= 1;
  }
  else {
    stop_timer();
  }
}

function stop_timer() {
  clearInterval(myInterval);
}

function reset_timer(elemID) {
  stop_timer();

  if (elemID == "1500")
    document.getElementById(elemID).innerHTML = "25:00";
  else if (elemID == "300")
    document.getElementById(elemID).innerHTML = "05:00";
}