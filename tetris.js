class Board {
    constructor() {
        const canvas = document.getElementById('tetris');
        this.context = canvas.getContext('2d');
        this.gameBoard = Array(20).fill(null).map(() => Array(10).fill(0));
    }
}
const activeBoard = new Board();


class Shape {
    constructor(board, xPos, yPos, color) {
        this.board = board;
        this.xPos = xPos;
        this.yPos = yPos;
        this.color = color;
    }
    moveDown() {
        if (this.yPos < this.board.gameBoard.length - 1) {
            this.yPos++;
            this.board.gameBoard[this.yPos][this.xPos] = 1;
            this.board.gameBoard[this.yPos - 1][this.xPos] = 0;
        } else { // !!!!!!!!!!!!!!
            this.yPos = 0;
        }

    }
    moveLeft() {
        if (this.xPos > 0) {
            this.xPos--;
            this.board.gameBoard[this.yPos][this.xPos + 1] = 0;
        }

    }
    moveRight() {
        if (this.xPos < this.board.gameBoard[1].length - 1) {
            this.xPos++;
            this.board.gameBoard[this.yPos][this.xPos - 1] = 0;
        }
        // funkcja kolizji frame
    }
}
const activeShape = new Shape(activeBoard, 4, 0, 'yellow');



class Canvas {
    constructor(board, shape) {
        this.board = board;
        this.shape = shape;
    }
    drawCanvas() {
        const sqrSize = 30;
        this.board.context.fillStyle = this.shape.color;
        this.board.context.fillRect(this.shape.xPos * sqrSize, this.shape.yPos * sqrSize, sqrSize, sqrSize);

        this.board.gameBoard.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.board.context.fillStyle = this.shape.color;
                    this.board.context.fillRect(x * sqrSize, y * sqrSize, sqrSize, sqrSize);
                }
            });
        });


    }
    removeCanvas() {
        this.board.context.clearRect(0, 0, 300, 600);
    }
}
const canvas = new Canvas(activeBoard, activeShape);



class Drawer {
    constructor(canvas, shape) {
        this.canvas = canvas;
        this.shape = shape;
        this.lastTime = 0;
    }
    update(time) {
        if (time - this.lastTime >= 500) {
            this.shape.moveDown();
            this.lastTime = time;
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