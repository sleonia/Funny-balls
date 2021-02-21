import { Figure } from './figure';

export class Triangle extends Figure {

    constructor() {
        super();
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        // TODO доделать
        context.fillStyle = this.getColor();
        context.fill();
    }
}
