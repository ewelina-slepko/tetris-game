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
    }
    moveDown() {
        this.yPosition++;
        this.board.gameBoard[this.yPosition];
        //+ przypisać jedynkę w pozycji na tablicy.
        //console.log(this.board.gameBoard[this.yPosition]);

        //A z tą osobna klasą, to mi chodziło o te metody, żeby była klasa, która reprezentuje shape i tam masz 
        //moveDown i inne movy, a także inna klasa (np. Drawer), gdzie powinny metody drawBoard, czy clearBoard.
    }
}
let activeSqr = new Square(activeBoard, 4, 0, 'yellow');


class Draw {
    constructor(shape) {
        this.shape = shape;
        this.dropCounter = 0;
        this.lastTime = 0;
    }
    update(time = 0) {
        const deltaTime = time - this.lastTime;
        this.lastTime = time;
        this.dropCounter += deltaTime;

        if (this.dropCounter > 1000) {
            this.shape.moveDown();
            this.dropCounter = 0;
            if (this.shape.yPosition == 6) {
                return;
            }
        }
        this.shape.removeSqr();
        this.shape.drawSqr();
        requestAnimationFrame(this.update.bind(this));
    }
}
let drawing = new Draw(activeSqr, activeBoard)
drawing.update();