import { Position } from '../../../constants';
import {
    generateRandomPosition,
    generateRandomColor,
    generateRandomSpeed
} from '../../utils';

export abstract class Figure {
    private _pos: Position;
    private _color!: string;
    private _speed!: number;

    constructor() {
        this._pos = generateRandomPosition();
        this._color = generateRandomColor();
        this._speed = generateRandomSpeed();
    }

    abstract draw(context: CanvasRenderingContext2D): void;

    public updatePosition(): void {
        this._pos.y -= this._speed;
    }

    public getPosition(): Position {
        return this._pos;
    }

    public getColor(): string {
        return this._color;
    }
}
