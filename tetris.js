class Board {
    constructor() {
        const canvas = document.getElementById('tetris');
        this.context = canvas.getContext('2d');
        this.gameBoard = Array(20).fill(null).map(() => Array(10).fill(0));
    }
    drawSqr(obj) {
        const sqrSize = 30;
        this.context.fillStyle = obj.color;
        this.context.fillRect(obj.xPosition * sqrSize, obj.yPosition * sqrSize, sqrSize, sqrSize);
    }
    removeSqr(obj) {
        const sqrSize = 30;
        this.context.fillStyle = ' #006064';
        this.context.fillRect(obj.xPosition * sqrSize, obj.yPosition * sqrSize - sqrSize, sqrSize, sqrSize);
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
    moveDown() {
        this.board.removeSqr(this);
        this.board.drawSqr(this);
        this.yPosition++;
    }
}
let activeSqr = new Square(activeBoard, 4, 0, 'yellow');


class Draw {
    constructor(shape) {
        this.shape = shape;
    }
    showShape() {
        this.shape.moveDown();
        requestAnimationFrame(this.showShape.bind(this));
    }
}
new Draw(activeSqr).showShape();