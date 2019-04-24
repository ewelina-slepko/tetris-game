class Game {
    constructor() {
        this.board = new Board(() => this.updateScoring());
        this.shape = new Shape(this.board, 3, -1, () => this.gameOver());
        this.canvas = new Canvas(this.board, this.shape);
        this.drawing = new Drawer(this.canvas, this.shape, this.board);
        this.scoring = document.getElementById('counter');
        this.level = document.getElementById('level');
        this.finalScore = document.getElementById('finalScore');
        this.modal = document.getElementById('myModal');
        document.getElementsByClassName('close')[0].addEventListener('click', () => this.closeModal());
        document.getElementById('left').addEventListener('click', () => this.shape.moveLeft());
        document.getElementById('down').addEventListener('click', () => this.shape.moveDown());
        document.getElementById('right').addEventListener('click', () => this.shape.moveRight());
        document.getElementById('rotation').addEventListener('click', () => this.shape.rotate());
        window.addEventListener('keydown', this.onKeydown.bind(this));
        this.score = 0;
        this.drawing.update();
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
        this.scoring.innerHTML = this.score += 90;
        if (this.score === 360 || this.score === 720 || this.score === 1440 || this.score === 2880) {
            this.level.innerHTML = this.drawing.entryLevel += 1;
            this.shape.higherSpeedInfo.innerHTML = 'TRY FASTER!';
        }
    }

    gameOver() {
        for (let y = 0; y < this.board.gameBoard.length; y++) {
            for (let x = 0; x < this.board.gameBoard[y].length; x++) {
                if (this.board.gameBoard[y][x] !== 0) {
                    this.modal.style.display = 'block'
                    this.finalScore.innerHTML = `GAME OVER! Score: ${this.score}`;
                    this.board.gameBoard[y][x] = 0
                }
            }
        }
    }
    closeModal() {
        this.modal.style.display = 'none';
        this.score = 0;
        this.scoring.innerHTML = this.score;
        this.drawing.entryLevel = 1;
        this.level.innerHTML = 1;
        this.shape.setValueOnTheBoard(0);
        this.shape.yPos = -1;
        for (let y = 0; y < this.board.gameBoard.length; y++) {
            for (let x = 0; x < this.board.gameBoard[y].length; x++) {
                if (this.board.gameBoard[y][x] !== 0) {
                    this.board.gameBoard[y][x] = 0
                }
            }
        }
    }
}
const myGame = new Game();
