import { Sizes, figuresCounts, interval } from '../constants';
import { Context, Error, Figure } from './classes';
import { makeFigures } from './utils';

export const App = (): void => {
    const canvas = <HTMLCanvasElement>document.getElementsByTagName('canvas')[0];
    canvas.width = Sizes.Width;
    canvas.height = Sizes.Height;

    const context = new Context(canvas);
    if (!context) {
        Error.missingContext();
    } else {
        const figures: Figure[] = makeFigures(figuresCounts);

        setInterval(() => {
            context.setBackground();
            figures.forEach(figure => {
                figure.updatePosition();
                figure.draw(context.get());
            });
        }, interval);
    }

};
