import { Screen, defaultBackgroundColor } from '../../constants';
import { Error } from './errors';

export class Context extends Error {
    private _context!: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        super();

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            Error.missingContext();
        } else {
            this._context = ctx;
            this.setBackground();
        }
    }
    
    public setBackground(): void {
        this._context.fillStyle = defaultBackgroundColor;
        this._context.fillRect(0, 0, Screen.Width, Screen.Height);
    }

    public get(): CanvasRenderingContext2D {
        return this._context;
    }
}
