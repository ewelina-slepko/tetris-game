class Drawer {
    constructor(canvas, shape, board) {
        this.canvas = canvas;
        this.shape = shape;
        this.board = board;
        this.lastTime = 0;
    }
    update(time) {
        if (time - this.lastTime >= 500) {
            this.shape.moveDown();
            this.lastTime = time;
        }
        this.canvas.clearCanvas();
        this.canvas.drawCanvas();
        this.canvas.drawGrid(250, 500);
        requestAnimationFrame(this.update.bind(this));
    }
}
