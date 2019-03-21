class Board {
    constructor() {
        const canvas = document.getElementById('tetris');
        this.context = canvas.getContext('2d');
        this.gameBoard = Array(20).fill(null).map(() => Array(10).fill(0));
    }
}
const activeBoard = new Board();





class Shape {
    constructor(board, xPosition, yPosition, color) {
        this.board = board;
        this.xPosition = Math.floor(Math.random() * xPosition);
        this.yPosition = yPosition;
        this.color = color;
    }
    moveDown() {
        this.yPosition++;
        if (this.yPosition > 19) {
            this.board.gameBoard[this.yPosition - 1][this.xPosition] = 1;
            this.board.gameBoard[this.yPosition][this.xPosition] = 0;
        }
    }
    moveLeft() {
        this.xPosition--;
    }
    moveRight() {
        this.xPosition++;
    }
}
const activeShape = new Shape(activeBoard, 10, 0, 'yellow');





class Canvas {
    constructor(board, shape, color) {
        this.board = board;
        this.shape = shape; //roboczo
    }
    drawCanvas() {
        const sqrSize = 30;
        this.board.context.fillStyle = this.shape.color;
        this.board.context.fillRect(this.shape.xPosition * sqrSize, this.shape.yPosition * sqrSize, sqrSize, sqrSize);

        this.board.gameBoard.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {

                    // this.board.context.fillStyle = this.color;
                    // this.board.context.fillRect((this.shape.x + 3) * sqrSize, (this.shape.y + 3) * sqrSize, sqrSize, sqrSize);
                    //console.log(x, y);
                }
            });
        });


    }
    removeCanvas() {
        this.board.context.clearRect(0, 0, 300, 600);
    }
}
const canvas = new Canvas(activeBoard, activeShape, 'pink');





class Drawer {
    constructor(canvas, shape) {
        this.canvas = canvas;
        this.shape = shape;
        this.lastTime = 0;
    }
    update(time) {
        if (time - this.lastTime >= 800) {
            this.shape.moveDown();
            this.lastTime = time;
            if (this.shape.yPosition == 20) {
                return;
            }
        }
        this.canvas.removeCanvas();
        this.canvas.drawCanvas();
        requestAnimationFrame(this.update.bind(this));
    }
}
const drawing = new Drawer(canvas, activeShape)
drawing.update();





class Game {
    constructor(shape) {
        this.shape = shape;
        window.addEventListener('keydown', this.onKeydown.bind(this));
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
        }
    }
}
const game = new Game(activeShape);