import { Screen } from '../constants';
import { Context, Error } from './classes';

import { uiHandler } from './uiHandler';

export const App = (): void => {
    const canvas = <HTMLCanvasElement>document.getElementsByTagName('canvas')[0];
    canvas.width = Screen.Width;
    canvas.height = Screen.Height;
    
    const context = new Context(canvas);
    if (!context) {
        Error.missingContext();
    } else {
        uiHandler(context);
    }
};
