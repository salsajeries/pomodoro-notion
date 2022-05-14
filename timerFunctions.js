var time = 60;

function activate_timer() {
  const myInterval = setInterval(update_timer, 1000);
}

function update_timer() {
  
  const timerElement = document.getElementById("timer");
  
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