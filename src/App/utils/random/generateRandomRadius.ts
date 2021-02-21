import { minRadius, maxRadius } from '../../../constants';

export const generateRandomRadius = (): number => {
    return Math.floor((Math.random() * maxRadius) + minRadius);
};
