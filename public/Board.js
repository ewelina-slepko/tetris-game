class Board {
    constructor(shape) {
        const canvas = document.getElementById('tetris');
        this.ctx = canvas.getContext('2d');
        this.gameBoard = Array(20).fill(null).map(() => Array(10).fill(0));
        this.shape = shape;
    }
    clearOccupiedRow() {
        outer: for (let y = this.gameBoard.length - 1; y > 0; --y) { // iteracja od tyłu, bo większe prawdopodobieństwo, że na dole będzie zapełniony wiersz
            for (let x = 0; x < this.gameBoard[y].length; ++x) {
                if (this.gameBoard[y][x] === 0) {
                    continue outer;
                }
            }
            const row = this.gameBoard.splice(y, 1)[0].fill(0);
            this.gameBoard.unshift(row);
            y++;
            console.log(row);
        }
    }
}
const activeBoard = new Board();
