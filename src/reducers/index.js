import { createReducer } from 'redux-act'
import R from 'ramda'

import winCondition from '../helpers/_winCondition'
import { addToken, checkWinCondition, playAgain, setPlayerName, startGame } from '../actions'

const defaultState = {
  gameStarted: false,
  board: ['', '', '', '', '', '', '', '', ''],
  startToken: 'X',
  nextToken: 'X',
  gameEnded: false,
  X: '',
  O: '',
  leaderboard: {},
  players: []
}

export default createReducer({
  [addToken]: (state, id) => ({
      ...state,
    board: R.update(id, state.nextToken, state.board),
    nextToken: state.nextToken === 'X' ? 'O' : 'X'
  }),
  [checkWinCondition]: (state, board) => ({
    ...state,
    gameEnded: R.indexOf('', state.board) === -1 && !winCondition(state.board) ?
      'It\'s a draw :(' :
      (winCondition(state.board) && `${winCondition(state.board) === 'X' ? state.X : state.O}  won!`) || false,
    leaderboard: winCondition(state.board) === 'X' ?
      {...state.leaderboard, [state.X]: state.leaderboard[state.X] + 1} :
      winCondition(state.board) === 'O' ?
      {...state.leaderboard, [state.O]: state.leaderboard[state.O] + 1} :
      {...state.leaderboard}
  }),
  [setPlayerName]: (state, evt) => ({
    ...state,
    [evt.target.name]: evt.target.value
  }),
  [startGame]: (state) => ({
    ...state,
    gameStarted: true,
    players: R.uniq([...state.players, state.X, state.O]),
    leaderboard: {
      ...state.leaderboard,
      [state.X]: state.leaderboard[state.X] ? state.leaderboard[state.X] : 0,
      [state.O]: state.leaderboard[state.O] ? state.leaderboard[state.O] : 0,
    }
  }),
  [playAgain]: (state) => ({
    ...state,
    nextToken: state.startToken === 'X' ? 'O' : 'X',
    startToken: state.startToken === 'X' ? 'O' : 'X',
    gameStarted: false,
    board: ['', '', '', '', '', '', '', '', ''],
    gameEnded: false
  })
}, defaultState)
