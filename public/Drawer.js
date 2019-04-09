class Drawer {
    constructor(canvas, shape, board, gameOver) {
        this.canvas = canvas;
        this.shape = shape;
        this.board = board;
        this.gameOver = gameOver;
        this.lastTime = 0;
    }
    update(time) {
        if (time - this.lastTime >= 500) {
            this.shape.moveDown();
            this.lastTime = time;
        }
        this.canvas.clearCanvas();
        this.canvas.drawCanvas();
        this.canvas.drawGrid((window.innerHeight - 140) / 2, innerHeight);
        requestAnimationFrame(this.update.bind(this));
    }
}
