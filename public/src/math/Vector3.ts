

export class Vector3 {
    private x: number;
    private y: number;
    private z: number;

    constructor(x: number, y: number, z: number){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public getX(): number{
        return this.x;
    }

    public getY(): number{
        return this.y;
    }

    public getZ(): number{
        return this.z
    }

    public setX(x: number){
        this.x = x;
    }

    public setY(y: number) {
        this.y = y;
    }

    public setZ(z: number) {
        this.z = z;
    }

}
