const username = document.getElementById("username");
const saveFinalPoints = document.getElementById("savePointsBtn");
const finalPoints = document.getElementById("finalPoints");
const mostRecentPoints = localStorage.getItem("mostRecentPoints");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

finalPoints.innerText = mostRecentPoints;

username.addEventListener("keyup", () => {
    savePointsBtn.disabled = !username.value;
})

saveHighScore = e => {
    console.log("clicked save");
    e.preventDefault();
    const points = {
        points: mostRecentPoints,
        name: username.value
    };
    highScores.push(points);
    console.log(highScores);
}