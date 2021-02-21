import { Size, minWidth, maxWidth, minHeight, maxHeight } from '../../../constants';

export const generateRandomSize = (): Size => {
    const height = Math.floor(Math.random() * maxHeight + minHeight);
    const width = Math.floor(Math.random() * maxWidth + minWidth);

    return {
        height: height,
        width: width,
    };
};
