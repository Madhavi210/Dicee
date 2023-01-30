
var randnum1 = Math.floor((Math.random() * 6) + 1); //1-6 
var randImg1 = "dice" + randnum1 + ".png";  //dice 1-6
var randImgSource = "images/" + randImg1;// images/dice1-6
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randImgSource);


var randnum2 = Math.floor((Math.random() * 6) + 1);
var randImg2 = "dice" + randnum2 + ".png";
var randImageSource2 = "images/" + randImg2 ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randImageSource2);

if (randnum1 > randnum2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 wins!";
}
else if (randnum1 === randnum2) {
    document.querySelector("h1").innerText = "Draw!";
}
else {
    document.querySelector("h1").innerHTML = " 🚩  Play 2 wins!";
}