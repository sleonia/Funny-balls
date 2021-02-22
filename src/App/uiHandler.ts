import { Context, Engine, Error } from './classes';

export const uiHandler = (context: Context): void => {
    window.onload = () => {
        const start = <HTMLButtonElement>document.getElementById('start');
        const stop = <HTMLButtonElement>document.getElementById('stop');

        const engine = new Engine(context);
        handleStartButton(start, stop, engine);

        if (!start) {
            Error.missingElementInDOM('start');
        } else {
            start.onclick = () => handleStartButton(start, stop, engine);
        }

        if (!stop) {
            Error.missingElementInDOM('stop');
        } else {   
            stop.onclick = () => handleStopButton(start, stop, engine);
        }
    
    };
};

const handleStartButton = (
    start: HTMLButtonElement,
    stop: HTMLButtonElement,
    engine: Engine
): void => {
    engine.start();
    start.disabled = true;
    stop.disabled = false;
};

const handleStopButton = (
    start: HTMLButtonElement,
    stop: HTMLButtonElement,
    engine: Engine
): void => {
    engine.stop();
    start.disabled = false;
    stop.disabled = true;
};
