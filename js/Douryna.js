//replit merda
import Personaggio from './Personaggio.js';
import Oggetto from './Oggetto.js'; // Importa la classe Oggetto
import Autobus from './Autobus.js'; // Importa la classe Autobus

class Douryna extends Personaggio {
    constructor() {
        super('Douryna', 'Una misteriosa figura con un debole per il pollo fritto.', false);
        this.haRubatoPollo = false; // Flag per assicurarsi che rubi il pollo solo una volta
    }

    interagisci(gioco) {
        if (!this.isVivo) {
            return;
        }

        if(gioco.inventario.some(item => item.nome === 'pollo fritto')){
            this.rubaPollo(gioco);
        }
        else{
            document.getElementById('textbox').innerHTML = "...mmm...pollo fritto...";
        }
        
        console.log(`Parli con ${this.nome}: "${this.descrizione}"`);
    }

    rubaPollo(gioco) {
        console.log("niga")
        if (!this.haRubatoPollo) {
                    document.getElementById("textbox").innerHTML = "Ti guarda con occhi famelici e in un attimo ti ruba il pollo fritto lasciando cadere una chiave!";
                    this.daiOggetto(gioco);
                    gioco.inventario = gioco.inventario.filter(item => item.nome !== 'pollo fritto');
                    gioco.updateInventoryUI();
                    this.haRubatoPollo = true;
                }
            }
        
    
    daiOggetto(inventario) {
            if (!this.oggettoDato) {
                let oggetto = new Oggetto('chiave arrugginita', 'Una chiave arrugginita dalla strana forma'); // Crea un nuovo oggetto
                console.log(`${this.nome} ti sorride e ti dà un ${oggetto.nome}.`);
                inventario.aggiungiOggetto(oggetto); // Aggiungi l'oggetto all'inventario del giocatore
                this.oggettoDato = true;
            }
        }
    }


export default Douryna;
