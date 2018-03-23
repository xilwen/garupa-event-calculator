var personalScore = 0;
var teammateAverage = 0;
var scoreRatio = 0;
var boostRatio = 0;
var totalScore = 0;

function getScoreFromInput(){
    personalScore = parseInt(document.getElementById("personalScore").value);
    teammateAverage = parseInt(document.getElementById('teammateAverage').value);
    scoreRatio = parseInt(document.getElementById('scoreRatio').value);
    boostRatio = parseInt(document.getElementById('boostRatio').value);
}

function updateScore() {
    getScoreFromInput();
    totalScore = Math.floor(
        ((50.0 + Math.floor(personalScore / 10000.0) + Math.floor(teammateAverage * 4.0 / 100000.0)) *
            ((scoreRatio + 100.0) / 100.0))) *
        boostRatio * 5;
    document.getElementById("totalPt").innerHTML = totalScore;
}

function addToMemoryList() {
    updateScore();
    document.getElementById("memoryBoxTbody").innerHTML += "<tr>" +
        "<td>" + personalScore + "</td>" +
        "<td>" + teammateAverage + "</td>" +
        "<td>" + scoreRatio + "</td>" +
        "<td>" + boostRatio + "</td>" +
        "<td>" + totalScore + "</td>" +
        "</tr>";
    var newMemoryBoxSize = parseInt(window.getComputedStyle(document.getElementById("memoryBox")).getPropertyValue('height')) + 41;
    document.getElementById("memoryBox").setAttribute("style", "height:" + newMemoryBoxSize + "px");
}