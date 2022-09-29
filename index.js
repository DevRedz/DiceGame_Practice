var randomNumber1 = Math.floor(6 * Math.random()) + 1; //check on Google dev tool console
var imgName1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(6 * Math.random()) + 1;
var imgName2 = "images/dice" + randomNumber2 + ".png";

if (randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent = "Draw!";
}
else if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}

else {
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}

document.querySelector(".img1").setAttribute("src", imgName1)
document.querySelector(".img2").setAttribute("src", imgName2)
