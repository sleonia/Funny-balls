export const figuresCounts = 20;

export const figureTypes = 3;

export const defaultBackgroundColor = '#ffffff';

export enum Screen {
    Width = 500,
    Height = 900
}

export const minXSpeed = 0.2;
export const maxXSpeed = 1;

export interface Position {
    x: number,
    y: number
}

export interface Size {
    height: number,
    width: number
}

export const minHeight = 20;
export const maxHeight = 100;
export const minWidth = 20;
export const maxWidth = 100;

export const minRadius = 20;
export const maxRadius = 100;

export const minX = 0;
export const maxX = Screen.Width;
export const minY = 0;
export const maxY = Screen.Height;

export enum Direction {
    Top,
    Bottom
}

