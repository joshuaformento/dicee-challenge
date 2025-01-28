var randomNumber1 = Math.round(Math.random() * 5 + 1);

var randDiceImg = "./images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randDiceImg);

var randomNumber2 = Math.round(Math.random() * 5 + 1);

var randDiceImg2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randDiceImg2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Tie!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
