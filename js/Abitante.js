import Personaggio from './Personaggio.js';
class Abitante extends Personaggio {
  constructor() {
      super('Abitante', 'Un semplice abitante del villaggio.', false);
      this.oggettoDato = false; // Flag per evitare che dia l'oggetto più volte
  }

  interagisci(giocatore) {
      if (!this.isVivo) {
          return;
      }
      document.getElementById('textbox').innerHTML = `Parli con ${this.nome}: "${this.descrizione}"`;
      console.log(`Parli con ${this.nome}: "${this.descrizione}"`);
      document.getElementById('textbox').innerHTML = 'Abitante:"Buongiorno disperso, spero che riuscirai a trovare la strada di casa prendi questo!" ti offre una chiave';
      this.daiOggetto(giocatore);
  }

  daiOggetto(protagonista) {
      if (!this.oggettoDato) {
          let oggetto = 'moneta di oro'; // Puoi cambiare l'oggetto dato
          console.log(`${this.nome} ti sorride e ti dà un ${oggetto}.`);
          protagonista.inventario.push(oggetto);
          this.oggettoDato = true;
      }
  }
}

export { Douryna, Abitante };