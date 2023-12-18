const username = document.getElementById("username");
const saveFinalPoints = document.getElementById("savePointsBtn");
const finalPoints = document.getElementById("finalPoints");
const mostRecentPoints = localStorage.getItem("mostRecentPoints");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const maximumHighScores = 3;

finalPoints.innerText = mostRecentPoints;

username.addEventListener("keyup", () => {
    savePointsBtn.disabled = !username.value;
});

saveHighScore = e => {
    e.preventDefault();
    const points = {
        points: mostRecentPoints,
        name: username.value
    };
    highScores.push(points);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(3);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./index.html");
};