import { GameObject } from "./game_objects/GameObject.js";
import { Renderer } from "./render/Renderer.js";

export interface GameObjectArray {
    [key: string]: GameObject
}

export class Engine {

    private canvas: HTMLCanvasElement;
    private gameObjects: GameObjectArray;
    private lastTime: number;
    private deltaTime: number;
    private renderer: Renderer;

    public constructor(canvas: HTMLCanvasElement) {
        
        this.canvas = canvas;
        this.renderer = new Renderer(this.canvas, this.getGameObjects);

        this.gameObjects = {}
        this.lastTime = 0;
        this.deltaTime = 0;

    }

    public start(): void {
        this.lastTime = Date.now();
        this.loop();
    }

    private loop(): void {

        /* Setting deltaTime */

        let now: number = Date.now();
        this.deltaTime = now - this.lastTime;
        this.lastTime = now;

        for (let i in this.gameObjects) {
            let gameObject: GameObject = this.gameObjects[i];
            gameObject.update(this.deltaTime);
        }

        requestAnimationFrame(this.loop.bind(this));
    }

    public addGameObject(gameObject: GameObject): string {

        let id: string = gameObject.getId();
        this.gameObjects[id] = gameObject;

        return id;
    }

    public removeGameObject(id: string): void {

        if (this.gameObjects.hasOwnProperty(id)) {
            delete this.gameObjects[id]
        } else {
            console.log(`WARNING: GameObject with id "${id}" could not be removed because it does not exist!`);
        }

    }

    public getGameObjects(): GameObjectArray {
        return this.gameObjects;
    }

}