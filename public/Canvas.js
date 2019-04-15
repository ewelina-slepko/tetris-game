class Canvas {
    constructor(board, shape) {
        const canvas = document.getElementById('tetris');
        this.ctx = canvas.getContext('2d');
        this.ctx.canvas.height = Math.floor((window.innerHeight - 140) / 20) * 20;
        this.ctx.canvas.width = Math.floor((window.innerHeight - 140) / 20) * 20 / 2;
        this.board = board;
        this.shape = shape;
        this.sqrSize = Math.floor((window.innerHeight - 140) / 20);
    }

    drawCanvas() {
        this.board.gameBoard.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.ctx.fillStyle = value;
                    this.ctx.fillRect(x * this.sqrSize, y * this.sqrSize, this.sqrSize, this.sqrSize);
                    this.ctx.strokeRect(x * this.sqrSize, y * this.sqrSize, this.sqrSize, this.sqrSize);
                    this.ctx.shadowColor = '#2e3135';
                    this.ctx.lineWidth = 1;
                    this.ctx.strokeStyle = '#2e3135';
                }
            });
        });
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
    drawGrid() {
        for (let x = this.sqrSize; x < this.ctx.canvas.width; x += this.sqrSize) {
            this.ctx.fillStyle = '#424344';
            this.ctx.fillRect(x, 0, 1, this.ctx.canvas.height);
        }
        for (let y = this.sqrSize; y < this.ctx.canvas.height; y += this.sqrSize) {
            this.ctx.fillStyle = '#424344';
            this.ctx.fillRect(0, y, this.ctx.canvas.width, 1);
        }
    }
}
