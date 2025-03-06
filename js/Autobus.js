import Personaggio from './Personaggio.js';
import Oggetto from './Oggetto.js'; // Importa la classe Oggetto

class Autobus extends Personaggio {
  constructor() {
      super('Bus magico', ' : Un semplice seppur magico e sinistro autobus meridionale.', false);
      this.oggettoDato = false; // Flag per evitare che dia l'oggetto più volte
  }

    interagisci(gioco) {
        if (!this.isVivo) {
            return;
        }
        document.getElementById('textbox').innerHTML = `Parli con ${this.nome}: "${this.descrizione}"`;
        console.log(`Parli con ${this.nome}: "${this.descrizione}"`);
        document.getElementById('textbox').innerHTML = "";

        gioco.stanzaCorrente = gioco.stanze['Fermata Sud'];
        gioco.updateUI();

        // Filtra l'inventario per rimuovere la torcia
        gioco.inventario = gioco.inventario.filter(item => item.nome !== 'torcia');
        gioco.updateInventoryUI();
        gioco.stanze['Scantinato'].setOggetti(new Oggetto('torcia', 'Una torcia sempre accesa'));
    }
}

export default Autobus;