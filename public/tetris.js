const colors = [
    '#a34198',
    '#faa32e',
    '#ead019',
    '#89c53f',
    '#0fa1c6',
];

class Board {
    constructor() {
        const canvas = document.getElementById('tetris');
        this.ctx = canvas.getContext('2d');
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
        const isNotEndOfTheBoard = this.yPos < this.board.gameBoard.length - 1;

        if (isNotEndOfTheBoard && this.board.gameBoard[this.yPos + 1][this.xPos] !== 1) {
            this.yPos++;
            this.board.gameBoard[this.yPos][this.xPos] = 1;
            this.board.gameBoard[this.yPos - 1][this.xPos] = 0;
        } else {
            this.yPos = 0;
            let index = [Math.floor(Math.random() * colors.length)];
            this.color = colors[index];
        }
    }
    moveLeft() {
        const isNotLeftEdge = this.xPos > 0;
        const isLeftSideFree = this.board.gameBoard[this.yPos][this.xPos - 1] !== 1;
        if (isNotLeftEdge && isLeftSideFree) {
            this.xPos--;
            this.board.gameBoard[this.yPos][this.xPos + 1] = 0;
        }
    }
    moveRight() {
        const isNotRightEdge = this.xPos < this.board.gameBoard[0].length - 1;
        const isRightSideFree = this.board.gameBoard[this.yPos][this.xPos + 1] !== 1;
        if (isNotRightEdge && isRightSideFree) {
            this.xPos++;
            this.board.gameBoard[this.yPos][this.xPos - 1] = 0;
        }
    }
}
const activeShape = new Shape(activeBoard, 4, 0, colors[Math.floor(Math.random() * colors.length)]);



class Canvas {
    constructor(board, shape) {
        this.board = board;
        this.shape = shape;
    }
    drawCanvas() {
        const sqrSize = 30;
        this.board.ctx.fillStyle = this.shape.color;
        this.board.ctx.fillRect(this.shape.xPos * sqrSize, this.shape.yPos * sqrSize, sqrSize, sqrSize);


        this.board.gameBoard.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.board.ctx.fillStyle = this.shape.color;
                    this.board.ctx.fillRect(x * sqrSize, y * sqrSize, sqrSize, sqrSize);
                }
            });
        });
    }
    removeCanvas() {
        this.board.ctx.clearRect(0, 0, 300, 600);
    }
    drawGrid(width, height) {
        for (let x = 0; x < width; x += 30) {
            for (let y = 0; y < height; y += 30) {
                this.board.ctx.fillStyle = "#262728";
                this.board.ctx.fillRect(y, 0, 1, height);
                this.board.ctx.fillStyle = "#262728";
                this.board.ctx.fillRect(0, y, width, 1);
            }
        }
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
        this.canvas.drawGrid(300, 600);
        requestAnimationFrame(this.update.bind(this));
    }
}
const drawing = new Drawer(canvas, activeShape)
drawing.update();



class Game {
    constructor(shape) {
        this.shape = shape;
        window.addEventListener('keydown', this.onKeydown.bind(this));
        document.getElementById('left').addEventListener('click', () => this.shape.moveLeft());
        document.getElementById('down').addEventListener('click', () => this.shape.moveDown());
        document.getElementById('right').addEventListener('click', () => this.shape.moveRight());
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