class Game {
    constructor() {
        this.board = new Board(() => this.updateScoring());
        this.shape = new Shape(this.board, 3, -1, () => this.gameOver());
        this.canvas = new Canvas(this.board, this.shape);
        this.drawing = new Drawer(this.canvas, this.shape, this.board);
        this.drawing.update();
        this.scoring = document.getElementById('counter');
        this.score = 0;

        window.addEventListener('keydown', this.onKeydown.bind(this));
        document.getElementById('left').addEventListener('click', () => this.shape.moveLeft());
        document.getElementById('down').addEventListener('click', () => this.shape.moveDown());
        document.getElementById('right').addEventListener('click', () => this.shape.moveRight());
        document.getElementById('rotation').addEventListener('click', () => this.shape.rotate());
    }

    onKeydown(e) {
        switch (e.keyCode) {
            case 40:
                this.shape.moveDown();
                break;
            case 37:
                this.shape.moveLeft();
                break;
            case 39:
                this.shape.moveRight();
                break;
            case 32:
                this.shape.rotate();
                break;
        }
    }
    updateScoring() {
        this.scoring.innerHTML = this.score += 30;
    }
    gameOver() {
        alert('Game Over!');
        for (let y = 0; y < this.board.gameBoard.length; y++) {
            for (let x = 0; x < this.board.gameBoard[y].length; x++) {
                if (this.board.gameBoard[y][x] !== 0) {
                    this.board.gameBoard[y][x] = 0
                    this.score = 0;
                    this.scoring.innerHTML = this.score;
                }
            }
        }
    }
}
const myGame = new Game();
