class Shape {
    constructor(board, xPos, yPos, color) {
        this.board = board;
        this.xPos = xPos;
        this.yPos = yPos;
        this.color = color;
        this.shape = [I, J, L, O, S, T, Z]
    }

    setZero() {
        S[0].forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.board.gameBoard[this.yPos + y][this.xPos + x] = 0;
                }
            });
        });
    }

    detectCollision() {
        const isLeftEdge = this.xPos < 0;
        const isRightEdge = this.xPos > this.board.gameBoard[0].length - 3;
        for (let y = 0; y < S[0].length; y++) {
            for (let x = 0; x < S[0][y].length; x++) {
                if (isLeftEdge || isRightEdge || this.board.gameBoard[this.yPos + y][this.xPos + x] !== 0 && S[0][y][x] !== 0) {
                    return true;
                }
            }
        }
        return false;
    }

    setOne() {
        S[0].forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.board.gameBoard[this.yPos + y][this.xPos + x] = 1;
                }
            });
        });
    }

    moveDown() {
        const isNotEndOfTheBoard = this.yPos < this.board.gameBoard.length - 3;
        if (isNotEndOfTheBoard) {
            this.setZero();
            this.yPos++;

            if (this.detectCollision()) {
                this.yPos--;
                this.setOne();
                this.yPos = 0;
            }
            this.setOne();
        } else {
            this.yPos = 0;
        }
    }


    moveLeft() {
        this.setZero();
        this.xPos--;

        if (this.detectCollision()) {
            this.xPos++;
            this.setOne();
        }
        this.setOne();
    }

    moveRight() {
        this.setZero();
        this.xPos++;

        if (this.detectCollision()) {
            this.xPos--;
            this.setOne();
        }
        this.setOne();
    }
}

const activeShape = new Shape(activeBoard, 3, 0, color[Math.floor(Math.random() * color.length)]);