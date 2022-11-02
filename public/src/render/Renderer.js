export class Renderer {
    canvas;
    ctx;
    getGameObjects;
    constructor(canvas, getGameObjects) {
        this.canvas = canvas;
        this.getGameObjects = getGameObjects;
        let ctx = this.canvas.getContext('2d');
        this.ctx = null;
        if (ctx instanceof CanvasRenderingContext2D) {
            this.ctx = ctx;
        }
        else {
            throw '[Renderer] Could not get 2D Rendering Context from canvas...';
        }
    }
    render() {
        let gameObjects = this.getGameObjects();
        for (let i in gameObjects) {
        }
    }
}
