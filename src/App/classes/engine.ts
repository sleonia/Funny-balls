import { Context, Figure } from '.';
import { makeFigures } from '../utils';
import { figuresCounts } from '../../constants';

export class Engine {
    private _context: Context;
    private _interval!: NodeJS.Timeout;
    private _figures: Figure[] = makeFigures(figuresCounts);

    constructor(context: Context) {
        this._context = context;
    }

    public start(): void {
        this._interval = setInterval(() => {
            this._context.setBackground();
            this._figures.forEach(figure => {
                figure.updatePosition();
                figure.draw(this._context.get());
            });
        }, 1);
    }

    public stop(): void {
        clearInterval(this._interval);
    }
}
