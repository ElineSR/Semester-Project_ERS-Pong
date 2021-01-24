
// GETTING USER INPUT ON THE START PAGE FOR NAME, DIFFICULTY AND CHOOSEN STYLE
// Local storage for the storing users inputed name

const inpPlayer1 = document.getElementById("inpPlayer1");
const gameInpBtn = document.getElementById("gameInpBtn");

gameInpBtn.onclick = function (){
  const inpDifficulty = document.querySelector('input[name="difficulty"]:checked').value;
  const inpStyle = document.querySelector('input[name="styleType"]:checked').value;
  const player1 = inpPlayer1.value;
  const difficulty = inpDifficulty;
  const style = inpStyle;
  localStorage.setItem(player1, difficulty, style);
  
  location.href = "game.html";
  
};

