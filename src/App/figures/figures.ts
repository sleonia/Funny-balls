import { Position } from '../contants';
import { generateRandomColor } from '../utils/index';

export abstract class Figure {
    private _pos: Position;
    private _color!: string;

    constructor(pos: Position) {
        this._pos = pos;
        this._color = generateRandomColor();
    }

    public getPosition(): Position {
        return this._pos;
    }

    public getColor(): string {
        return this._color;
    }
}
