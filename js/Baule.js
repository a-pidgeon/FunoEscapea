import Personaggio from './Personaggio.js';
import Oggetto from './Oggetto.js'; // Importa la classe Oggetto
import Autobus from './Autobus.js'; // Importa la classe Autobus

class Baule extends Personaggio {
    constructor() {
        super('', 'Un misterioso baule medievale, abbastanza insolito per il ventunesimo secolo', false);
        this.oggettoDato = false; // Flag per evitare che dia l'oggetto più volte
    }

    interagisci(gioco) {
        if (!this.isVivo) {
            return;
        }
        document.getElementById('textbox').innerHTML = "Il baule e' chiuso, sembra che serva una chiave per aprirlo.";
        console.log("Il baule è chiuso, serve una chiave per aprirlo.");
        for (let i in gioco.inventario) {
            if (gioco.inventario[i].nome == 'chiave baule') {
                gioco.inventario.splice(i, 1);
                document.getElementById('textbox').innerHTML = "Hai aperto la cassa ed hai trovato un biglietto dell'autobus! Forse potrai usare la fermata adesso?";
                console.log("Hai aperto la cassa ed hai trovato un biglietto dell'autobus!");

                gioco.stanze['Fermata Ovest'].setImmagine("images/map/FermataOvestAutobussy.png");
                gioco.stanze['Fermata Ovest'].setPersonaggio(new Autobus());

                this.daiOggetto(gioco);
                this.isVivo = false;
            }
        }
    }

    daiOggetto(inventario) {
        if (!this.oggettoDato) {
            let oggetto = new Oggetto('biglietto giornaliero', 'Un biglietto giornaliero del bus'); // Crea un nuovo oggetto
            console.log(`${this.nome} ti sorride e ti dà un ${oggetto.nome}.`);
            inventario.aggiungiOggetto(oggetto); // Aggiungi l'oggetto all'inventario del giocatore
            this.oggettoDato = true;
        }
    }
}

export default Baule;
































//call for help