
var utente;

var check = false;

var iscritti = ["luca", "toni", "bepi", "nane", "ugo"];

iscritti[0] = "luca@gmail.com";
iscritti[1] = "toni@gmail.com";
iscritti[2] = "bepi@gmail.com";
iscritti[3] = "nane@gmail.com";
iscritti[4] = "ugo@gmail.com";

function controllo(){
  utente = document.getElementById("put").value;

  for(var i = 0; i < iscritti.length; i++){
    if(utente == iscritti[i]){
      check = true;
      console.log(check);
    }
  }

  if(check == true) {
    document.getElementById("risultato").innerHTML = "L'evento si terrà alle 22.00 della prossima settimana a casa mia";
  } else{
    document.getElementById("risultato").innerHTML = "Mi dispiace, non sei stato invitato";
  }
}
