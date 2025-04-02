import { useState, createContext } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
const winningCombinations = [
    // Horizontal wins
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    // Vertical wins
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    // Diagonal wins
    [[0,0], [1,1], [2,2]],
    [[0,2], [1,1], [2,0]]
];

export const CoordinatesContext = createContext();

export function GameBoard({ onSelect, activePlayerSymbol, onCoordinatesUpdate }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const [winner, setWinner] = useState(null);

    function checkWinner(board, symbol) {
        return winningCombinations.some(combination => {
            return combination.every(([row, col]) => {
                return board[row][col] === symbol;
            });
        });
    }

    function handleChange(rowIndex, colIndex) {
        if (winner) return; // Prevent moves after game is won

        setGameBoard((previousBoard) => {
            const updatedBoard = [...previousBoard.map(innerBoard => [...innerBoard])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            
            // Check for winner after move
            if (checkWinner(updatedBoard, activePlayerSymbol)) {
                setWinner(activePlayerSymbol);
                console.log(`Player ${activePlayerSymbol} wins!`);
            }
            
            onCoordinatesUpdate([rowIndex, colIndex]);
            return updatedBoard;
        });

        onSelect();
    }

    return (
        <div>
            <ol className="game-board">
                {gameBoard.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <button
                                key={`${rowIndex}-${colIndex}`}
                                className="cell"
                                onClick={() => handleChange(rowIndex, colIndex)}
                                disabled={cell !== null || winner}
                            >
                                {cell}
                            </button>
                        ))}
                    </div>
                ))}
            </ol>
            {winner && (
                <div className="winner-message">
                    Player {winner} wins! 🎉
                </div>
            )}
        </div>
    );
}