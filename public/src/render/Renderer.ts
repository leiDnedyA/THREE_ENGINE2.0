
import { GameObjectArray } from "../Engine";

export class Renderer{
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null;
    private getGameObjects: () => GameObjectArray;

    constructor(canvas: HTMLCanvasElement, getGameObjects: () => GameObjectArray){
        this.canvas = canvas;
        this.getGameObjects = getGameObjects;
        let ctx = this.canvas.getContext('2d');

        this.ctx = null;
        
        if (ctx instanceof CanvasRenderingContext2D){
            this.ctx = ctx;
        }else{
            throw '[Renderer] Could not get 2D Rendering Context from canvas...';
        }

    }

    public render(): void{
        let gameObjects: GameObjectArray = this.getGameObjects();

        for(let i in gameObjects){
            
        }

    }

}
