var gigio = false;

document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Enter') {
    if(gigio === false){
      document.getElementById("regole").innerHTML = "Dopo esere tornato da scuola tardi (fai il serale, sei stato bocciato 5 volte in prima) ti trovi da solo alla fermata dell'autobus. Sono le 9 di sera e vedi due bus approcciarti, puoi decidere quale autobus prendere: il 95 o l' 84. Quale scegli?";
      gigio = true;
    }else{
      window.location.href = "game.html";
    }
  }
});

