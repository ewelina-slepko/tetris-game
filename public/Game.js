class Game {
    constructor(shape) {
        this.shape = shape;
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
}
new Game(activeShape);
