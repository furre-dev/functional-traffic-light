var redBox = document.getElementById("red");
var yellowBox = document.getElementById("yellow");
var greenBox = document.getElementById("green");


redBox.style.visibility = "visible";
yellowBox.style.visibility = "hidden";
greenBox.style.visibility = "hidden";



function redLightBox() {

    if (redBox.style.visibility == "hidden") {
        redBox.style.visibility = "visible";
        yellowBox.style.visibility = "hidden";
        greenBox.style.visibility = "hidden";
    } else {
        alert("It's already red! Click the green button!");
    }
}

function yellowLightBox() {

    redBox.style.visibility = "hidden";
    yellowBox.style.visibility = "hidden";
    greenBox.style.visibility = "visible";
}

function greenLightBox() {

    if (greenBox.style.visibility == "hidden") {



        setTimeout(yellowLightBox, 1700);

        redBox.style.visibility = "visible";
        yellowBox.style.visibility = "visible";
        greenBox.style.visibility = "hidden";
    } else {
        alert("It's already green! Click the red button!");
    }

}