import { Sizes, figuresCounts } from '../constants';
import { Context } from './classes/context';
import { makeFigures } from './utils';
import { Error } from './classes/errors';
import { Figure } from './classes/figures';

export const App = (): void => {
    const canvas = <HTMLCanvasElement>document.getElementsByTagName('canvas')[0];
    canvas.width = Sizes.Width;
    canvas.height = Sizes.Height;

    const context = new Context(canvas);
    if (!context) {
        Error.missingContext();
    } else {
        const figures: Figure[] = makeFigures(figuresCounts);

        figures.forEach(figure => {
            figure.draw(context.get());
        });
    }

};
