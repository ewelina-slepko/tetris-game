class Canvas {
    constructor(board, shape) {
        this.board = board;
        this.shape = shape;
        this.sqrSize = (window.innerHeight - 140) / 20;
    }

    drawCanvas() {
        this.board.gameBoard.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.board.ctx.fillStyle = value;
                    this.board.ctx.fillRect(x * this.sqrSize, y * this.sqrSize, this.sqrSize, this.sqrSize);
                    this.board.ctx.strokeRect(x * this.sqrSize, y * this.sqrSize, this.sqrSize, this.sqrSize);
                    this.board.ctx.shadowColor = '#2e3135';
                    this.board.ctx.lineWidth = 2;
                    this.board.ctx.strokeStyle = '#2e3135';
                }
            });
        });
    }
    clearCanvas() {
        this.board.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
    drawGrid(width, height) {
        for (let x = this.sqrSize; x < width; x += this.sqrSize) {
            this.board.ctx.fillStyle = '#2d2d2e';
            this.board.ctx.fillRect(x, 0, 1, height);
        }
        for (let y = this.sqrSize; y < height; y += this.sqrSize) {
            this.board.ctx.fillStyle = '#2d2d2e';
            this.board.ctx.fillRect(0, y, width, 1);
        }
    }
}
