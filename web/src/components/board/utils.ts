import { Direction, Position, ArrowKeys, SetDirection, UpdateSnakeParams } from './types';


const checkBoundary = (head: Position) => {
    if (head.x < 0 || head.x > 80 || head.y < 0 || head.y > 60) {
        return true;
    }
    return false;
}

const checkAppleCollision = (head: Position, apple: Position) => {
    return head.x === apple.x && head.y === apple.y;
}

export const updateSnake = (param: UpdateSnakeParams) => {
    const { snake, setSnake, direction, apple, setApple, updateScore, score } = param;
    const head = { ...snake[0] };
    let updatedSnake = [...snake];
    switch (direction) {
        case Direction.UP:
            head.y -= 1;
            break;
        case Direction.DOWN:
            head.y += 1;
            break;
        case Direction.LEFT:
            head.x -= 1;
            break;
        case Direction.RIGHT:
            head.x += 1;
            break;
    }
    //adding an element to the beginning of the array and removing the last element
    updatedSnake.unshift(head);
    if (checkAppleCollision(head, apple)){
        setApple({ x: Math.floor(Math.random() * 80), y: Math.floor(Math.random() * 60) });
        updateScore(score + 1);
    }
    else
        updatedSnake.pop();

    if (checkBoundary(head)) {
        updatedSnake = [{ x: 10, y: 10 }];
        updateScore(0);
    }

    setSnake(prev => updatedSnake);
}

export const handleKeyPress = (event: KeyboardEvent, setDirection: SetDirection) => {
    switch (event.key) {
        case ArrowKeys.UP:
            setDirection(Direction.UP);
            break;
        case ArrowKeys.DOWN:
            setDirection(Direction.DOWN);
            break;
        case ArrowKeys.LEFT:
            setDirection(Direction.LEFT);
            break;
        case ArrowKeys.RIGHT:
            setDirection(Direction.RIGHT);
            break;
    }
};


export const drawBoard = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

export const drawApple = (ctx: CanvasRenderingContext2D, apple: Position) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(apple.x * 10, apple.y * 10, 10, 10);
};

export const drawSnake = (ctx: CanvasRenderingContext2D, snake: Position[]) => {
    ctx.fillStyle = 'green';
    snake.forEach((cell) => {
        ctx.fillRect(cell.x * 10, cell.y * 10, 10, 10);
    });

}