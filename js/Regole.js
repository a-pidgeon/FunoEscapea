var gigio = false;

document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Enter') {
    if(gigio === false){
      document.getElementById("regole").innerHTML = "Dopo esere tornato da scuola tardi (fai il serale, sei stato bocciato 5 volte in prima) <br>ti trovi da solo alla fermata dell'autobus. Sono le 9 di sera e vedi due bus approcciarti,<br> puoi decidere quale autobus prendere: il 92 o l' 83|. Quale scegli?<br>";
      gigio = true;
      // Mostra i pulsanti quando gigio è true
      document.getElementById("button-container").style.display = "block";
    }
  }
});

// Aggiungi event listener per i pulsanti
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("button-1").addEventListener("click", function() {
    window.location.href = "gameover.html";
  });

  document.getElementById("button-2").addEventListener("click", function() {
    window.location.href = "game.html";
  });
});