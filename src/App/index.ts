import { Sizes } from '../constants';
// import { Sizes, figuresCounts } from '../constants';
import { Context } from './classes/context';
// import { Figure } from './figures/figure';
import { makeFigures } from './utils';
import { Error } from './classes/errors';
// import { Figure } from './classes/figures';
// import { Error, makeFigures } from './utils';

export const App = (): void => {
    const canvas = <HTMLCanvasElement>document.getElementsByTagName('canvas')[0];
    canvas.width = Sizes.Width;
    canvas.height = Sizes.Height;

    const context = new Context(canvas);
    if (!context) {
        Error.missingContext();
    } else {
        context.beginPath();
        makeFigures(2, context.get());
    }

};
