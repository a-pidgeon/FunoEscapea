import Personaggio from './Personaggio.js';

class Fuga extends Personaggio {
  constructor() {
      super('Bus fuga', ' : Un semplice seppur magico e sinistro autobus meridionale.', false);
      this.oggettoDato = false; // Flag per evitare che dia l'oggetto più volte
  }

    interagisci(gioco) {
        window.location.href = "gamewin.html";
    }
}

export default Fuga;