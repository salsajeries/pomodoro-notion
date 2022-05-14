// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



function activate_timer() {

  var time = 1500000;
  while (time != 0)
  {
    setInterval(update_timer, 1000, time);
  }
}


function update_timer(time) {

  if (time >= 0)
  {
    var minutes = Math.floor(time / 1000 / 60);
    var seconds = Math.floor((time / 1000) % 60);

    document.getElementById("timertest").innerHTML = minutes + "m " + seconds + "s ";
    time -= 1000;
  }  

  return time;
}


function get_end_time() {

  var now = new Date();
  var hrs = 

}


