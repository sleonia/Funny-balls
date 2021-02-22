import { Context, Engine, Error } from './classes';

export const uiHandler = (context: Context): void => {
    window.onload = () => {
        const start = <HTMLButtonElement>document.getElementById('start');
        const stop = <HTMLButtonElement>document.getElementById('stop');
        const engine = new Engine();

        engine.start(context);
        start.disabled = true;
        stop.disabled = false;
        if (!start) {
            Error.missingElementInDOM('start');
        } else {
            start.onclick = () => {
                engine.start(context);
                start.disabled = true;
                stop.disabled = false;
            };
        }

        if (!stop) {
            Error.missingElementInDOM('stop');
        } else {   
            stop.onclick = () => {
                engine.stop();
                start.disabled = false;
                stop.disabled = true;
            };
        }
    
    };
};
