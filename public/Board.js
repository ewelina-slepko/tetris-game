class Board {
    constructor() {
        const canvas = document.getElementById('tetris');
        this.ctx = canvas.getContext('2d');
        this.gameBoard = Array(20).fill(null).map(() => Array(10).fill(0));
    }
}
const activeBoard = new Board();
