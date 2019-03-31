class Shape {
    constructor(board, xPos, yPos, color) {
        this.board = board;
        this.xPos = xPos;
        this.yPos = yPos;
        this.color = color;
        this.shape = [I, J, L, O, S, T, Z]
    }

    setValueOnTheBoard(num) {
        O[0].forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0 && this.yPos >= 0) {
                    this.board.gameBoard[this.yPos + y][this.xPos + x] = num;
                }
            });
        });
    }

    detectCollision() {
        for (let y = 0; y < I[3].length; y++) {
            for (let x = 0; x < O[0][y].length; x++) {
                const isEndOfTheBoard = this.yPos + y > this.board.gameBoard.length - 1;
                const isLeftEdge = this.xPos + x < 0;
                const isRightEdge = this.xPos + x > this.board.gameBoard[0].length - 1;
                let isShapeCollision = 0;
                const currentSqr = O[0][y][x];

                if (!isEndOfTheBoard) {
                    isShapeCollision = this.board.gameBoard[this.yPos + y][this.xPos + x] !== 0;
                }
                if (currentSqr !== 0 && (isEndOfTheBoard || isLeftEdge || isRightEdge || isShapeCollision)) {
                    return true;
                }
            }
        }
        return false;
    }

    moveDown() {
        this.setValueOnTheBoard(0);
        this.yPos++;

        if (this.detectCollision()) {
            this.yPos--;
            this.setValueOnTheBoard(1);
            this.yPos = 0;
        }
        this.setValueOnTheBoard(1);
    }

    moveLeft() {
        this.setValueOnTheBoard(0);
        this.xPos--;

        if (this.detectCollision()) {
            this.xPos++;
        }
        this.setValueOnTheBoard(1);
    }

    moveRight() {
        this.setValueOnTheBoard(0);
        this.xPos++;

        if (this.detectCollision()) {
            this.xPos--;
        }
        this.setValueOnTheBoard(1);
    }
}

const activeShape = new Shape(activeBoard, 3, -1, color[Math.floor(Math.random() * color.length)]);