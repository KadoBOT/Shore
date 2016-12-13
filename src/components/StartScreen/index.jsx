import React, {PropTypes} from 'react'
import './start-screen.css'

const StartScreen = ({setPlayerName, startGame, X, O}) => {
  const changeInput = evt => setPlayerName(evt)
  const start = () => startGame()

  return(
    <div className="start-screen">
      <span className="start-screen__title">Tic Tac Toe!</span>
      <input
        name="X"
        onChange={changeInput}
        placeholder="Type Player 1 name..."
        type="text"
        value={X}
      />
      {(!X || !O) && <span className="start-screen__vs">VS</span>}
      {(X && O) && <span className="start-screen__play" onClick={start}>PLAY &#10148;</span>}
      <input
        name="O"
        onChange={changeInput}
        placeholder="Type Player 2 name..."
        type="text"
        value={O}
      />
    </div>
  )
}

StartScreen.propTypes = {
  props: PropTypes.type
}

export default StartScreen
