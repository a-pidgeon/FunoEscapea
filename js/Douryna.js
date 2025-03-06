import Personaggio from './Personaggio.js';

class Douryna extends Personaggio {
    constructor() {
        super('Douryna', 'Una misteriosa figura con un debole per il pollo fritto.', false);
        this.haRubatoPollo = false; // Flag per assicurarsi che rubi il pollo solo una volta
    }

    interagisci(giocatore) {
        if (!this.isVivo) {
            return;
        }

        console.log(`Parli con ${this.nome}: "${this.descrizione}"`);
        this.rubaPollo(giocatore);
    }

    rubaPollo(protagonista) {
        if (!this.haRubatoPollo && protagonista.inventario.includes('pollo')) {
            console.log(`${this.nome} ti guarda con occhi famelici e in un attimo ti ruba il pollo fritto!`);

            // Rimuove il pollo dall'inventario del giocatore
            let index = protagonista.inventario.indexOf('pollo');
            if (index !== -1) {
                protagonista.inventario.splice(index, 1);
            }

            this.haRubatoPollo = true;
        }
    }
}

export default Douryna;
