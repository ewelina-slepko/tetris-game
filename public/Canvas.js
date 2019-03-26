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
    clearCanvas() {
        this.board.ctx.clearRect(0, 0, 300, 600);
    }
    drawGrid(width, height) {
        for (let x = 30; x < width; x += 30) {
            this.board.ctx.fillStyle = '#2d2d2e';
            this.board.ctx.fillRect(x, 0, 1, height);
        }
        for (let y = 30; y < height; y += 30) {
            this.board.ctx.fillStyle = '#2d2d2e';
            this.board.ctx.fillRect(0, y, width, 1);
        }
    }
}
const canvas = new Canvas(activeBoard, activeShape);