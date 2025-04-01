import { useState } from "react";

export default function Player({name: initialName, symbol}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    return(
    <li>
    {isEditing ? (
        <span className="player">
            <input 
                type="text" 
                value={playerName}
                onChange={handleNameChange}
            />
            <span className="player-symbol">{symbol}</span>
            <button onClick={() => setIsEditing(false)}>Save</button>
        </span>
    ) : (
        <>
            <span className="player">
                <span className="player-name">{playerName}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
    )}
    </li>);
}