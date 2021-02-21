import { Figure } from './figure';
import { generateRandomRadius } from '../../utils';

export class Circle extends Figure {
    private _radius: number;

    constructor() {
        super();
        this._radius = generateRandomRadius();
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.arc(
            this.getPosition().x,
            this.getPosition().y,
            this.getRadius(),
            0,
            2 * Math.PI,
            true
        );
        context.fillStyle = this.getColor();
        context.fill();
    }

    public updatePosition(): void {
        this.getPosition().y -= 1;
    }

    public getRadius(): number {
        return this._radius;
    }
}
