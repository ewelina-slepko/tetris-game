const colors = [
    '#a34198',
    '#faa32e',
    '#ead019',
    '#89c53f',
    '#0fa1c6',
];

class Board {
    constructor() {
        const canvas = document.getElementById('tetris');
        this.ctx = canvas.getContext('2d');
        this.gameBoard = Array(20).fill(null).map(() => Array(10).fill(0));
    }
}
const activeBoard = new Board();