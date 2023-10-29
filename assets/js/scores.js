function printHighScores (){
let highscore = JSON.parse(localStorage.getItem("highscores") || [])

highscore.sort(function(a,b){
    return b.score - a.score;
})

highscore.forEach(function(score){
    let li = document.createElement("li")
    li.textContent = `${score.initals} - ${score.score}`

    let ol = document.getElementById("highscores")
    ol.appendChild(li);

})

}

function clearHighScore(){

}

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighScore);

printHighScores();