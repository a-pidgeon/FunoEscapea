import Personaggio from './Personaggio.js';
import Oggetto from './Oggetto.js'; // Importa la classe Oggetto
import Autobus from './Autobus.js'; // Importa la classe Autobus
import Fuga from './Fuga.js'; // Importa la classe Fuga

class Piedistallo extends Personaggio {
    constructor() {
        super('', 'un piedistallo sostenente una reliqua di inestimabile potere e valore', true);
        this.oggettoDato = false; // Flag per evitare che dia l'oggetto più volte
    }

    interagisci(gioco) {
        if (!this.isVivo) {
            return;
        }
                document.getElementById('textbox').innerHTML = "Hai trovato un fumo leggendario, così potente da farti venir voglia di tornare a casa, torna alla fermata E SCAPPA DA FUNO!";
                console.log("Hai trovato il fumo e ora puoi tornare a casa");

                gioco.stanze['Fermata Sud'].setImmagine("images/map/FermataSudAutobussy.png");
                gioco.stanze['Fermata Sud'].setPersonaggio(new Autobus());

                this.daiOggetto(gioco);
                this.isVivo = false;
            }

    daiOggetto(gioco) {
        if (!this.oggettoDato) {
            let oggetto = new Oggetto('fumo', 'Un fumo leggendario dai poteri immensi'); // Crea un nuovo oggetto
            console.log(`${this.nome} ti sorride e ti dà un ${oggetto.nome}.`);
            gioco.aggiungiOggetto(oggetto); // Aggiungi l'oggetto all'inventario del giocatore
            this.oggettoDato = true;
            gioco.stanze['Fermata Sud'].setPersonaggio(new Fuga());
        }
    }
}

export default Piedistallo;
































//call for help