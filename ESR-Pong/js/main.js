

// Local storage for the storing users inputed name

const inpPlayer1 = document.getElementById("inpPlayer1");
const gameInpBtn = document.getElementById("gameInpBtn");

gameInpBtn.onsubmit = function (){
  const player1 = inpPlayer1.value;
  console.log(player1);
};

// console.log(localStorage);