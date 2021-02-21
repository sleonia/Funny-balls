import { Direction } from '../../../constants';

const DIRECTION_COUNT = 2;
// const DIRECTION_COUNT = 4;

export const generateRandomDirection = (): Direction => {
    return Math.floor(Math.random() * DIRECTION_COUNT);
};
