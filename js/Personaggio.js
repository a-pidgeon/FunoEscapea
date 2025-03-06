class Personaggio {
    constructor(nome, descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.isVivo = true;
    }

    interagisci(giocatore) {
        if (!this.isVivo) {
            return;
        }
        document.getElementById('textbox').innerHTML = `${this.nome}  ${this.descrizione}`;
        console.log(`Parli con ${this.nome}: "${this.descrizione}"`);
    }

    attacca(giocatore) {
        if (!this.isVivo) {
            console.log(`${this.nome} è già morto.`);
            return;
        }

        if (this.isOstile) {
            console.log(`${this.nome} ti attacca!`);
        } else {
            console.log(`Non puoi attaccare ${this.nome} senza motivo.`);
        }
    }

    uccidi() {
        this.isVivo = false;
        console.log(`${this.nome} è morto.`);
    }
}

export default Personaggio;