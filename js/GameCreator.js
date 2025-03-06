import Personaggio from './Personaggio.js';
import Stanza from './Stanza.js';
import Oggetto from './Oggetto.js';

class GameCreator {
  constructor() {
  }

  creaPersonaggio(nome, descrizione, isOstile) {
    let personaggio = new Personaggio(nome, descrizione, isOstile);
    return personaggio;
  }

  creaOggetti(nome, descrizione) {
    let oggetto = new Oggetto();
  }

  creaStanze() {
    var fermataOvest = new Stanza('Fermata Ovest', 'sei arrivato alla fermata ovest', null, null, null, null, null, 'images/map/FermataOvest.png', null);
    var percorso = new Stanza('Percorso', 'arrivi su un sentiero e vedi una cassa di fronte a te, a est vedi un abitazione', null, null, null, null, null, 'images/map/Percorso.png', null);
    var casa = new Stanza('Casa', 'sei arrivato ad una casa sinistra con uno strano abitante, a sud si trova uno scantinato', null, null, null, null, null, 'images/map/Casa1.png', null);
    var scantinato = new Stanza('Scantinato', 'sei arrivato ad uno scantinato, vedi una torcia.', null, null, null, null, null, 'images/map/Scantinato1.png', null);
    var incrocio = new Stanza('Incrocio', 'ti trovi su un incrocio', null, null, null, null, null, 'images/map/Incrocio.png', null);
    var stanzaDouryna = new Stanza('Stanza Dorina', 'Sei arrivato nella stanza di alphadouryna', null, null, null, null, null, 'images/map/StanzaDorina.png', null);
    var fermataSud = new Stanza('Fermata Sud', 'sei arrivato alla fermata sud', null, null, null, null, null, 'images/map/FermataSud.png', null);
    var cassonetto = new Stanza('Cassonetto', 'sei arrivato al cassonetto', null, null, null, null, null, 'images/map/Cassonetto.png', null);

    fermataOvest.setNord(percorso);
    percorso.setEst(casa);
    percorso.setSud(fermataOvest);
    casa.setOvest(percorso);
    casa.setSud(scantinato);
    scantinato.setNord(casa);

    fermataSud.nord = stanzaDouryna;
    stanzaDouryna.sud = fermataSud;
    stanzaDouryna.nord = incrocio;
    incrocio.sud = stanzaDouryna;
    incrocio.est = cassonetto;
    cassonetto.ovest = incrocio;

    // For now, commented out as Oggetto class implementation is missing
    // scantinato.oggetti = ['torcia'];
    // cassonetto.oggetti = ['pollo'];

    var chiaveBaule = new Oggetto('chiave baule', 'Una chiave dorata');
    let torcia = new Oggetto('torcia', 'Una torcia');
    let bigliettoSud = new Oggetto('biglietto', 'Un biglietto per napoli');
    let polloKFC = new Oggetto('pollo', 'Un bel pollo fritto del KFC');
    let chiavePorta = new Oggetto('chiave', 'Una chiave misteriosa');
    let coltello = new Oggetto('coltello', 'Un coltello da cucina incredibilmente affilato...');

    casa.setPersonaggio(this.creaPersonaggio('Abitante', 'Un semplice abitante di funo', false));
    stanzaDouryna.setPersonaggio(this.creaPersonaggio('Douryna', 'Una douryna di funo', false));

    let stanze = {
      'Fermata Ovest': fermataOvest,
      'Percorso': percorso,
      'Casa': casa,
      'Scantinato': scantinato,
      'Incrocio': incrocio,
      'Stanza Dorina': stanzaDouryna,
      'Fermata Sud': fermataSud,
      'Cassonetto': cassonetto
    };
    return stanze;
  }
}
export default GameCreator;