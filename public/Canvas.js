class Canvas {
    constructor(board, shape) {
        const canvas = document.getElementById('tetris');
        this.ctx = canvas.getContext('2d');
        this.ctx.canvas.height = window.innerHeight - 160;
        this.ctx.canvas.width = (window.innerHeight - 160) / 2;
        this.board = board;
        this.shape = shape;
        this.sqrSize = (window.innerHeight - 160) / 20;
        this.width = (window.innerHeight - 160) / 2;
        this.height = window.innerHeight - 160;
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
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    drawGrid() {
        for (let x = this.sqrSize; x < this.width; x += this.sqrSize) {
            this.ctx.fillStyle = '#424344';
            this.ctx.fillRect(x, 0, 1, this.height);
        }
        for (let y = this.sqrSize; y < this.height; y += this.sqrSize) {
            this.ctx.fillStyle = '#424344';
            this.ctx.fillRect(0, y, this.width, 1);
        }
    }
}
