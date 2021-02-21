import { minXSpeed, maxXSpeed } from '../../../constants';

export const generateRandomSpeed = (): number => {
    return Math.random() * maxXSpeed + minXSpeed;
};
