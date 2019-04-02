class Shape {
    constructor(board, xPos, yPos, color) {

        this.board = board;
        this.xPos = xPos;
        this.yPos = yPos;
        this.randomShape = shape[Math.floor(Math.random() * shape.length)];
        this.color = color;

    }

    setValueOnTheBoard(num) {
        this.randomShape[1].forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0 && this.yPos >= 0) {
                    this.board.gameBoard[this.yPos + y][this.xPos + x] = num;
                    console.log(num);
                }
            });
        });
    }

    detectCollision() {
        for (let y = 0; y < this.randomShape[1].length; y++) {
            for (let x = 0; x < this.randomShape[1][y].length; x++) {

                const currentSqr = this.randomShape[1][y][x];

                const isEndOfTheBoard = this.yPos + y > this.board.gameBoard.length - 1;
                const isLeftEdge = this.xPos + x < 0;
                const isRightEdge = this.xPos + x > this.board.gameBoard[0].length - 1;

                let isShapeCollision = 0;


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
<<<<<<< Updated upstream

        this.setValueOnTheBoard(0);
=======
        let randomColor = this.randomShape[0][0]
        this.setValueOnTheBoard(randomColor);
>>>>>>> Stashed changes
        this.yPos++;


        if (this.detectCollision()) {
            this.yPos--;
            this.setValueOnTheBoard(this.randomShape[0]);
            this.yPos = 0;
            this.randomShape = shape[Math.floor(Math.random() * shape.length)];
        }
        this.setValueOnTheBoard(this.randomShape[0]);
    }

    moveLeft() {
        this.setValueOnTheBoard(0);
        this.xPos--;

        if (this.detectCollision()) {
            this.xPos++;
        }
        this.setValueOnTheBoard(this.randomShape[0]);
    }

    moveRight() {
        this.setValueOnTheBoard(0);
        this.xPos++;

        if (this.detectCollision()) {
            this.xPos--;
        }
        this.setValueOnTheBoard(this.randomShape[0]);
    }
}

const activeShape = new Shape(activeBoard, 3, -1, '#ead019');