import {Engine} from './Engine.js';
import { GameObject } from './game_objects/GameObject.js';

window.onload = function () {
    let canvas = document.querySelector('#gameCanvas');

    let e: Engine;

    if(canvas instanceof HTMLCanvasElement){
        let e = new Engine(canvas);
        let id1 = e.addGameObject(new GameObject());
        let id2 = e.addGameObject(new GameObject());
        e.start();

    }else{
        console.log('WARNING: canvas does not exist!')
    }
}