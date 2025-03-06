import Personaggio from './Personaggio.js';
import Douryna from './Douryna.js';
import Stanza from './Stanza.js';
import Oggetto from './Oggetto.js';
import Abitante from './Abitante.js';
import Baule from './Baule.js';
import Rampicanti from './Rampicanti.js';
import Piedistallo from './Piedistallo.js';
import Fuga from './Fuga.js';

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
    var fermataOvest = new Stanza('Fermata Ovest', 'Sei alla fermata ovest. Si intravede un sentiero nelle vicinanze.', null, null, null, null, null, 'images/map/FermataOvest.png', null);
    var percorso = new Stanza('Percorso', 'Giunto alla fine del sentiero trovi un baule chiuso da un lucchetto dorato vicino a quella che sembra un\'antica villa.', null, null, null, null, null, 'images/map/Percorso.png', null);
    var casa = new Stanza('Casa', 'Sei in una casa dall\'aspetto sinistro, abitata da una figura misteriosa. Noti inoltre una porta che sembra portare ad uno scantinato.', null, null, null, null, null, 'images/map/Casa1.png', null);
    var scantinato = new Stanza('Scantinato', 'Sei in uno scantinato. Una torcia attira la tua attenzione.', null, null, null, null, null, 'images/map/Scantinato1.png', null);
    var incrocio = new Stanza('Incrocio', 'Ti trovi a un incrocio.', null, null, null, null, null, 'images/map/Incrocio.png', null);
    var stanzaDouryna = new Stanza('Stanza Dorina', 'Sei nella stanza di Alphadouryna.', null, null, null, null, null, 'images/map/Alfa Douryna.png', null);
    var fermataSud = new Stanza('Fermata Sud', 'Sei alla fermata sud.', null, null, null, null, null, 'images/map/FermataSud.png', null);
    var cassonetto = new Stanza('Cassonetto', 'Sei vicino a un cassonetto.', null, null, null, null, null, 'images/map/Cassonetto.png', null);
    var finale = new Stanza('finale', "Sei davanti all'artefatto che ti porterà a casa", null, null, null, null, null, 'images/map/last.png', null);


    fermataOvest.setNord(percorso);
    percorso.setEst(casa);
    percorso.setSud(fermataOvest);
    casa.setOvest(percorso);
    casa.setSud(scantinato);
    scantinato.setNord(casa);

    fermataSud.setNord(stanzaDouryna);
    stanzaDouryna.setSud(fermataSud);
    stanzaDouryna.setNord(incrocio);
    incrocio.setEst(cassonetto);
    incrocio.setSud(stanzaDouryna);
    cassonetto.setOvest(incrocio);

    finale.setSud(incrocio);

    // For now, commented out as Oggetto class implementation is missing
    // scantinato.oggetti = ['torcia'];
    // cassonetto.oggetti = ['pollo'];

    let torcia = new Oggetto('torcia', 'Una torcia estremamente ardente');
    let polloKFC = new Oggetto('pollo fritto', 'Un bel pollo fritto del KFC');

    casa.setPersonaggio(new Abitante());
    percorso.setPersonaggio(new Baule());
    scantinato.setPersonaggio(new Personaggio('', "Un portone d legno, troppo solido per essere abbattuto, noti una serrattura dalla forma peculiare"));
    incrocio.setPersonaggio(new Rampicanti());
    stanzaDouryna.setPersonaggio(new Douryna());
    finale.setPersonaggio(new Piedistallo());
    
    
    scantinato.setOggetti(torcia);
    cassonetto.setOggetti(polloKFC);
    

    let stanze = {
      'Fermata Ovest': fermataOvest,
      'Percorso': percorso,
      'Casa': casa,
      'Scantinato': scantinato,
      'Incrocio': incrocio,
      'Stanza Dorina': stanzaDouryna,
      'Fermata Sud': fermataSud,
      'Cassonetto': cassonetto,
      'Finale' : finale
    };
    return stanze;
  }
}
export default GameCreator;
