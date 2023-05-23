var randNum1 = Math.floor(Math.random() * 6) + 1; //generate numbers from 1 to 6
var image1Src = "images/dice" + randNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",image1Src);


var randNum2 = Math.floor(Math.random() * 6) + 1; //generate numbers from 1 to 6
var image2Src = "images/dice" + randNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",image2Src);


if(randNum1 > randNum2){
    document.querySelector("h1").innerHTML ="🚩 Player 1 won !";
}
else if(randNum2 > randNum1){
    document.querySelector("h1").innerHTML = "Player 2 won ! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}