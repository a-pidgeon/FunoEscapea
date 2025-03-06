class Oggetto {
    constructor(nome, descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
    }

    getNome() {
        return this.nome;
    }

    getDescrizione() {
        return this.descrizione;
    }

    setNome(nuovoNome) {
        this.nome = nuovoNome;
    }

    setDescrizione(nuovaDescrizione) {
        this.descrizione = nuovaDescrizione;
    }
}
export default Oggetto