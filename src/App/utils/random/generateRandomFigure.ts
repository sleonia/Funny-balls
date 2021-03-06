import { Figure, Circle, Rectangle, Triangle } from '../../classes';
import { figureTypes } from '../../../constants';

export const generateRandomFigure = (): Figure => {
    const type = Math.floor(Math.random() * figureTypes);
    switch (type) {
        case 0: {
            return new Circle();
        }

        case 1: {
            return new Rectangle();
        }

        case 2: {
            return new Triangle();
        }
    }
    return new Circle();
};
