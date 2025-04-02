import { useState, createContext } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export const CoordinatesContext = createContext();

export function GameBoard({ onSelect, activePlayerSymbol, onCoordinatesUpdate }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
   
    function handleChange(rowIndex, colIndex) {
        setGameBoard((previousBoard) => {
            const updatedBoard = [...previousBoard.map(innerBoard => [...innerBoard])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            onCoordinatesUpdate([rowIndex, colIndex]); // Pass coordinates to parent
            return updatedBoard;
        });

        onSelect();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button 
                                    onClick={() => handleChange(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
