// primary variable declarations
const username = document.getElementById("username");
const saveFinalPoints = document.getElementById("savePointsBtn");
const finalPoints = document.getElementById("finalPoints");
const mostRecentPoints = localStorage.getItem("mostRecentPoints");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const maximumHighScores = 5;

finalPoints.innerText = mostRecentPoints;

// prohibts entry of invalid initials entry
username.addEventListener("keyup", () => {
    savePointsBtn.disabled = !username.value;
});

// allows score to be entered into local storage
// top 5 scores are saved for viewing on high scores page
saveHighScore = e => {
    e.preventDefault();
    const points = {
        points: mostRecentPoints,
        name: username.value
    };
    highScores.push(points);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./index.html");
};