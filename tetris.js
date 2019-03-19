class Board {
    constructor() {
        const canvas = document.getElementById('tetris');
        this.context = canvas.getContext('2d');
        this.gameBoard = Array(20).fill(null).map(() => Array(10).fill(0));
    }
}
let activeBoard = new Board();

class Square {
    constructor(board, xPosition, yPosition, color) {
        this.board = board;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.color = color;
    }
    drawSqr() {
        const sqrSize = 30;
        this.board.context.fillStyle = this.color;
        this.board.context.fillRect(this.xPosition * sqrSize, this.yPosition * sqrSize, sqrSize, sqrSize);
    }
    removeSqr(obj) {
        const sqrSize = 30;
        this.board.context.fillStyle = ' #006064';
        this.board.context.fillRect(this.xPosition * sqrSize, this.yPosition * sqrSize - sqrSize, sqrSize, sqrSize);
    }
    moveDown() {
        this.removeSqr(this);
        this.drawSqr(this);
        this.yPosition++;
    }
}
let activeSqr = new Square(activeBoard, 4, 0, 'yellow');


class Draw {
    constructor(shape) {
        this.shape = shape;
    }
    animateShape() {
        this.shape.moveDown();
        requestAnimationFrame(this.animateShape.bind(this));
    }
}
new Draw(activeSqr).animateShape();