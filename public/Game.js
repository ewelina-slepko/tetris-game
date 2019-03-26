class Game {
    constructor(sqr) {
        this.sqr = sqr;
        window.addEventListener('keydown', this.onKeydown.bind(this));
        document.getElementById('left').addEventListener('click', () => this.sqr.moveLeft());
        document.getElementById('down').addEventListener('click', () => this.sqr.moveDown());
        document.getElementById('right').addEventListener('click', () => this.sqr.moveRight());
    }
    onKeydown(e) {
        switch (e.keyCode) {
            case 40:
                this.sqr.moveDown();
                break;
            case 37:
                this.sqr.moveLeft();
                break;
            case 39:
                this.sqr.moveRight();
                break;
        }
    }
}
const game = new Game(activeSqr);