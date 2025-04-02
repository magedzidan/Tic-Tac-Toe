import Player from "./components/player"
import { GameBoard } from "./components/game_board"
import { useState } from "react"
import Log from "./components/log";
function App() {
  const [isActive, setIsActive] = useState('X');
  const [coordinates, setCoordinates] = useState([null, null]);

  function toggleActive() {
    setIsActive((curActive) => curActive === 'X' ? 'O' : 'X');
  }

  function handleCoordinatesUpdate(newCoordinates) {
    setCoordinates(newCoordinates);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name='player 1' symbol='X' isActive={isActive === "X"}></Player>
          <Player name='player 2' symbol='O' isActive={isActive === "O"}></Player>
        </ol>
        <GameBoard 
          onSelect={toggleActive} 
          activePlayerSymbol={isActive}
          onCoordinatesUpdate={handleCoordinatesUpdate}
        />
      </div>
      <Log coordinates={coordinates}/>
    </main>
  )
}

export default App
