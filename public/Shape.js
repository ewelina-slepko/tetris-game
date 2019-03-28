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
        for (let y = 0; y < S[0].length; y++) {
            for (let x = 0; x < S[0][y].length; x++) {
                if (this.board.gameBoard[this.yPos + y + 2][this.xPos + x] !== 0) {
                    return true;
                } else {
                    return false;
                }
            }
        }
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
                console.log('kolizja!');
                this.yPos--;
                this.setOne();
                this.yPos = 0;
                let index = [Math.floor(Math.random() * color.length)];
                this.color = color[index];
            }
            this.setOne();


        } else {
            this.yPos = 0;
            let index = [Math.floor(Math.random() * color.length)];
            this.color = color[index];
        }
    }


    moveLeft() {
        const isNotLeftEdge = this.xPos > 0;
        const isLeftSideFree = this.board.gameBoard[this.yPos][this.xPos - 2] !== 1;
        if (isNotLeftEdge && isLeftSideFree) {
            this.xPos--;
            this.board.gameBoard[this.yPos][this.xPos + 2] = 0;
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

const activeShape = new Shape(activeBoard, 3, 0, color[Math.floor(Math.random() * color.length)]);