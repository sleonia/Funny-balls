import { Figure } from './figure';
import { generateRandomSize } from '../../utils';
import { Size } from '../../../constants';
import { Screen } from '../../../constants';

export class Triangle extends Figure {
    private _size: Size;

    constructor() {
        super();
        this._size = generateRandomSize();
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.moveTo(this.getPosition().x, this.getPosition().y);
        context.lineTo(
            this.getPosition().x + this._size.width / 2,
            this.getPosition().y + this._size.height
        );
        context.lineTo(
            this.getPosition().x - this._size.width / 2,
            this.getPosition().y + this._size.height
        );
        context.closePath();
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
