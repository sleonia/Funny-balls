import { Position } from '../contants';
import { Figure } from './figures';

export class Circle extends Figure {
    private _radius: number;

    constructor(pos: Position, radius: number) {
        super(pos);
        this._radius = radius;
    }

    public getRadius(): number {
        return this._radius;
    }
}
