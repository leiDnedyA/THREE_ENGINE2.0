import { Vector3 } from "../math/Vector3";
import { GameObject } from "./GameObject";


export class TestObject extends GameObject{
    
    private position: Vector3;

    constructor(position: Vector3){
        super();
        this.position = position;
    }

    public getPosition(): Vector3{
        return this.position;
    }

}
