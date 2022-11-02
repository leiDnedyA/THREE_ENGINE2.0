import { Renderer } from "./render/Renderer.js";
export class Engine {
    canvas;
    gameObjects;
    lastTime;
    deltaTime;
    renderer;
    constructor(canvas) {
        this.canvas = canvas;
        this.renderer = new Renderer(this.canvas, this.getGameObjects);
        this.gameObjects = {};
        this.lastTime = 0;
        this.deltaTime = 0;
    }
    start() {
        this.lastTime = Date.now();
        this.loop();
    }
    loop() {
        /* Setting deltaTime */
        let now = Date.now();
        this.deltaTime = now - this.lastTime;
        this.lastTime = now;
        for (let i in this.gameObjects) {
            let gameObject = this.gameObjects[i];
            gameObject.update(this.deltaTime);
        }
        requestAnimationFrame(this.loop.bind(this));
    }
    addGameObject(gameObject) {
        let id = gameObject.getId();
        this.gameObjects[id] = gameObject;
        return id;
    }
    removeGameObject(id) {
        if (this.gameObjects.hasOwnProperty(id)) {
            delete this.gameObjects[id];
        }
        else {
            console.log(`WARNING: GameObject with id "${id}" could not be removed because it does not exist!`);
        }
    }
    getGameObjects() {
        return this.gameObjects;
    }
}
