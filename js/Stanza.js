
class Stanza {
  constructor(nome, dialogoEntrata, oggetti, nord, sud, est, ovest, immagine, Personaggio) {
    this._nome = nome;
    this._dialogoEntrata = dialogoEntrata;
    this._oggetti = oggetti;
    this._sud = sud;
    this._nord = nord; 
    this._ovest = ovest;
    this._est = est;
    this._immagine = immagine;
    this._Personaggio = Personaggio;
  }

  setNord(value){
    this._nord = value;
  }

  setSud(value){
    this._sud = value;
  }

  setOvest(value){
    this._ovest = value;
  }

  setEst(value){
    this._est = value;
  }
  
  setPersonaggio(value) {
    this._Personaggio = value;
  }

  setOggetti(value) {
    this._oggetti = value;
  }

  setImmagine(value) {
    this._immagine = value;
  }
}

export default Stanza;
