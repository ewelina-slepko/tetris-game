class Shape {
    constructor(board, xPos, yPos) {

        this.board = board;
        this.xPos = xPos;
        this.yPos = yPos;
        this.randomShape = shape[Math.floor(Math.random() * shape.length)];
        this.shapeIndex = 1;

    }

    setValueOnTheBoard(valueOfOccupiedPiece) {
        console.log(this.randomShape[this.shapeIndex]);
        this.randomShape[this.shapeIndex].forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0 && this.yPos >= 0) {
                    this.board.gameBoard[this.yPos + y][this.xPos + x] = valueOfOccupiedPiece;
                }
            });
        });
    }

    detectCollision() {
        console.log(this.randomShape);

        for (let y = 0; y < this.randomShape[this.shapeIndex].length; y++) {
            for (let x = 0; x < this.randomShape[this.shapeIndex][y].length; x++) {

                const currentSqr = this.randomShape[this.shapeIndex][y][x];

                const isEndOfTheBoard = this.yPos + y > this.board.gameBoard.length - 1;
                const isLeftEdge = this.xPos + x < 0;
                const isRightEdge = this.xPos + x > this.board.gameBoard[0].length - 1;

                let isShapeCollision = 0;

                if (this.shapeIndex > 4) {
                    this.shapeIndex = 1;
                }

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


    setColor() {
        return this.randomShape[0][0];
    }

    moveDown() {
        this.setValueOnTheBoard(0);
        this.yPos++;

        if (this.detectCollision()) {
            this.yPos--;

            this.setValueOnTheBoard(this.setColor());
            this.yPos = 0;
            this.xPos = 3;
            this.randomShape = shape[Math.floor(Math.random() * shape.length)];
        }

        this.setValueOnTheBoard(this.setColor());
    }

    moveLeft() {
        this.setValueOnTheBoard(0);
        this.xPos--;

        if (this.detectCollision()) {
            this.xPos++;
        }
        this.setValueOnTheBoard(this.setColor());

    }

    moveRight() {
        this.setValueOnTheBoard(0);
        this.xPos++;

        if (this.detectCollision()) {
            this.xPos--;
        }
        this.setValueOnTheBoard(this.setColor());
    }

    rotate() {
        this.setValueOnTheBoard(0);
        this.shapeIndex++;

        if (this.shapeIndex > 4) {
            this.shapeIndex = 1;
        }
        if (this.detectCollision()) {
            this.yPos--;
            this.xPos--;
        }

        this.setValueOnTheBoard(this.setColor());
    }
}

const activeShape = new Shape(activeBoard, 3, -1);