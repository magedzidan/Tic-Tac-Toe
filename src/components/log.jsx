import { useState, useEffect } from "react";

export default function Log({coordinates}) {
    const [turns, setTurns] = useState([]);
    let index=0;
    useEffect(() => {
        if (coordinates[0] !== null) {
            setTurns(prevTurns => [
                ...prevTurns,
                `Player ${ turns.length % 2 === 0 ? 'X' : 'O' } selected [${coordinates[0]}, ${coordinates[1]}]`
            ]);
            index++;

        }

    }, [coordinates]);

    return (
        <ol id="log">
            {turns.map((turn, index) => (
                <li key={index}>{turn}</li>
            ))}
        </ol>
    );
}