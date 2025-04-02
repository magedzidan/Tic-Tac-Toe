import Player from "./components/player"
import { GameBoard } from "./components/game_board"
import { useState } from "react"
function App() {
  const [isActive,setIsActive]=useState('X');

  function ToggleActive(){
    setIsActive((curActive)=>curActive === 'X' ? 'O' : 'X');
  }
  return (
    <main >
      <div id="game-container" >
        <ol id="players" className="highlight-player">
          <Player name='player 1' symbol='X' isActive={isActive==="X"} ></Player>
          <Player name='player 2' symbol='O' isActive={isActive==="O"}></Player>
        </ol>
        <GameBoard onSelect={ToggleActive} activePlayerSymbol={isActive}/>
      </div>
    </main>
  )
}

export default App
