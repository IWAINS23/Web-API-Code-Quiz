let currentQuestionIndex = 0;
let time = questions.length * 15;
let timeID;

let qElement = document.getElementById("questions")
let tElement = document.getElementById("time")
let choiceElement = document.getElementById("choices")
let submitButton = document.getElementById("submit")
let startButton = document.getElementById("start")
let initialElement = document.getElementById("initials")
let feedbackElement = document.getElementById("feedback")

let sfxRight = new Audio("assets/sfx/correct.wav")

function startQuiz () {
let startScreenElement = document.getElementById("start-screen");
startScreenElement.setAttribute("class", "hide");
  
qElement.removeAttribute("class");
timeID = setInterval(Timer, 1000)

tElement.textContent = time;

getQuestion ();
}

function endQuiz () {

  clearInterval(timeID);

  let endScreenElement = document.getElementById("end-screen");
  endScreenElement.removeAttribute("class");

  let finalScoreElement = document.getElementById("final-score")
  finalScoreElement.textContent = time;

  qElement.setAttribute("class", "hide");
}

function getQuestion () {
let currentQuestion = questions[currentQuestionIndex];

let titleElement = document.getElementById("question-title");

titleElement.textContent = currentQuestion.title;

choiceElement.innerHTML = "";

currentQuestion.choices.forEach(function(choice, index) {
  let choiceButton = document.createElement("button");

  choiceButton.setAttribute("class", "choice")
  choiceButton.setAttribute("value", choice)

  choiceButton.textContent = `${index + 1}. ${choice}`

  choiceButton.addEventListener("click", clickQuestion);

  choiceElement.append(choiceButton)
})

}

function clickQuestion () {

}

// timer
function Timer () {
time --;
tElement.textContent = time
  if(time <= 0){
    endQuiz();
  }
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