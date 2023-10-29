let currentQuestionIndex = 0;
let time = questions.length * 15;
let timeID;

let qElement = document.getElementById("questions");
let tElement = document.getElementById("time");
let choiceElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initial");
let feedbackElement = document.getElementById("feedback");

let sfxRight = new Audio("assets/sfx/correct.wav");

function startQuiz() {
  let startScreenElement = document.getElementById("start-screen");
  startScreenElement.setAttribute("class", "hide");

  qElement.removeAttribute("class");
  timeID = setInterval(Timer, 1000);

  tElement.textContent = time;

  getQuestion();
}

function endQuiz() {
  clearInterval(timeID);

  let endScreenElement = document.getElementById("end-screen");
  endScreenElement.removeAttribute("class");

  let finalScoreElement = document.getElementById("final-score");
  finalScoreElement.textContent = time;

  qElement.setAttribute("class", "hide");
}

function getQuestion() {
  let currentQuestion = questions[currentQuestionIndex];

  let titleElement = document.getElementById("question-title");

  titleElement.textContent = currentQuestion.title;

  choiceElement.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, index) {
    let choiceButton = document.createElement("button");

    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);

    choiceButton.textContent = `${index + 1}. ${choice}`;

    choiceButton.addEventListener("click", clickQuestion);

    choiceElement.append(choiceButton);
  });
}

function clickQuestion() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    tElement.textContent = time;
    feedbackElement.textContent = "Wrong";
  } else {
    sfxRight.play();
    feedbackElement.textContent = "Correct!";
  }

  feedbackElement.setAttribute("class", "feedback");

  setTimeout(function () {
    feedbackElement.setAttribute("class", "feedback hide");
  }, 1000);

  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

// timer
function Timer() {
  time--;
  tElement.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}
// highscore
function saveHighScore() {
  let initial = initialElement.value.trim();
  console.log(initial);

  if (initial !== "") {
    let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    let newScore = {
      score: time,
      initial: initial,
    };
    highScores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highScores));
    window.location.href = "highscores.html";
  }
}
// check entry
function checkEntry(event) {
  if (event.key === "Enter") {
    saveHighScore();
  }
}
//start button
startButton.addEventListener("click", startQuiz);
//submit button
submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkEntry);
