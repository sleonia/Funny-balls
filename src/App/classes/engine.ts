import { Context, Figure } from '.';
import { makeFigures } from '../utils';
import { figuresCounts } from '../../constants';

export class Engine {
    private _interval!: NodeJS.Timeout;
    private _figures: Figure[] = makeFigures(figuresCounts);

    public start(context: Context): void {
        this._interval = setInterval(() => {
            context.setBackground();
            this._figures.forEach(figure => {
                figure.updatePosition();
                figure.draw(context.get());
            });
        }, 1);
    }

    public stop(): void {
        clearInterval(this._interval);
    }
}
