import { Position, minX, maxX, minY, maxY } from '../../../constants';

export const generateRandomPosition = (): Position => {
    const x: number = Math.floor((Math.random() * maxX) + minX);
    const y: number = Math.floor((Math.random() * maxY) + minY);

    return {
        x: x,
        y: y
    };
};
