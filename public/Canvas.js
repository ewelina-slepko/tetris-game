class Canvas {
    constructor(board, shape) {
        const canvas = document.getElementById('tetris');
        this.ctx = canvas.getContext('2d');
        this.ctx.canvas.height = window.innerHeight - 160;
        this.ctx.canvas.width = (window.innerHeight - 160) / 2;
        this.board = board;
        this.shape = shape;
        this.sqrSize = (window.innerHeight - 160) / 20;
        this.height = window.innerHeight - 160;
        this.width = (window.innerHeight - 160) / 2;
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
        this.board.ctx.clearRect(0, 0, this.width, this.height);
    }
    drawGrid() {
        for (let x = this.sqrSize; x < this.width; x += this.sqrSize) {
            this.board.ctx.fillStyle = '#2d2d2e';
            this.board.ctx.fillRect(x, 0, 1, this.height);
        }
        for (let y = this.sqrSize; y < this.height; y += this.sqrSize) {
            this.board.ctx.fillStyle = '#2d2d2e';
            this.board.ctx.fillRect(0, y, this.width, 1);
        }
    }
}
