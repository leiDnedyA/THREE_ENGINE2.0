import { makeId } from "../utilities/ID.js";
export class GameObject {
    id;
    constructor() {
        this.id = makeId(25);
    }
    update(deltaTime) {
    }
    getId() {
        return this.id;
    }
}
