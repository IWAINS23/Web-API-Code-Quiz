var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

let currentQuestionIndex = 0;
let time = questions.length * 15;
let timeID;

let qElements = document.getElementById("questions")
let tElemet = document.getElementById("time")
let choiceElement = document.getElementById("choices")
let submitButton = document.getElementById("submit")
let startButton = document.getElementById("start")
let initialElement = document.getElementById("initials")
let feedbackElement = document.getElementById("feedback")

function startQuiz () {

}

function endQuiz () {

}

function getQuestion () {

}

function clickQuestion () {

}

// timer
function Timer () {
  // timeID = setInterval(function(){
  //   secondsLeft--;
  //   timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
}
// highscore
function HighScore () {

}
// check entry
function checkEntry () {

}
//start button 
startButton.addEventListener("click", startQuiz);
//submit button
submitButton.addEventListener("click", HighScore);

initialElement.addEventListener("keyup", checkEntry);