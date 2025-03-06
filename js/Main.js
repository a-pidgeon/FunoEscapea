import GameCreator from './GameCreator.js';

class Main {
  constructor() {
    this.gameCreator = new GameCreator();
    this.stanze = this.gameCreator.creaStanze();
    this.stanzaCorrente = this.stanze['Fermata Ovest'];
    this.oggettiTrovati = [];
    this.inventario = []; // Aggiungi l'inventario del giocatore

    // Update the UI when the game starts
    this.updateUI();

    // Add event listeners for movement
    document.addEventListener('keydown', (event) => {
      this.handleMovement(event);
    });

    // Add event listener for interaction
    document.addEventListener('keydown', (event) => {
      if (event.key === 'e') { // Usa 'e' per interagire
        this.interactWithCharacter();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'r') { // Usa 'e' per interagire
        this.interactWithObject();
      }
    });

    // Add event listeners for the control buttons
    document.getElementById('control-up').addEventListener('click', () => {
      this.moveDirection('nord');
    });
    document.getElementById('control-down').addEventListener('click', () => {
      this.moveDirection('sud');
    });
    document.getElementById('control-left').addEventListener('click', () => {
      this.moveDirection('ovest');
    });
    document.getElementById('control-right').addEventListener('click', () => {
      this.moveDirection('est');
    });
  }

  updateUI() {
    if (this.stanzaCorrente) {
      const roomImage = document.getElementById('room-image');
      if (this.stanzaCorrente._immagine) {
        roomImage.src = this.stanzaCorrente._immagine;
      } else {
        console.log("Missing image for room:", this.stanzaCorrente._nome);
      }

      document.getElementById('textbox').innerHTML = this.stanzaCorrente._dialogoEntrata;
    } else {
      console.error("Current room is undefined");
    }
  }

  moveDirection(direzione) {
    switch (direzione) {
      case 'nord':
        if (this.stanzaCorrente._nord != null) {
          this.stanzaCorrente = this.stanzaCorrente._nord;
          this.updateUI();
        } else {
          console.log("Cannot move nord from here");
        }
        break;

      case 'sud':
        if (this.stanzaCorrente._sud != null) {
          this.stanzaCorrente = this.stanzaCorrente._sud;
          this.updateUI();
        } else {
          console.log("Cannot move sud from here");
        }
        break;

      case 'est':
        if (this.stanzaCorrente._est) {
          this.stanzaCorrente = this.stanzaCorrente._est;
          this.updateUI();
        } else {
          console.log("Cannot move est from here");
        }
        break;

      case 'ovest':
        if (this.stanzaCorrente._ovest) {
          this.stanzaCorrente = this.stanzaCorrente._ovest;
          this.updateUI();
        } else {
          console.log("Cannot move ovest from here");
        }
        break;

      default:
        console.log("Invalid direction");
        break;
    }
  }

  handleMovement(event) {
    const keyMap = {
      'ArrowUp': 'nord',
      'ArrowDown': 'sud',
      'ArrowLeft': 'ovest',
      'ArrowRight': 'est',
      'w': 'nord',
      's': 'sud',
      'a': 'ovest',
      'd': 'est'
    };

    const direction = keyMap[event.key];
    if (direction) {
      event.preventDefault();
      this.moveDirection(direction);
    }
  }

  interactWithCharacter() {
    if (this.stanzaCorrente._Personaggio) {
      this.stanzaCorrente._Personaggio.interagisci(this);
      if(this.stanzaCorrente._Personaggio = 'Abitante'){
        document.getElementById('textbox').innerHTML = 'Abitante:"Buongiorno disperso, spero che riuscirai a trovare la strada di casa, prendi questo!" ti da una chiave"';
        //this.aggiungiOggetto(chiaveBaule)
        this.interactWithObject;
      }
    } else {
      document.getElementById('textbox').innerHTML = ("Non c'e' nessuno con cui interagire qui.");
    }
  }
  
  interactWithObject() {
    if (this.stanzaCorrente._oggetti) {
      const oggetto = this.stanzaCorrente._oggetti;
      this.aggiungiOggetto(oggetto);
      document.getElementById('textbox').innerHTML = `Hai raccolto: ${oggetto.nome}`;
      this.stanzaCorrente._oggetti = null; // Rimuovi l'oggetto dalla stanza
    } else {
      document.getElementById('textbox').innerHTML = "Non c'è nessun oggetto da raccogliere qui.";
    }
  }
  
  aggiungiOggetto(oggetto) {
    this.inventario.push(oggetto);
    this.updateInventoryUI();
  }
  
  updateInventoryUI() {
    const inventoryElement = document.getElementById('inventory');
    inventoryElement.innerHTML = this.inventario.map(item => `
      <div class="inventory-item">${item.nome}</div>
    `).join('');
  }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Main();
});

export default Main;