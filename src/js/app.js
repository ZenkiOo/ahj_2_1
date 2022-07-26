import Randomize from './randomize';

const app = document.querySelector('#app');
const board = document.createElement('div');
board.classList.add('board');
app.appendChild(board);

/* eslint-disable-next-line no-plusplus */
for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  board.appendChild(cell);
}

window.onload = () => {
  const randomize = new Randomize('board', 'cell');
  randomize.showGoblinInterval(1000);
};

export default function demo(value) {
  return value;
}
