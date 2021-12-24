function random_figure(){
    var one = getRandomInt(13, 255);
    var two = getRandomInt(22, 255);
    var three = getRandomInt(45, 255);
    var four = getRandomInt(65, 100);
    var five = getRandomInt(12, 12);
    var six = getRandomInt(200, 500);
    var eight  = getRandomInt(150, 400);

    console.log("#clickFigure", one, two, three, four, five, six, eight);

    var stringBoxShadow = "rgb(" + one + "," + two + " ," + three + ")";

    document.getElementById("krug").style.boxShadow = stringBoxShadow;
    document.getElementById("krug").style.borderRadius = four + "px";
    document.getElementById("krug").style.width = six + "px";
    document.getElementById("krug").style.height = eight + "px";
    document.getElementById("krug").style.border = five + "px solid";
    document.getElementById("krug").style.backgroundColor = "rgb(" + one + "," + two + " ," + three + ")";
}

function getRandomInt(min, max) {
    return Math.floor (Math.random() * (min - max) + max);
  }