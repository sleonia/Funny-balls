import { Position } from '../../../constants';
import {
    generateRandomPosition,
    generateRandomColor
} from '../../utils';

export abstract class Figure {
    private _pos: Position;
    private _color!: string;

    constructor() {
        this._pos = generateRandomPosition();
        this._color = generateRandomColor();
    }

    // 
    public draw(context: CanvasRenderingContext2D): void {}

    public getPosition(): Position {
        return this._pos;
    }

    public getColor(): string {
        return this._color;
    }
}
