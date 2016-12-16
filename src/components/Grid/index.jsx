import React, {PropTypes} from 'react'
import R from 'ramda'
import './grid.css'

const Grid = ({addToken, board, checkWinCondition, leaderboard, gameEnded, nextToken, playAgain, players, score, X, O}) => {
  const onClick = idx => {
    !board[idx] && addToken(idx)
    checkWinCondition(board)
  }
  const tryAgain = () => playAgain()
  const diff = (a, b) => b.score - a.score
  const playersArr = R.sort(diff, players.map(p => ({
    name: p,
    score: leaderboard[p]
  })))

  return(
    <div className="grid">
      {gameEnded &&
        <div className="grid__overlay">
          <p  className="grid__overlay_msg">{gameEnded}</p>
          <table className="grid__overlay__score">
            <tr>
              <th>Leaderboard</th>
              <th>Score</th>
            </tr>
              {playersArr.map(p =>
                <tr>
                  <td>{p.name}</td>
                  <td>{p.score}</td>
                </tr>
              )}
          </table>
          <div
            onClick={tryAgain}
            className="grid__overlay__play-again"
          >
            ⟲
          </div>
        </div>
      }
      {board.map((b, idx) =>
        <div className="grid__space" onClick={() => onClick(idx)}>
          {b}
          {!board[idx] && <div className="grid__space__hover">{nextToken}</div>}
        </div>
      )}
    </div>
  )
}

Grid.propTypes = {
  props: PropTypes.type
}

export default Grid
