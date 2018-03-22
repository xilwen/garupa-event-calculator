function updateScore() {
    var personalScore = parseFloat(document.getElementById("personalScore").value);
    var teammateAverage = parseFloat(document.getElementById('teammateAverage').value);
    var scoreRatio = parseFloat(document.getElementById('scoreRatio').value);
    var boostRatio = parseFloat(document.getElementById('boostRatio').value);
    var totalScore = ((50 + (personalScore * 0.0001) + (teammateAverage * 4 * 0.00001)) * ((scoreRatio + 100) / 100)) * boostRatio * 5;
    document.getElementById("totalPt").innerHTML = parseInt(totalScore);
}

function addToMemoryList() {
    var personalScore = parseFloat(document.getElementById("personalScore").value);
    var teammateAverage = parseFloat(document.getElementById('teammateAverage').value);
    var scoreRatio = parseFloat(document.getElementById('scoreRatio').value);
    var boostRatio = parseFloat(document.getElementById('boostRatio').value);
    var totalScore = parseInt(((50 + (personalScore * 0.0001) + (teammateAverage * 4 * 0.00001)) * ((scoreRatio + 100) / 100)) * boostRatio * 5);
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