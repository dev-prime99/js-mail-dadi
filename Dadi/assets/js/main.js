var player, computer;

function gioca(){
  player = Math.floor((Math.random() * 6) + 1);
  document.getElementById('cas1').innerHTML = player;
  console.log(player);

  computer = Math.floor((Math.random() * 6) + 1);
  document.getElementById('cas2').innerHTML = computer;
  console.log(computer);

  if(player > computer) {
    document.getElementById('risultato').innerHTML = "hai vinto";
  } else if(player < computer) {
    document.getElementById('risultato').innerHTML = "hai perso";
  } else{
    document.getElementById('risultato').innerHTML = "pareggio";
  }
}
