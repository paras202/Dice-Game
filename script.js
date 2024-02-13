// JavaScript code to change Player 1's dice image to a random dice between 1 to 6 (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateDiceAndWinner() {
    var player1Number = getRandomNumber(1, 6);
    var player2Number = getRandomNumber(1, 6);
    var player1ImagePath = "./images/dice" + player1Number + ".png";
    var player2ImagePath = "./images/dice" + player2Number + ".png";

    document.querySelector('.img1').setAttribute('src', player1ImagePath);
    document.querySelector('.img2').setAttribute('src', player2ImagePath);

    var winner;
    if (player1Number === player2Number) {
      winner = "Draw!";
    } 
    else if (player1Number > player2Number) {
      winner = "🏁 Player 1 Wins!";
    } 
    else {
      winner = "🏁 Player 2 Wins!";
    }
    
    document.querySelector('h1').textContent = winner;
}
  
document.querySelector("#refresh").addEventListener("click",refreshPage);

function refreshPage(){
  updateDiceAndWinner();
}

  
