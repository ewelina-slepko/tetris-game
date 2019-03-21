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


class Drawer {
    constructor(shape) {
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
        this.shape.removeSqr();
        this.shape.drawSqr();
        requestAnimationFrame(this.update.bind(this));
    }
}
const drawing = new Drawer(activeShape, activeBoard)
drawing.update();


class Game {
    constructor(board, shape) {
        this.board = board;
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
const game = new Game(activeBoard, activeShape);


















//A z tą osobna klasą, to mi chodziło o te metody, żeby była klasa, która reprezentuje shape i tam masz 
//moveDown i inne movy, a także inna klasa (np. Drawer), gdzie powinny metody drawBoard, czy clearBoard.