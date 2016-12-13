import { createAction } from 'redux-act'

export const checkWinCondition = createAction('check if a player has won')
export const addToken = createAction('adds  the X/O to the board')
export const setPlayerName = createAction('Set the player name')
export const startGame = createAction('Start Tic Tac Toe')
export const playAgain = createAction('Play Again? :)')
