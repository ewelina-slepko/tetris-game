class Square {
    constructor(board, xPos, yPos, color) {
        this.board = board;
        this.xPos = xPos;
        this.yPos = yPos;
        this.color = color;
    }

    detectCollide() {
        S[0].forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.board.gameBoard[this.yPos][this.xPos] = 1;
                    this.board.gameBoard[this.yPos - 1][this.xPos] = 0;
                }
            });
        });
    }

    moveDown() {
        const isNotEndOfTheBoard = this.yPos < this.board.gameBoard.length - 1;
        if (isNotEndOfTheBoard && this.board.gameBoard[this.yPos + 1][this.xPos] !== 1) {
            this.yPos++;
            this.detectCollide();

        } else {
            this.yPos = 0;
            let index = [Math.floor(Math.random() * color.length)];
            this.color = color[index];
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

const activeSqr = new Square(activeBoard, 4, 0, color[Math.floor(Math.random() * color.length)]);