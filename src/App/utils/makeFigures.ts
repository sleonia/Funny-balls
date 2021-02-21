import { Figure } from '../classes/figures';
import { generateRandomFigure } from '../utils';

export const makeFigures = (figuresCounts: number): Figure[] => {
    const figures: Figure[] = [];

    for (let i = 0; i < figuresCounts; i++) {
        const figure = generateRandomFigure();
        figures.push(figure);
    }

    return figures;
};
