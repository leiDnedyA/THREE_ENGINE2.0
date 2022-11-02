import { GameObject } from "./GameObject";
export class TestObject extends GameObject {
    position;
    constructor(position) {
        super();
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}
