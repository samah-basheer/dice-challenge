function randomNb() {
    return Math.floor(Math.random() * 6) + 1;
}

var randomNumber1 = randomNb();
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll('img')[0];
image1.src = randomImageSource1;

var randomNumber2 = randomNb();
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll('img')[1];
image2.src = randomImageSource2;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}