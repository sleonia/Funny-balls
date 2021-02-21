import { Figure, Circle } from '../../classes';
// import { figureTypes } from '../../constants';

export const generateRandomFigure = (): Figure => {
    // const type = Math.floor(Math.random() * figureTypes);
    // switch (type) {
    //     case 0: {
    //         return new Circle();
    //     }
    // }
    return new Circle();
};
