import { Figure, Circle } from '../classes/figures';

export const makeFigures = (
    figuresCounts: number,
    context: CanvasRenderingContext2D
): Figure[] => {
    const figures: Figure[] = [];

    for (let i = 0; i < figuresCounts; i++) {
        const circle = new Circle();
        console.log(
            circle.getPosition().x,
            circle.getPosition().y,
        );
        context.beginPath();
        context.arc(
            circle.getPosition().x,
            circle.getPosition().y,
            circle.getRadius(),
            0,
            2 * Math.PI,
            true
        );
        context.fillStyle = 'red';
        context.fill();
        // figures.push(circle);
    }

    return figures;
};
