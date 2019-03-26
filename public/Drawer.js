class Drawer {
    constructor(canvas, sqr) {
        this.canvas = canvas;
        this.sqr = sqr;
        this.lastTime = 0;
    }
    update(time) {
        if (time - this.lastTime >= 300) {
            this.sqr.moveDown();
            this.lastTime = time;
        }
        this.canvas.clearCanvas();
        this.canvas.drawCanvas();
        this.canvas.drawGrid(300, 600);
        requestAnimationFrame(this.update.bind(this));
    }
}
const drawing = new Drawer(canvas, activeSqr)
drawing.update();