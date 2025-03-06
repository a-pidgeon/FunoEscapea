import Personaggio from './Personaggio.js';
import Oggetto from './Oggetto.js'; // Importa la classe Oggetto

class Abitante extends Personaggio {
  constructor() {
      super('Giorgio', 'Un semplice abitante del villaggio.', false);
      this.oggettoDato = false; // Flag per evitare che dia l'oggetto più volte
  }

  interagisci(gioco) {
      if (!this.isVivo) {
          return;
      }
      if(this.oggettoDato){
          document.getElementById('textbox').innerHTML = "Giorgio: ti ho dato la chiave, che vuoi ancora? un rene?";
      }else{
          document.getElementById('textbox').innerHTML = `Parli con ${this.nome}: "${this.descrizione}"`;
            console.log(`Parli con ${this.nome}: "${this.descrizione}"`);
            document.getElementById('textbox').innerHTML = 'Giorgio: "Buongiorno disperso, spero che riuscirai a trovare la strada di casa prendi questo!" ti offre una chiave';
            this.daiOggetto(gioco);
      }
     
  }

  daiOggetto(gioco) {
      if (!this.oggettoDato) {
          let chiaveBaule = new Oggetto('chiave baule', 'Una chiave dorata'); // Crea un nuovo oggetto
          console.log(`${this.nome} ti sorride e ti dà un ${chiaveBaule.nome}.`);
          gioco.aggiungiOggetto(chiaveBaule); // Aggiungi l'oggetto all'inventario del giocatore
          this.oggettoDato = true;
      }
  }
}

export default Abitante; 