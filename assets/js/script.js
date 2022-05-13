var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var message =
  'Congratulations! Now you are ready to build your own timer! Good luck!';
var words = message.split(' '); // --> inside in split parentheses are( space (or what ever you want .!*_-)) , so its split the words  [Congratulations!, Now, you, ... ]

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds left'
      timeLeft --;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second left'
      timeLeft --;
    } else {
      timerEl.textContent = "";
      clearInterval (timeInterval);
      displayMessage();
    }
  },1000);
}

// Displays the message by one word at a time.
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds or what ever you want 
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      //words mean that is array.   wordCount = 0index= Congratulations!  increment words by one 300mlsec,
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}
// start countdown only when you click on the button
startBtn.onclick = countdown;

