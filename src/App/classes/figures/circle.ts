import { Figure } from './figure';

export class Circle extends Figure {
    private _radius: number;

    constructor() {
        super();
        this._radius = 40;
    }

    public draw(): number {
        return 10;
    }

    public getRadius(): number {
        return this._radius;
    }
}
