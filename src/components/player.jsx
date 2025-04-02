import { useState, Fragment } from "react";

export default function Player({ name: initialName, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    function handleSave() {
        setIsEditing(false);
    }

    return (
        <Fragment>
            {isEditing ? (
                <li className>
                    <span className="player">
                        <input 
                            type="text" 
                            required
                            value={playerName}
                            onChange={handleNameChange}
                        />
                        <span className="player-symbol">{symbol}</span>
                        <button onClick={handleSave}>Save</button>
                    </span>
                </li>
            ) : (
                <li className={isActive ? "active" : undefined}> 
                    <span className="player">
                        <span className="player-name">{playerName}</span>
                        <span className="player-symbol">{symbol}</span>
                    </span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </li>
            )}
        </Fragment>
    );
}