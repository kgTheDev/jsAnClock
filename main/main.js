/* Analog Clock
Made with HTML, CSS and JavaScript
Displays the time in digital and analog form
*/

//Makes sure the time in the digital and analog clock are in interval by the second

setInterval(function() {
  var date = new Date();
  updateTime(date);
  updateClock(date);
}, 1000);

//Creates analog clock display and rotates hands by the second

function updateClock(date) {
  var secHand = document.getElementById("secHand").style;
  var minHand = document.getElementById("minHand").style;
  var hrHand = document.getElementById("hrHand").style;

  secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hrHand.transform =
    "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}

//Adds the time on the top for users unfamiliar with analog time

function updateTime(date) {
  var timeDiv = document.getElementById("time");
  var time =
    "If you can't read analog time then here --- " +
    date.getHours() +
    " : " +
    date.getMinutes() +
    " : " +
    date.getSeconds();
  timeDiv.innerHTML = time;
}
