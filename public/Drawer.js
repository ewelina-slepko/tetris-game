class Drawer {
    constructor(canvas, shape, board, gameOver) {
        this.canvas = canvas;
        this.shape = shape;
        this.board = board;
        this.gameOver = gameOver;
        this.entryLevel = 1;
        this.lastTime = 0;
    }
    update(time) {
        let speed = time - this.lastTime >= 600;
        if (this.entryLevel === 2) {
            speed = time - this.lastTime >= 500;
        } else if (this.entryLevel === 3) {
            speed = time - this.lastTime >= 400
        } else if (this.entryLevel === 4) {
            speed = time - this.lastTime >= 300
        } else if (this.entryLevel === 5) {
            speed = time - this.lastTime >= 200
        }

        if (speed) {
            this.shape.moveDown();
            this.lastTime = time;
        }
        this.canvas.clearCanvas();
        this.canvas.drawCanvas();
        this.canvas.drawGrid();
        requestAnimationFrame(this.update.bind(this));
    }
}
