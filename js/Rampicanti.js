import Personaggio from './Personaggio.js';
import Oggetto from './Oggetto.js'; // Importa la classe Oggetto

class Rampicanti extends Personaggio {
  constructor() {
      super("Un rampicante mutante", "un rampicante gigantesco blocca la strada davanti a te, nonostante colpi e tagli siano inefficaci, una pianta è pur sempre una pianta", true);
      this.oggettoDato = false; // Flag per evitare che dia l'oggetto più volte
  }

    interagisci(gioco) {
        document.getElementById('textbox').innerHTML = "Una rampicante enorme e' davanti a te che ti blocca la strada, alla tua sinistra c'e' la porta dello scantinato";
        if(gioco.inventario.some(item => item.nome === 'torcia')){
            gioco.stanze['Incrocio'].setImmagine('images/map/incrocio after trocia.png');
            gioco.updateUI();
            gioco.stanze['Incrocio'].setNord(gioco.stanze['Finale']);
            document.getElementById('textbox').innerHTML = "Hai bruciato le rampicanti con la torcia!";
        }
        if(gioco.inventario.some(item => item.nome === 'chiave arrugginita')){
            gioco.stanze['Incrocio'].setOvest(gioco.stanze['Scantinato']);
            gioco.stanze['Scantinato'].setEst(gioco.stanze['Incrocio']);                                                       gioco.inventario = gioco.inventario.filter(item => item.nome !== 'chiave arrugginita');
            document.getElementById('textbox').innerHTML = "Hai aperto la porta dello scantinato con la chiave di Douryna!";
            gioco.updateInventoryUI();
        }   
    }
}
export default Rampicanti;