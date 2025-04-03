import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jota', 'Reina', 'Rey', 'As'];
const suits = [
  { name: 'heart', symbol: '♥' },
  { name: 'spade', symbol: '♠' },
  { name: 'club', symbol: '♣' },
  { name: 'diamond', symbol: '♦' }
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCard() {
  const randomValueIndex = getRandomInt(0, cardValues.length - 1);
  const randomSuitIndex = getRandomInt(0, suits.length - 1);
  const value = cardValues[randomValueIndex];
  const suit = suits[randomSuitIndex];
  const cardHTML = `
    <div class="card ${suit.name}">
      <div class="corner top-left">
        ${value} ${suit.symbol}
      </div>
      <div class="center">
        ${suit.symbol}
      </div>
      <div class="corner bottom-right">
        ${value} ${suit.symbol}
      </div>
    </div>
  `;
  document.getElementById('card-container').innerHTML = cardHTML;
}

window.onload = generateCard;
document.getElementById('new-card-button').addEventListener('click', generateCard);
setInterval(generateCard, 10000);




  console.log("Hello Rigo from the console!");
};
