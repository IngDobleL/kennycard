var canvas;
var context;
const word = "Soft - TIC";

$(document).ready(function () {
    canvas = document.getElementById("logo");
    context = canvas.getContext("2d");
    setInterval(drawWord, 1000);
});


function getColor() {
    const hex = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    color = "#";
    for (i = 0; i < 6; i++) {
        var index = random(0, hex.length)
        color += hex[index]
    }
    return color;
}

function drawWord() {
    var angle;
    context.font = "10px Arial";

    for (var i = 1; i <= word.length; i++) {
        //angle = (random(1, 20) / 10);
        //context.rotate(angle);
        context.fillStyle = getColor();
        context.fillText(word[i - 1], (i * 10), (canvas.height / 2));
        //context.rotate(-angle);
    }
}

function random(lower, upper) {
    var number = upper - lower;
    var numberRandom = Math.random() * number;
    numberRandom = Math.floor(numberRandom);

    return parseInt(lower) + numberRandom;
}