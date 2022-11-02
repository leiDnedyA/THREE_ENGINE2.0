import { makeId } from "../utilities/ID.js";

export class GameObject{
    private id: string;
    
    constructor(){
        this.id = makeId(25);
    }

    public update(deltaTime: number): void{

    }

    public getId(): string{
        return this.id;
    }

}