import { useEffect, useRef, useState } from 'react';
import { Direction, Position } from './types';
import { drawBoard, drawSnake, updateSnake, handleKeyPress, drawApple } from './utils';
import { BoardProps } from './types';



const Board: React.FC<BoardProps> = (props) => {
    const { updateScore, score } = props;
    // use refs
    const canvasRef = useRef<HTMLCanvasElement>(null); // passing null as initial value to ref allows direct access to the DOM
    //state variables
    const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
    const [direction, setDirection] = useState<Direction>(Direction.RIGHT);
    const [apple, setApple] = useState<Position>({ x: 20, y: 20 });
    //use effects 

    useEffect(() => {
        window.addEventListener('keydown', (event) => handleKeyPress(event, setDirection));
        return () => window.removeEventListener('keydown', (event) => handleKeyPress(event, setDirection));
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const snakeParams = { snake, setSnake, direction, apple, setApple, score, updateScore };
            updateSnake(snakeParams);
        }, 200);

        return () => clearInterval(interval);
    }, [direction, snake]);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d');
        drawBoard(ctx!);
        drawSnake(ctx!, snake);
        drawApple(ctx!, apple);
    }, [snake]);

    return (
        <canvas ref={canvasRef} {...props} />
    )
};

export default Board;