import goblinImg from '../img/goblin.png';

export default class Randomize {
  constructor(board, cell) {
    this.board = document.querySelector(`.${board}`);
    this.cells = [...this.board.querySelectorAll(`.${cell}`)];
    this.activeCell = null;
  }

  getRandom() {
    const random = Math.floor(Math.random() * this.cells.length);
    if (random === this.activeCell) {
      this.getRandom();
    } else {
      this.activeCell = random;
    }
  }

  showGoblin() {
    if (document.getElementById('goblin')) {
      document.getElementById('goblin').remove();
    }

    this.getRandom();
    const goblin = new Image();
    goblin.src = goblinImg;
    goblin.id = 'goblin';
    goblin.classList.add('goblin');
    this.cells[this.activeCell].appendChild(goblin);
  }

  showGoblinInterval(speed) {
    setInterval(() => {
      this.showGoblin();
    }, speed);
  }
}
