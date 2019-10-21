var player, computer, pn1, pn2, cn1, cn2;

function gioca(){
  pn1 = Math.floor((Math.random() * 6) + 1);
  pn2 = Math.floor((Math.random() * 6) + 1);
  player = pn1 + pn2;
  document.getElementById('cas1').innerHTML = player;
  console.log(player);

  cn1 = Math.floor((Math.random() * 6) + 1);
  cn2 = Math.floor((Math.random() * 6) + 1);
  computer = cn1 + cn2;
  document.getElementById('cas2').innerHTML = computer;
  console.log(computer);

  document.getElementById('span1').style.display = "block";
  document.getElementById('span2').style.display = "block";

  if(player > computer) {
    document.getElementById('risultato').innerHTML = "hai vinto";
  } else if(player < computer) {
    document.getElementById('risultato').innerHTML = "hai perso";
  } else{
    document.getElementById('risultato').innerHTML = "pareggio";
  }
}
