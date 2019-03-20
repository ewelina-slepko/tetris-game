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
    removeSqr() {
        this.board.context.clearRect(0, 0, 300, 600);
        this.board.gameBoard[this.yPosition][this.xPosition] = 0;

    }
    moveDown() {
        this.yPosition++;
        if (this.yPosition > 19) {
            this.board.gameBoard[this.yPosition - 1][this.xPosition] = 1;
        }
    }
}
let activeSqr = new Square(activeBoard, 4, 0, 'yellow');


class Drawer {
    constructor(shape) {
        this.shape = shape;
        this.lastTime = 0;
    }
    update(time) {
        if (time - this.lastTime >= 200) {
            this.shape.moveDown();
            this.lastTime = time;
            if (this.shape.yPosition == 20) {
                return;
            }
        }
        this.shape.removeSqr();
        this.shape.drawSqr();
        requestAnimationFrame(this.update.bind(this));
    }
}
let drawing = new Drawer(activeSqr, activeBoard)
drawing.update();


//A z tą osobna klasą, to mi chodziło o te metody, żeby była klasa, która reprezentuje shape i tam masz 
//moveDown i inne movy, a także inna klasa (np. Drawer), gdzie powinny metody drawBoard, czy clearBoard.