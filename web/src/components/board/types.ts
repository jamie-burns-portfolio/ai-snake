
export type Position = {
    x: number,
    y: number
}

export type SetSnake = React.Dispatch<React.SetStateAction<Position[]>>;

export type SetDirection = React.Dispatch<React.SetStateAction<Direction>>;

export type SetApple = React.Dispatch<React.SetStateAction<Position>>;

export type UpdateScore  =  (score: number) => void;

export enum Direction {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}

export type UpdateSnakeParams = {
    snake: Position[],
    setSnake: SetSnake,
    direction: Direction,
    apple: Position,
    setApple: SetApple,
    updateScore: UpdateScore,
    score: number
}

export enum ArrowKeys {
    UP = 'ArrowUp',
    DOWN = 'ArrowDown',
    LEFT = 'ArrowLeft',
    RIGHT = 'ArrowRight'
}

export interface BoardProps {
    width: number;
    height: number;
    updateScore: UpdateScore;
    score: number;
}


