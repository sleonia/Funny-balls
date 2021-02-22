import { Position, Direction } from '../../../constants';
import {
    generateRandomPosition,
    generateRandomColor,
    generateRandomSpeed,
    generateRandomDirection
} from '../../utils';

export abstract class Figure {
    private _pos: Position;
    private _color!: string;
    private _speed!: number;
    private _direction: Direction;

    constructor() {
        this._pos = generateRandomPosition();
        this._color = generateRandomColor();
        this._speed = generateRandomSpeed();
        this._direction = generateRandomDirection();
    }

    abstract draw(context: CanvasRenderingContext2D): void;

    public updatePosition(): void {
        switch (this._direction) {
            case Direction.Top: {
                this._pos.y -= this._speed;
                break;
            }
            case Direction.Bottom: {
                this._pos.y += this._speed;
                break;
            }
        }
    }

    public getPosition(): Position {
        return this._pos;
    }

    public getColor(): string {
        return this._color;
    }
}
