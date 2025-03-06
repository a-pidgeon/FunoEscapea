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
        // Remove the torch from inventory - log items first to debug
        console.log("Inventory before removing torch:", gioco.inventario);
        gioco.inventario = gioco.inventario.filter(item => {
            // Handle both string items and object items
            if (typeof item === 'string') {
                return item !== 'torcia';
            } else if (item && item.nome) {
                return item.nome !== 'torcia';
            }
            return true;
        });
        console.log("Inventory after removing torch:", gioco.inventario);

        this.isVivo = false;
    }
}

export default Autobus;