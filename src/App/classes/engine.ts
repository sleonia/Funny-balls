import { Context, Figure } from '.';
import { makeFigures } from '../utils';
import { figuresCounts } from '../../constants';

const INTERVAL_APPENDER = 1000;
const INTERVAL_UPDATER = 1;

export class Engine {
    private _context: Context;
    private _interval!: NodeJS.Timeout;
    private _intervalAppender!: NodeJS.Timeout;
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
        }, INTERVAL_UPDATER);

        this._intervalAppender = setInterval(() => {
            this._figures = [...this._figures, ...makeFigures(5)];
        }, INTERVAL_APPENDER);
    }

    public stop(): void {
        clearInterval(this._interval);
        clearInterval(this._intervalAppender);
    }
}
