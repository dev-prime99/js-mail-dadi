var player, computer;

player = Math.floor((Math.random() * 6) + 1);
console.log(player);

computer = Math.floor((Math.random() * 6) + 1);
console.log(computer);

if(player > computer) {
  console.log("hai vinto");
} else if(player < computer) {
  console.log("hai perso");
} else{
  console.log("pareggio");
}
