import { Figure } from './figure';
import { generateRandomSize } from '../../utils';
import { Size } from '../../../constants';
import { Screen } from '../../../constants';

export class Rectangle extends Figure {
    private _size: Size;

    constructor() {
        super();
        this._size = generateRandomSize();
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.rect(
            this.getPosition().x,
            this.getPosition().y,
            this.getSize().width,
            this.getSize().height
        );
        context.fillStyle = this.getColor();
        context.fill();
    }

    public isVisible(): boolean {
        if (this.getPosition().y > Screen.Height
            || this.getPosition().y + this.getSize().height < 0) {
            return false;
        }

        return true;
    }

    public getSize(): Size {
        return this._size;
    }
}
