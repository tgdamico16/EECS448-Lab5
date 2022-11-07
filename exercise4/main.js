let borderRed,borderGreen,borderBlue,
        borderWidth,bgRed,bgGreen,bgBlue;

let borderColor,bgColor;

let paragraph;

function change(){
    borderRed = document.getElementById("borderRed").value;
    borderGreen = document.getElementById("borderGreen").value;
    borderBlue = document.getElementById("borderBlue").value;
    borderWidth = document.getElementById("borderWidth").value;

    bgRed = document.getElementById("bgRed").value;
    bgGreen = document.getElementById("bgGreen").value;
    bgBlue = document.getElementById("bgBlue").value;

    paragraph = document.getElementsByTagName("p");

    borderColor = "#"+borderRed+borderGreen+borderBlue;
    bgColor = "#"+bgRed+bgGreen+bgBlue;

    paragraph[0].style.borderColor = borderColor;
    paragraph[0].style.borderWidth = borderWidth;
    paragraph[0].style.backgroundColor = bgColor;
}